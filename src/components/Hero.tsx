type HeroProps = {
    name: string;
    role: string;
    bio: string;
    githubUrl?: string;
    imageUrl?: string;
};

export function Hero({ name, role, bio, githubUrl, imageUrl }: HeroProps) {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <div
                className="pointer-events-none absolute inset-0 opacity-70"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.06) 0%, rgba(15, 23, 42, 0) 55%)",
                }}
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-5">
                    <div className="flex items-center gap-4">
                        {imageUrl && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img 
                                src={imageUrl} 
                                alt={name} 
                                className="h-16 w-16 rounded-full border-2 border-border object-cover shadow-sm sm:h-20 sm:w-20"
                            />
                        )}
                        <div className="inline-flex items-center rounded-full border border-border bg-muted-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                            {role}
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            {name}
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                            {bio}
                        </p>
                    </div>
                </div>

                {githubUrl && (
                    <a 
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                )}
            </div>
        </section>
    );
}