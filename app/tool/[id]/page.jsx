import Header from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ExternalLink, Heart, Share2, Flag, TrendingUp, Clock } from "lucide-react"
import { tools } from "@/lib/data"
import { notFound } from "next/navigation"

const trendingTools = [
  { name: "AI Content Writer", category: "Writing & Content", rating: 4.8 },
  { name: "Design Assistant", category: "Design & Creative", rating: 4.6 },
  { name: "Code Generator", category: "Code & Development", rating: 4.9 },
]

const latestNews = [
  { title: "New AI Writing Features Released", date: "2 days ago" },
  { title: "Platform Security Update", date: "1 week ago" },
  { title: "Community Milestone: 50K Users", date: "2 weeks ago" },
]

export default function ToolDetailPage({ params }) {
  const toolData = tools.find((tool) => tool.id === Number.parseInt(params.id))

  if (!toolData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
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
          {/* Main Content - Tool Info */}
          <div className="lg:col-span-3">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={toolData.badge === "Top Rated" ? "default" : "secondary"}>{toolData.badge}</Badge>
                  <Badge variant="outline">{toolData.type}</Badge>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{toolData.category}</span>
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

        <div className="mt-8">
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
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="social-feeds"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                  Social Feeds
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                >
                  Team
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6">
                <div className="space-y-8">
                  {/* Tool Summary */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tool Summary</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{toolData.description}</p>

                    {/* Use Cases */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {toolData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Features */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {toolData.tags.map((tag, index) => (
                        <div key={index} className="p-4 bg-blue-50 rounded-lg text-center">
                          <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2"></div>
                          <span className="text-sm font-medium text-gray-900 capitalize">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="about" className="p-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {toolData.provider}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {toolData.provider} has been at the forefront of AI technology, creating innovative tools that help
                    businesses and individuals achieve their goals more efficiently. Our commitment to excellence and
                    user satisfaction drives everything we do.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Target Audience</h3>
                      <p className="text-gray-600">{toolData.targetAudience}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Supported Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {toolData.languages.map((lang, index) => (
                          <Badge key={index} variant="secondary">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Integrations</h3>
                      <div className="flex flex-wrap gap-2">
                        {toolData.integrations.map((integration, index) => (
                          <Badge key={index} variant="outline">
                            {integration}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">API Available</h3>
                      <Badge variant={toolData.apiAvailable ? "default" : "secondary"}>
                        {toolData.apiAvailable ? "Yes" : "No"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="social-feeds" className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Feeds</h3>
                  <p className="text-gray-500">
                    Connect with the community and see what others are saying about this tool.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="team" className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Meet the Team</h3>
                  <p className="text-gray-500">Learn more about the people behind {toolData.provider}.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
