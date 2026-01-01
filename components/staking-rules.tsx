import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, Shield, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function StakingRules() {
  const rules = [
    "Minimum total stake is 1000 KOLS per wallet.",
    "Staking becomes active immediately and participates in reward distribution.",
    "Once you request unstake, your stake stops participating in rewards.",
    "After requesting unstake, there is a 7-day lockup before withdrawal.",
    "You cannot stake additional KOLS while in pending unstake state.",
    "A 2% fee is applied on each reward claim:",
    "- 1.8% is redistributed back to the staking pool",
    "- 0.2% is allocated to the insurance pool",
    "The insurance pool is capped at 100 USDT.",
    "Any excess amount is automatically redistributed to all stakers.",
    "External DApps will periodically send USDT to the pool,",
    "which is then distributed to stakers in proportion to their share.",
    "The contract is designed to operate in a non-custodial, decentralized manner",
    "without centralized admin control over user funds.",
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Staking Contract Rules</h2>
          <p className="text-sm text-muted-foreground mt-1">Important guidelines for participation</p>
        </div>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 hidden sm:inline-flex">
          Read Carefully
        </Badge>
      </div>

      <Card className="glass-card border-border/50">
        <CardHeader className="border-b border-border/50 bg-muted/20">
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2.5 text-lg">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Info className="h-5 w-5 text-accent" />
              </div>
              KOLS Staking Rules
            </CardTitle>
            <AlertCircle className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {rules.map((rule, idx) => (
              <li key={idx} className="flex gap-3 text-sm leading-relaxed group">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                <span className="text-foreground/90">{rule}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
