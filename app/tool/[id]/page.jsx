import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ExternalLink, Heart, Share2, Flag, TrendingUp, Clock } from "lucide-react"

// Mock data for the tool
const toolData = {
  id: 1,
  name: "Advanced content writing and blog post generator",
  description:
    "Transform your content creation process with our advanced AI writing tool. Generate high-quality blog posts, articles, and marketing copy in minutes, not hours. Our AI understands context, maintains your brand voice, and creates SEO-optimized content that engages your audience.",
  category: "Writing & Content",
  rating: 4.9,
  reviews: 1247,
  badge: "Top Rated",
  provider: "ContentAI Labs",
  features: [
    "AI-powered content generation",
    "SEO optimization built-in",
    "Brand voice consistency",
    "Multiple content formats",
    "Real-time collaboration",
    "Plagiarism detection",
  ],
  about:
    "ContentAI Labs has been at the forefront of AI writing technology since 2020. Our advanced content writing tool uses state-of-the-art language models to help businesses and creators produce high-quality content at scale. With over 50,000 satisfied users worldwide, we're committed to making content creation faster, easier, and more effective.",
}

const trendingTools = [
  { name: "Smart Image Generator Pro", category: "Image & Design", rating: 4.8 },
  { name: "Code Assistant Ultimate", category: "Developer Tools", rating: 4.7 },
  { name: "Marketing Copy AI", category: "Marketing & SEO", rating: 4.6 },
]

const latestNews = [
  { title: "New AI Writing Features Released", date: "2 days ago" },
  { title: "Platform Security Update", date: "1 week ago" },
  { title: "Community Milestone: 50K Users", date: "2 weeks ago" },
]

export default function ToolDetailPage({ params }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>{toolData.category}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{toolData.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tool Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={toolData.badge === "Top Rated" ? "default" : "secondary"}>{toolData.badge}</Badge>
                    <Badge variant="outline">{toolData.category}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{toolData.name}</h1>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{toolData.description}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-lg">{toolData.rating}</span>
                      <span className="text-gray-500">({toolData.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>by</span>
                      <Badge variant="outline" className="bg-gray-50">
                        {toolData.provider}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try Tool
                    </Button>
                    <Button variant="outline" size="lg">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="lg">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="lg">
                      <Flag className="w-4 h-4 mr-2" />
                      Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool Image/Preview */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🖼️</span>
                  </div>
                  <p className="text-gray-500">Tool preview image</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="about"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                  >
                    Reviews ({toolData.reviews})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">{toolData.about}</p>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {toolData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">User Reviews</h3>
                      <Button variant="outline">Write a Review</Button>
                    </div>

                    {/* Sample reviews */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b border-gray-200 pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="font-medium">John Doe</span>
                            <span className="text-sm text-gray-500">2 days ago</span>
                          </div>
                          <p className="text-gray-700">
                            This tool has completely transformed my content creation workflow. The AI generates
                            high-quality content that requires minimal editing.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTools.map((tool, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-900 truncate">{tool.name}</p>
                      <p className="text-xs text-gray-500">{tool.category}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{tool.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Latest News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Latest News
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestNews.map((news, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-medium text-sm text-gray-900">{news.title}</p>
                    <p className="text-xs text-gray-500">{news.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
