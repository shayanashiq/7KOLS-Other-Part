import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Users, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="mx-auto bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            Decentralized Staking Platform
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
            Stake, Earn, and Grow with 7KOLS
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Join thousands of users earning passive income through decentralized staking. Build your structure, earn
            rewards, and participate in the future of finance.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="glass-card rounded-xl p-6 border border-border/40">
              <TrendingUp className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">High Returns</h3>
              <p className="text-sm text-muted-foreground">Earn competitive rewards on your staked tokens</p>
            </div>

            <div className="glass-card rounded-xl p-6 border border-border/40">
              <Users className="h-8 w-8 text-accent mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Build Structure</h3>
              <p className="text-sm text-muted-foreground">Grow your network and earn from referrals</p>
            </div>

            <div className="glass-card rounded-xl p-6 border border-border/40">
              <Shield className="h-8 w-8 text-chart-3 mb-3 mx-auto" />
              <h3 className="font-semibold mb-2">Secure & Transparent</h3>
              <p className="text-sm text-muted-foreground">Smart contracts ensure safety and fairness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
