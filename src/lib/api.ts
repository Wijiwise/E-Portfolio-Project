export type Post = {
  id: number;
  body: string;
};
interface BackendPost {
  id: number;
  content: string;
  created_at?: string;
  updated_at?: string;
}

const POSTS_API_URL = "http://localhost:5000/api/posts";

export async function getPosts(): Promise<Post[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(POSTS_API_URL, { 
      cache: "no-store", 
      signal: controller.signal 
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    const data = await response.json() as BackendPost[];

    if (!Array.isArray(data)) return [];

    return data.map((p: BackendPost) => ({
      id: p.id,
      body: p.content
    }));

  } catch (error) {
    console.error("Fetch error:", error instanceof Error ? error.message : "Unknown error");
    return [];
  }
}