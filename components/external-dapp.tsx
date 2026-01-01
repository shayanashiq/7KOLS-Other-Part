import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Info, Sparkles, ExternalLink } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ExternalDapp() {
  const dapps = [
    {
      title: "Coming Soon #1",
      description: "Live revenue data from external DApps will be displayed in this area.",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      icon: Sparkles,
    },
    {
      title: "Coming Soon #2",
      description: "Multiple external services will connect here to share real revenue streams.",
      gradient: "from-accent/20 via-accent/10 to-transparent",
      icon: Zap,
    },
    {
      title: "Coming Soon #3",
      description: "Performance of external projects will be reflected in near real-time.",
      gradient: "from-chart-3/20 via-chart-3/10 to-transparent",
      icon: Sparkles,
    },
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
            <ExternalLink className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">External DApp Revenue</h2>
            <p className="text-sm text-muted-foreground mt-1">Integration with ecosystem partners</p>
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="mt-1">
              <div className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">External projects send USDT to pool periodically</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dapps.map((dapp, idx) => {
          const Icon = dapp.icon
          return (
            <Card
              key={idx}
              className={`glass-card border-border/50 bg-gradient-to-br ${dapp.gradient} hover:border-primary/50 transition-all duration-300 group overflow-hidden`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold">{dapp.title}</CardTitle>
                  <div className="p-2.5 rounded-xl bg-background/70 backdrop-blur-sm border border-border/40 group-hover:bg-background/90 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{dapp.description}</p>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <span className="text-xs font-medium text-primary">Status: Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
