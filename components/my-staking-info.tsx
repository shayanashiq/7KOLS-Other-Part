"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet, TrendingUp, Gift, Info, Clock, Coins } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"

export function MyStakingInfo() {
  const [stakeAmount, setStakeAmount] = useState("1000")

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
          <Coins className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">My Staking Information</h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your staking positions and rewards</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* My Wallet State */}
        <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                My Wallet State
              </CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Your current staking status and rewards</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">My Active Stake</span>
                <span className="font-mono font-bold text-lg text-primary">2,450 KOLS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">My Share</span>
                <span className="font-mono font-bold text-base text-accent">3.42%</span>
              </div>
              <div className="text-xs text-muted-foreground/80 bg-muted/30 p-2 rounded-lg">
                Share = My Active Stake / Total Active Stake
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  Pending Unstake
                </span>
                <span className="font-mono font-semibold text-sm">0 KOLS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Unlock Time</span>
                <span className="font-mono text-xs text-muted-foreground">-</span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Withdrawable Rewards</span>
                <span className="font-mono font-bold text-lg text-chart-3">127.84 USDT</span>
              </div>
              <div className="text-xs text-muted-foreground/80 bg-muted/30 p-2 rounded-lg leading-relaxed">
                Net amount after 2% fee (actual amount you receive)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KOLS Staking */}
        <Card className="glass-card border-border/50 hover:border-accent/50 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                KOLS Staking
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="stake-amount" className="text-sm font-medium">
                Stake Amount
              </Label>
              <div className="relative">
                <Input
                  id="stake-amount"
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="font-mono text-base pr-16 h-12"
                  placeholder="1000"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
                  KOLS
                </span>
              </div>
              <div className="text-xs text-muted-foreground/80 bg-muted/30 p-3 rounded-lg leading-relaxed">
                Minimum total stake: <span className="font-semibold text-foreground">1,000 KOLS</span> per wallet
              </div>
            </div>

            <Button className="w-full h-11 gap-2 glow-effect text-base font-semibold">
              <TrendingUp className="h-5 w-5" />
              Stake Now
            </Button>

            <div className="pt-2 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Becomes active immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                <span>Participates in reward distribution</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rewards / Unstaking */}
        <Card className="glass-card border-border/50 hover:border-chart-3/50 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Gift className="h-5 w-5 text-chart-3" />
                Rewards / Unstaking
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Button className="w-full h-11 gap-2 bg-chart-3 hover:bg-chart-3/90 text-base font-semibold">
                <Gift className="h-4 w-4" />
                Claim Reward
              </Button>
              <p className="text-xs text-muted-foreground/80 px-1">Withdraw available rewards to wallet</p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="space-y-2">
              <Button className="w-full h-11 bg-transparent" variant="outline">
                Request Unstake
              </Button>
              <p className="text-xs text-muted-foreground/80 px-1">Move stake into 7-day pending period</p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="space-y-2">
              <Button className="w-full h-11 bg-transparent" variant="outline">
                Withdraw Unstaked
              </Button>
              <p className="text-xs text-muted-foreground/80 px-1">Withdraw after 7-day lockup period</p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="space-y-2">
              <Button className="w-full h-11 gap-2" variant="secondary">
                <Gift className="h-4 w-4" />
                Claim + Unstake
              </Button>
              <p className="text-xs text-muted-foreground/80 px-1">Combined action in single transaction</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
