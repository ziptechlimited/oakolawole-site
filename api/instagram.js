const IG_USER_ID = process.env.IG_USER_ID;
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;
const IG_USERNAME = process.env.IG_USERNAME || "";
const IG_PROFILE_PIC = process.env.IG_PROFILE_PIC || "";

async function fetchJson(url) {
  const r = await fetch(url, { headers: { Accept: "application/json" } });
  if (!r.ok) {
    const text = await r.text().catch(() => "");
    const err = new Error(`Upstream error ${r.status}: ${text}`);
    err.status = r.status;
    throw err;
  }
  return r.json();
}

async function getMediaPage({ limit }) {
  const base = `https://graph.facebook.com/v19.0/${IG_USER_ID}/media`;
  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp"
  ].join(",");
  const url = `${base}?fields=${fields}&limit=${limit}&access_token=${encodeURIComponent(IG_ACCESS_TOKEN)}`;
  const json = await fetchJson(url);
  return json.data || [];
}

async function expandCarouselChildren(mediaId) {
  const url = `https://graph.facebook.com/v19.0/${mediaId}/children?fields=id,media_type,media_url,thumbnail_url&access_token=${encodeURIComponent(
    IG_ACCESS_TOKEN,
  )}`;
  const json = await fetchJson(url);
  const arr = (json.data || []).map((c) => c.media_url || c.thumbnail_url).filter(Boolean);
  return arr;
}

async function buildPosts({ take }) {
  const media = await getMediaPage({ limit: Math.max(10, take) });
  const posts = [];
  const username = IG_USERNAME; // optional; Graph may not return username on media reliably
  const profile = IG_PROFILE_PIC;

  // Expand carousels
  for (const m of media) {
    let mediaUrls = [];
    if (m.media_type === "CAROUSEL_ALBUM") {
      try {
        mediaUrls = await expandCarouselChildren(m.id);
      } catch {
        mediaUrls = [m.thumbnail_url || m.media_url].filter(Boolean);
      }
    } else {
      mediaUrls = [m.media_url || m.thumbnail_url].filter(Boolean);
    }
    if (!mediaUrls.length) continue;
    posts.push({
      id: String(m.id),
      username: username || "",
      profile_picture_url: profile || "",
      media_type: m.media_type,
      media_url: mediaUrls,
      caption: m.caption || "",
      timestamp: m.timestamp || new Date().toISOString(),
      like_count: 0,
      comment_count: 0,
      location: null,
      permalink: m.permalink || "",
    });
    if (posts.length >= take) break;
  }
  return posts;
}

export default async function handler(req, res) {
  if (req.method && req.method.toUpperCase() !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const page = Math.max(1, parseInt((req.query && req.query.page) || "1", 10) || 1);
  const pageSize = Math.min(50, Math.max(1, parseInt((req.query && req.query.pageSize) || "12", 10) || 12));

  // If no credentials, return a 501 so client can gracefully fall back
  if (!IG_USER_ID || !IG_ACCESS_TOKEN) {
    res.status(501).json({ error: "Instagram API not configured" });
    return;
  }

  try {
    // Fetch enough items to satisfy requested page.
    const take = page * pageSize;
    const all = await buildPosts({ take });
    const total = all.length;
    const start = (page - 1) * pageSize;
    const items = all.slice(start, start + pageSize);
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=300"); // 5 minutes
    res.status(200).json({ data: items, total });
  } catch (e) {
    res.status(502).json({ error: e.message || "Upstream error" });
  }
}

