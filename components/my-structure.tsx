"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MyStructure() {
  const stats = [
    { label: "Pending Amount", value: "45.67 USDT", icon: DollarSign, color: "text-primary" },
    { label: "Total Struct. Amount", value: "3,284 USDT", icon: TrendingUp, color: "text-accent" },
    { label: "Total Joined (My)", value: "2,450 USDT", icon: Users, color: "text-chart-3" },
    { label: "Total Withdrawn (My)", value: "789 USDT", icon: TrendingDown, color: "text-muted-foreground" },
  ]

  return (
    <Card className="glass-card border-border/40">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">My Structure Info</CardTitle>
            <CardDescription>Your personal structure statistics</CardDescription>
          </div>
          <Badge variant="outline" className="bg-secondary/50 border-primary/30">
            Live Data
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="glass-card rounded-lg p-4 border border-border/40 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{stat.label} information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{stat.label}</p>
                  <p className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
