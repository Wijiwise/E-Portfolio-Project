import { CreatePostForm } from "@/components/CreatePostForm";
import { Hero } from "@/components/Hero";
import { PostsSection } from "@/components/PostsSection";

export default async function Home() {
    return (
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
            <main className="space-y-10 sm:space-y-12">
                <Hero name="Luis Guiller Alberto M. Carlos" role="Software Engineer" bio="AVP in Training in La Salle Computer Society, Research and Development Committee"/>
                <CreatePostForm />
                <PostsSection />
            </main>
        </div>
    );
}
