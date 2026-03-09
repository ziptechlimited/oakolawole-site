import data from "@/data/rawdataset.json";
import type { InstagramPost, InstagramResponse } from "@/types/instagram";
import { transformInstagramFeed } from "../../scripts/postConverter.ts";
const source = transformInstagramFeed(data) as InstagramPost[];

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface GetPostsParams {
  page: number;
  pageSize: number;
  failRate?: number;
  minDelayMs?: number;
  maxDelayMs?: number;
}

export interface GetPostsResult {
  items: InstagramPost[];
  total: number;
}

export async function getInstagramPosts(
  params: GetPostsParams,
): Promise<GetPostsResult> {
  const {
    page,
    pageSize,
    failRate = 0,
    minDelayMs = 300,
    maxDelayMs = 800,
  } = params;
  const ms =
    Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1)) + minDelayMs;
  if (ms > 0) await delay(ms);
  const shouldFail = Math.random() < failRate;
  if (shouldFail) {
    throw new Error("Failed to load posts");
  }
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  console.log(source);
  const items = source.slice(start, end);
  return { items, total: source.length };
}

export function formatCount(n: number): string {
  return new Intl.NumberFormat(undefined, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}
