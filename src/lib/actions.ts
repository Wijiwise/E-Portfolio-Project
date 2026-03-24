"use server";

import { revalidatePath } from "next/cache";

import { createPost } from "@/lib/api";

export async function createPostAction(formData: FormData): Promise<void> {
  const bodyValue = formData.get("body");

  if (typeof bodyValue !== "string") {
    throw new Error("Post content is required.");
  }

  const body = bodyValue.trim();

  if (body.length === 0) {
    throw new Error("Post content is required.");
  }

  await createPost(body);
  revalidatePath("/");
}
