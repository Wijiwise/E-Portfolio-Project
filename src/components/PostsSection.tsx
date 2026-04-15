"use client";

import { useEffect, useState } from "react";
import { getPosts, type Post } from "@/lib/api";
import { PostCard } from "@/components/PostCard";

export function PostsSection() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Initial fetch
    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <p className="text-muted">Loading posts...</p>;

    return (
        <section id="posts" className="space-y-5">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Posts</h2>
                <p className="text-sm text-muted">Manage your workshop updates.</p>
            </div>

            <div className="grid gap-4 sm:gap-5">
                {posts.map((post) => (
                    <PostCard 
                        key={post.id} 
                        post={post} 
                    />
                ))}
            </div>
            
            {posts.length === 0 && (
                <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted">
                    No posts yet.
                </div>
            )}
        </section>
    );
}