"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Video } from "lucide-react"

export function PlatformVideos() {
  const videos = [
    {
      id: "1",
      title: "Rick roll, but with different link",
      thumbnail: "/cryptocurrency-tutorial-video.jpg",
    },
    {
      id: "2",
      title: "Platform Introduction",
      thumbnail: "/blockchain-network.png",
    },
    {
      id: "3",
      title: "D.K. Astley - Never Gonna Give You Up",
      thumbnail: "/defi-staking-guide.jpg",
    },
  ]

  return (
    <Card className="glass-card border-border/40">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Video className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>Platform Intro Videos</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Learn about the KOLS ecosystem</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all cursor-pointer shadow-lg hover:shadow-primary/20"
            >
              <img
                src={video.thumbnail || "/placeholder.svg?height=360&width=640"}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 glow-effect">
                  <Play className="h-7 w-7 text-primary fill-primary" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-semibold line-clamp-2 text-balance">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
