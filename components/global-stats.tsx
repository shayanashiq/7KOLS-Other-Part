"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function GlobalStats() {
  const [isOpen, setIsOpen] = useState(false)

  const globalStats = [
    { label: "Total joined wallets", value: "12,847" },
    { label: "Total deposited (USDT)", value: "542,891 USDT" },
    { label: "Sent to Treasury", value: "89,234 USDT" },
    { label: "Accumulated fee", value: "10,969 USDT" },
    { label: "Total withdrew", value: "489,234 USDT" },
  ]

  const addressInfo = [
    { label: "USDT Token", value: "0x55d3...f4a7" },
    { label: "Treasury", value: "0x7e4a...6f3a" },
    { label: "Fee wallet", value: "0x9c2b...8d1e" },
  ]

  return (
    <div className="space-y-4">
      {/* Global Statistics */}
      <Card className="glass-card border-border/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Global Statistics</CardTitle>
              <CardDescription>Platform-wide performance metrics</CardDescription>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">Real-time</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {globalStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/40 hover:border-primary/30 transition-colors"
              >
                <span className="text-sm text-foreground/80">{stat.label}</span>
                <span className="font-mono font-semibold text-primary text-sm">{stat.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Address Info */}
      <Card className="glass-card border-border/40">
        <CardHeader>
          <CardTitle className="text-xl">Address Info</CardTitle>
          <CardDescription className="text-xs">USDT / Treasury / Fee</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {addressInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border/40 hover:border-accent/30 transition-colors"
              >
                <span className="text-sm text-foreground/80">{info.label}</span>
                <span className="font-mono text-sm text-accent">{info.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upline Section - Collapsible */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className="glass-card border-border/40">
          <CollapsibleTrigger className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <CardTitle>Upline (Staking + Top 6)</CardTitle>
                    <CardDescription>View your upline structure</CardDescription>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="p-8 text-center rounded-lg bg-secondary/30 border border-border/40 border-dashed">
                <p className="text-sm text-foreground/60">Your upline structure will appear here</p>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  )
}
