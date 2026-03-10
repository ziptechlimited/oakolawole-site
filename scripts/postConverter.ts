import { ScrapedInstagramPost, InstagramPost } from "../src/types/instagram.ts";
export function transformInstagramPost(
  post: ScrapedInstagramPost,
): InstagramPost {
  return {
    id: post.id,

    username: post.ownerUsername || "oakolawoleandco",

    profile_picture_url: `https://instagram.flos5-2.fna.fbcdn.net/v/t51.82787-15/622008294_17851582437656705_6148423031508150229_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.flos5-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGBSfCBVyzj1Z62g1YZ-Oi5Y0vq0cGQodpxvIEKZiFL4MLv380kOAGXPyeQpUxiPJA&_nc_ohc=07Ppe93Q0KkQ7kNvwGQkkjj&_nc_gid=X7t3lX9RCU7kmuHKeAJkyw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afys6lkbGuQPsvc8kowQ1MjXEHSBDTHOQjc8pRNmmzt58A&oe=69B0F123&_nc_sid=7a9f4b`,

    media_type: post.type.toUpperCase() as
      | "IMAGE"
      | "VIDEO"
      | "CAROUSEL"
      | "SIDECAR",

    media_url: post.images.length
      ? [...(post.images || [])]
      : post.videoUrl
        ? [post.videoUrl]
        : [post.displayUrl],

    caption: post.caption ?? "",

    timestamp: post.timestamp,

    like_count: post.likesCount ?? 0,

    comment_count: post.commentsCount ?? 0,

    location: {
      id: "213385402",
      name: "Abuja, Nigeria",
    },

    permalink: post.url,
  };
}

export function transformInstagramFeed(
  posts: ScrapedInstagramPost[],
): InstagramPost[] {
  return posts.map(transformInstagramPost);
}
