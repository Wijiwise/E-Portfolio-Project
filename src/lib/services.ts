const POSTS_API_URL = "http://localhost:5000/api/posts";

export async function submitPost(text: string): Promise<void> {
  const content = text.trim();

  if (!content) {
    throw new Error("Post content is required.");
  }

  const response = await fetch(POSTS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }), 
  });

  if (!response.ok) {
    throw new Error("We could not create your post right now.");
  }
}

export async function deletePost(postId: number): Promise<void> {
  const response = await fetch(`${POSTS_API_URL}/${postId}`, {
    method: "DELETE",
  }); 
  if (!response.ok) throw new Error("Failed to delete the post.");
}

export async function editPost(postId: number, newText: string): Promise<void> {
  const content = newText.trim();

  if (!content) {
    throw new Error("Content is required.");
  }

  const response = await fetch(`${POSTS_API_URL}/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("Failed to update the post.");
  }
}