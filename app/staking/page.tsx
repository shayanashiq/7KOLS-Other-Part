import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StakingOverview } from "@/components/staking-overview"
import { MyStakingInfo } from "@/components/my-staking-info"
import { StakingRules } from "@/components/staking-rules"
import { ExternalDapp } from "@/components/external-dapp"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function StakingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="gradient-mesh">
        <main className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Page Header */}
            <div className="pt-10 pb-12 space-y-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2 hover:gap-3 mb-2 group transition-all">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Dashboard
                </Button>
              </Link>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    KOLS <span className="text-gradient">Staking</span>
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-balance leading-relaxed">
                  Stake your KOLS tokens to earn USDT rewards and participate in the decentralized ecosystem growth
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-500">Testnet V3.1 Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Staking Overview Section */}
              <StakingOverview />

              {/* My Staking Information */}
              <MyStakingInfo />

              {/* External DApp Revenue */}
              <ExternalDapp />

              {/* Staking Rules */}
              <StakingRules />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
