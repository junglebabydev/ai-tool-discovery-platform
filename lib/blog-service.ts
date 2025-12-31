import type { BlogPost, BlogPostWithAuthor, Author, CreateBlogPostInput, UpdateBlogPostInput } from "./types/blog"

// Mock data for development
const mockAuthors: Author[] = [
  {
    id: "1",
    name: "Sarah Chen",
    bio: "AI researcher and tech writer specializing in productivity tools and automation.",
    avatar_url: "/author-sarah.jpg",
    email: "sarah@example.com",
    twitter_handle: "@sarahchen",
    linkedin_url: "https://linkedin.com/in/sarahchen",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    bio: "Content creator and digital marketer exploring the latest AI tools.",
    avatar_url: "/author-marcus.jpg",
    email: "marcus@example.com",
    twitter_handle: "@marcusrod",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

const mockPosts: BlogPostWithAuthor[] = [
  {
    id: "1",
    title: "The Complete Guide to AI Tools for Content Creators in 2025",
    slug: "ai-tools-content-creators-2025",
    summary:
      "Discover the essential AI tools that are revolutionizing content creation, from writing to video editing.",
    content: `# Introduction\n\nArtificial Intelligence has transformed the content creation landscape...\n\n## Best Writing Tools\n\nHere are the top AI writing tools you should consider...\n\n## Video Editing AI\n\nVideo editing has never been easier with these AI-powered tools...`,
    tldr: "Explore 15+ AI tools for content creators covering writing, video editing, image generation, and social media management.",
    featured_image: "/blog-ai-tools-guide.jpg",
    author_id: "1",
    author: mockAuthors[0],
    category: "Tools",
    tags: ["AI Tools", "Content Creation", "Productivity"],
    reading_time: 8,
    view_count: 1247,
    is_published: true,
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    seo_title: "Complete Guide to AI Tools for Content Creators | 2025",
    seo_description:
      "Master content creation with our comprehensive guide to the best AI tools for writers, video editors, and social media managers.",
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    title: "ChatGPT Alternatives: 10 Powerful AI Chatbots You Should Try",
    slug: "chatgpt-alternatives-2025",
    summary:
      "While ChatGPT dominates the headlines, these alternatives offer unique features that might better suit your needs.",
    content: `# Why Look for ChatGPT Alternatives?\n\nChatGPT is excellent, but it's not the only option...\n\n## Claude by Anthropic\n\nClaude excels at...\n\n## Perplexity AI\n\nFor research and fact-checking...`,
    tldr: "Compare 10 ChatGPT alternatives including Claude, Perplexity, Gemini, and specialized AI assistants for coding, research, and creative work.",
    featured_image: "/blog-chatgpt-alternatives.jpg",
    author_id: "2",
    author: mockAuthors[1],
    category: "News",
    tags: ["AI Chatbots", "ChatGPT", "Comparison"],
    reading_time: 6,
    view_count: 892,
    is_published: true,
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    seo_title: "10 Best ChatGPT Alternatives in 2025 | AI Chatbot Comparison",
    seo_description:
      "Discover powerful ChatGPT alternatives with unique features for coding, research, and creative work.",
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    title: "Building Your Perfect Content Creator Stack with AI Tools",
    slug: "content-creator-stack-guide",
    summary: "Learn how to combine different AI tools into a cohesive workflow that maximizes your productivity.",
    content: `# What is a Tech Stack?\n\nA tech stack is a collection of tools...\n\n## The Writing Layer\n\nStart with AI writing assistants...\n\n## The Design Layer\n\nVisual content creation tools...`,
    tldr: "Step-by-step guide to building an efficient content creation workflow using complementary AI tools for writing, design, video, and distribution.",
    featured_image: "/blog-content-creator-stack.jpg",
    author_id: "1",
    author: mockAuthors[0],
    category: "Stacks",
    tags: ["AI Stacks", "Workflow", "Productivity"],
    reading_time: 10,
    view_count: 654,
    is_published: true,
    published_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    seo_title: "Build Your Perfect Content Creator AI Stack | Complete Guide",
    seo_description:
      "Create an efficient content creation workflow with our guide to combining AI tools for maximum productivity.",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

export const blogService = {
  // Get published blog posts with pagination
  async getPublishedPosts(limit = 10, offset = 0): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockPosts.slice(offset, offset + limit)
  },

  // Get recent posts for homepage
  async getRecentPosts(limit = 4): Promise<BlogPost[]> {
    return this.getPublishedPosts(limit, 0)
  },

  // Get single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPostWithAuthor | null> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const post = mockPosts.find((p) => p.slug === slug)
    if (post) {
      post.view_count++
    }
    return post || null
  },

  // Get posts by category
  async getPostsByCategory(category: string, limit = 10): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockPosts.filter((p) => p.category === category).slice(0, limit)
  },

  // Get posts by tag
  async getPostsByTag(tag: string, limit = 10): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockPosts.filter((p) => p.tags.includes(tag)).slice(0, limit)
  },

  // Search blog posts
  async searchPosts(query: string): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const lowerQuery = query.toLowerCase()
    return mockPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.summary.toLowerCase().includes(lowerQuery) ||
        p.content.toLowerCase().includes(lowerQuery),
    )
  },

  // Increment view count
  async incrementViewCount(postId: string): Promise<void> {
    const post = mockPosts.find((p) => p.id === postId)
    if (post) post.view_count++
  },

  // Admin functions
  async getAllPosts(): Promise<BlogPost[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...mockPosts]
  },

  async createPost(input: CreateBlogPostInput): Promise<BlogPost> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const newPost: BlogPostWithAuthor = {
      id: String(mockPosts.length + 1),
      ...input,
      author: mockAuthors.find((a) => a.id === input.author_id) || mockAuthors[0],
      view_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    mockPosts.unshift(newPost)
    return newPost
  },

  async updatePost(input: UpdateBlogPostInput): Promise<BlogPost> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const index = mockPosts.findIndex((p) => p.id === input.id)
    if (index !== -1) {
      mockPosts[index] = {
        ...mockPosts[index],
        ...input,
        updated_at: new Date().toISOString(),
      }
      return mockPosts[index]
    }
    throw new Error("Post not found")
  },

  async deletePost(postId: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const index = mockPosts.findIndex((p) => p.id === postId)
    if (index !== -1) {
      mockPosts.splice(index, 1)
    }
  },

  // Author functions
  async getAllAuthors(): Promise<Author[]> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...mockAuthors]
  },

  async createAuthor(author: Omit<Author, "id" | "created_at" | "updated_at">): Promise<Author> {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const newAuthor: Author = {
      id: String(mockAuthors.length + 1),
      ...author,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    mockAuthors.push(newAuthor)
    return newAuthor
  },
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
