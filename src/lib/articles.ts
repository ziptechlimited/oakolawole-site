import { articles, type BlogPost } from "@/data/articles";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface GetArticlesParams {
  page: number;
  pageSize: number;
  failRate?: number;
  minDelayMs?: number;
  maxDelayMs?: number;
}

export interface GetArticlesResult {
  items: BlogPost[];
  total: number;
}

export async function getArticles(params: GetArticlesParams): Promise<GetArticlesResult> {
  const { page, pageSize, failRate = 0, minDelayMs = 200, maxDelayMs = 600 } = params;
  const ms = Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1)) + minDelayMs;
  if (ms > 0) await delay(ms);
  const shouldFail = Math.random() < failRate;
  if (shouldFail) {
    throw new Error("Failed to load articles");
  }
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = articles.slice(start, end);
  return { items, total: articles.length };
}

