"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function DownlineSection() {
  const [isOpen, setIsOpen] = useState(true)

  const downlineStats = [
    { label: "L1-L5", value: "35 USDT", color: "text-primary" },
    { label: "L21-L25", value: "8 USDT", color: "text-primary" },
    { label: "L6-L10", value: "28 USDT", color: "text-accent" },
    { label: "L26-L30", value: "6 USDT", color: "text-accent" },
    { label: "L11-L15", value: "19 USDT", color: "text-chart-3" },
    { label: "L31-L35", value: "4 USDT", color: "text-chart-3" },
    { label: "L16-L20", value: "12 USDT", color: "text-chart-4" },
    { label: "L36-L40", value: "2 USDT", color: "text-chart-4" },
  ]

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="glass-card border-border/40">
        <CollapsibleTrigger className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <CardTitle>Downline Summary</CardTitle>
                  <CardDescription>Total downline: 420 members</CardDescription>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="space-y-4">
            {/* Downline Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {downlineStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-lg p-3 border border-border/40 text-center hover:border-primary/30 transition-colors"
                >
                  <p className="text-xs text-foreground/70 mb-1.5">{stat.label}</p>
                  <p className={`text-sm font-bold font-mono ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary" className="bg-secondary/50 border-border/40">
                Real Tree (contract)
              </Badge>
              <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                Real Time (Beta)
              </Button>
            </div>

            {/* Downline Address */}
            <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-1 font-mono text-xs text-foreground/70 overflow-hidden text-ellipsis">
                  0xb2e5d38524c1cb6023328426f7bc4cc8e3a8af92
                </div>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                  Downline 460
                </Badge>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
