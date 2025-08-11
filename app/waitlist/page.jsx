"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Key, Users, Clock, Sparkles } from "lucide-react"

export default function WaitlistPage() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [codeSubmitted, setCodeSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [inviteCode, setInviteCode] = useState("")

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email submission logic here
    setEmailSubmitted(true)
  }

  const handleCodeSubmit = (e) => {
    e.preventDefault()
    // Handle invite code submission logic here
    setCodeSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Early Access Available
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Join the Future of AI Tools</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get exclusive early access to premium AI tools, advanced features, and be the first to discover cutting-edge
            solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">2,847</div>
            <div className="text-sm text-gray-500">People waiting</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">3-5 days</div>
            <div className="text-sm text-gray-500">Average wait time</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-100 rounded-full mb-3">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-500">Premium tools</div>
          </div>
        </div>

        {/* Main Card */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get Early Access</CardTitle>
            <CardDescription>Choose how you'd like to join our exclusive community</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="request" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="request" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Request Invite
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Enter Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="request" className="mt-6">
                {!emailSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Request Early Access
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      We'll send you an invite code when your spot is ready. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">You're on the list!</h3>
                    <p className="text-gray-600 mb-4">
                      We've added <strong>{email}</strong> to our waitlist. You'll receive an invite code within 3-5
                      days.
                    </p>
                    <Badge variant="secondary">Position #2,848 in queue</Badge>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                {!codeSubmitted ? (
                  <form onSubmit={handleCodeSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="invite-code">Invite Code</Label>
                      <Input
                        id="invite-code"
                        type="text"
                        placeholder="Enter your invite code"
                        value={inviteCode}
                        onChange={(e) => setInviteCode(e.target.value)}
                        required
                        className="mt-1 font-mono"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Access Platform
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Don't have a code? Switch to "Request Invite" to join the waitlist.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome aboard!</h3>
                    <p className="text-gray-600 mb-4">
                      Your invite code has been verified. Redirecting you to the platform...
                    </p>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">What You'll Get with Early Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium AI Tools</h3>
                <p className="text-sm text-gray-600">
                  Access to exclusive AI tools and advanced features before they're available to the public.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Priority Support</h3>
                <p className="text-sm text-gray-600">
                  Get priority customer support and direct access to our development team.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Exclusive Updates</h3>
                <p className="text-sm text-gray-600">
                  Be the first to know about new tools, features, and platform updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
