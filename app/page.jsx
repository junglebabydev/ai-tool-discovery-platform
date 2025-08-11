import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Users, Zap } from "lucide-react"

const featuredTools = [
  {
    id: 1,
    name: "Advanced content writing and blog post generator",
    description:
      "Transform your content creation process with our advanced AI writing tool. Generate high-quality blog posts, articles, and marketing copy in minutes.",
    category: "Writing & Content",
    rating: 4.9,
    reviews: 1247,
    badge: "Top Rated",
    provider: "ContentAI Labs",
  },
  {
    id: 2,
    name: "Smart Image Generator Pro",
    description:
      "Create stunning visuals with AI-powered image generation. Perfect for marketing materials, social media, and creative projects.",
    category: "Image & Design",
    rating: 4.8,
    reviews: 892,
    badge: "Featured",
    provider: "VisualAI Studio",
  },
  {
    id: 3,
    name: "Code Assistant Ultimate",
    description:
      "Accelerate your development workflow with intelligent code completion, debugging assistance, and automated documentation.",
    category: "Developer Tools",
    rating: 4.7,
    reviews: 1534,
    badge: "Popular",
    provider: "DevAI Solutions",
  },
]

const categories = [
  { name: "Writing & Content", count: 45, icon: "✍️" },
  { name: "Image & Design", count: 32, icon: "🎨" },
  { name: "Developer Tools", count: 28, icon: "⚡" },
  { name: "Business & Finance", count: 24, icon: "💼" },
  { name: "Marketing & SEO", count: 19, icon: "📈" },
  { name: "Data & Analytics", count: 16, icon: "📊" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Discover the Best
              <span className="text-blue-600"> AI Tools</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Find, compare, and choose from thousands of AI-powered tools to supercharge your workflow and boost
              productivity.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse All Tools
                </Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Submit Your Tool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-md">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-500">AI Tools Listed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-md">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-500">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-100 rounded-md">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-500">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured AI Tools</h2>
            <p className="mt-4 text-lg text-gray-600">Discover the most popular and highly-rated AI tools</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={tool.badge === "Top Rated" ? "default" : "secondary"}>{tool.badge}</Badge>
                        <Badge variant="outline">{tool.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tool.rating}</span>
                      <span className="text-sm text-gray-500">({tool.reviews} reviews)</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">by {tool.provider}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
            <p className="mt-4 text-lg text-gray-600">Find AI tools organized by use case and industry</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} tools</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold">obase</h3>
            <p className="mt-2 text-gray-400">Your ultimate destination for AI tools and agents</p>
            <div className="mt-8 text-sm text-gray-500">© 2024 obase. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
