export type MediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export interface InstagramLocation {
  id: string;
  name: string;
}

export interface InstagramResponse {
  data: InstagramPost[];
}
export type ScrapedInstagramPost = {
  id: string;
  type: string;
  shortCode: string;
  caption?: string;
  url: string;
  commentsCount?: number;
  likesCount?: number;
  displayUrl?: string;
  timestamp: string;
  ownerUsername: string;
  images?: string[];
  videoUrl?: string;
};

export type InstagramPost = {
  id: string;
  username: string;
  profile_picture_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL" | "SIDECAR";
  media_url: string[];
  caption?: string;
  timestamp: string;
  like_count: number;
  comment_count: number;
  location?: {
    id: string;
    name: string;
  };
  permalink: string;
};
