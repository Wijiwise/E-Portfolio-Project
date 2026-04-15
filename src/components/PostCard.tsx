"use client";

import { useState } from "react";
import type { Post } from "@/lib/api";
import { deletePost, editPost } from "@/lib/services";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(post.body);
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure?")) return;
    try {
      await deletePost(post.id);
      window.location.reload();
    } catch (err) {
      alert("Error deleting post");
    }
  }

  async function handleUpdate() {
    setIsUpdating(true);
    try {
      await editPost(post.id, editText);
      setIsEditing(false);
      window.location.reload();
    } catch (err) {
      alert("Error updating post");
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <p className="text-xs font-medium text-muted">Post #{post.id}</p>
        <div className="flex gap-3">
          <button onClick={() => setIsEditing(!isEditing)} className="text-xs text-accent">
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button onClick={handleDelete} className="text-xs text-red-500">Delete</button>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <textarea 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
            className="min-h-24 w-full rounded-lg border border-border bg-background p-2 text-sm"
          />
          <button onClick={handleUpdate} disabled={isUpdating} className="rounded-md bg-accent px-4 py-2 text-xs font-bold text-accent-foreground">
            {isUpdating ? "Saving..." : "Save"}
          </button>
        </div>
      ) : (
        <p className="text-base leading-7 text-foreground">{post.body}</p>
      )}
    </article>
  );
}