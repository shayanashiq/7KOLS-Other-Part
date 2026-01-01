"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Award, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function StakingOverview() {
  const overviewData = [
    {
      title: "Participation Overview",
      icon: Users,
      stats: [
        { label: "Total Stakers", value: "1,247", color: "text-primary" },
        { label: "Total Active KOLS", value: "71,632", color: "text-accent" },
      ],
    },
    {
      title: "Daily Revenue",
      icon: TrendingUp,
      stats: [
        { label: "Today's Revenue", value: "2,847 USDT", color: "text-primary" },
        { label: "Yesterday's Revenue", value: "3,125 USDT", color: "text-muted-foreground" },
      ],
    },
    {
      title: "Weekly / Monthly Revenue",
      icon: DollarSign,
      stats: [
        { label: "This Week's Revenue", value: "18,432 USDT", color: "text-primary" },
        { label: "Last Week's Revenue", value: "21,567 USDT", color: "text-muted-foreground" },
        { label: "This Month's Revenue", value: "76,234 USDT", color: "text-accent" },
        { label: "Last Month's Revenue", value: "89,123 USDT", color: "text-muted-foreground" },
      ],
    },
    {
      title: "Total / Remaining Revenue & Insurance Pool",
      icon: Award,
      stats: [
        { label: "Total Distributed Rewards", value: "542,891 USDT", color: "text-primary" },
        { label: "Contract USDT Balance", value: "12,456 USDT", color: "text-accent" },
        { label: "Insurance Pool Balance", value: "100 USDT", color: "text-chart-3" },
        { label: "Total User Net Withdrawals", value: "489,234 USDT", color: "text-muted-foreground" },
        { label: "Redistribution Fee (1.8%) Total", value: "9,872 USDT", color: "text-muted-foreground" },
        { label: "Insurance Fee (0.2%) Total", value: "1,097 USDT", color: "text-muted-foreground" },
      ],
    },
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Global Staking Overview</h2>
          <p className="text-base text-muted-foreground">Real-time statistics and performance metrics</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="mt-1">
              <div className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">Live data updates every 30 seconds</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {overviewData.map((section, idx) => {
          const Icon = section.icon
          return (
            <Card
              key={idx}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-sm font-semibold leading-tight text-balance flex-1">
                    {section.title}
                  </CardTitle>
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3.5">
                {section.stats.map((stat, statIdx) => (
                  <div key={statIdx} className="flex items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground leading-relaxed">{stat.label}</span>
                    <span className={`font-mono font-semibold text-sm ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
