"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  TrendingUp,
  Users,
  Layers,
  Target,
  DollarSign,
  Zap,
  Lock,
  CheckCircle,
  AlertCircle,
  Copy,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Wallet } from "lucide-react" // Declare the Wallet variable

export default function SevenKOLSDashboard() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Overview stats
  const overviewStats = [
    {
      label: "Total Active Members",
      value: "12,450",
      change: "+8.2%",
      icon: Users,
      color: "from-primary to-blue-600",
    },
    {
      label: "Total Deposits",
      value: "$2.45M",
      change: "+12.5%",
      icon: DollarSign,
      color: "from-accent to-cyan-600",
    },
    {
      label: "Total Rewards Distributed",
      value: "$845K",
      change: "+5.3%",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
    },
    {
      label: "Network Strength",
      value: "94.8%",
      change: "+2.1%",
      icon: Zap,
      color: "from-orange-500 to-red-600",
    },
  ]

  // 7KOLS structure details
  const kolStructure = [
    {
      level: "Level 1",
      name: "KOLS NFT Holder",
      benefit: "Direct & Indirect Commission",
      commission: "2.5% - 5%",
      requirement: "Hold 1 KOLS NFT",
      status: "Active",
      members: 2450,
    },
    {
      level: "Level 2",
      name: "Elite KOLS",
      benefit: "Enhanced Commission",
      commission: "5% - 8%",
      requirement: "Hold 5+ KOLS NFTs",
      status: "Active",
      members: 1280,
    },
    {
      level: "Level 3",
      name: "Master KOLS",
      benefit: "Premium Rewards",
      commission: "8% - 12%",
      requirement: "Hold 20+ KOLS NFTs",
      status: "Active",
      members: 420,
    },
    {
      level: "Level 4",
      name: "Platinum KOLS",
      benefit: "VIP Benefits",
      commission: "12% - 15%",
      requirement: "Hold 50+ KOLS NFTs",
      status: "Active",
      members: 89,
    },
  ]

  // Referral rewards breakdown
  const referralRewards = [
    { tier: "Tier 1", percentage: "2.5%", description: "Direct referral commission" },
    { tier: "Tier 2", percentage: "1.5%", description: "Secondary level rewards" },
    { tier: "Tier 3", percentage: "0.8%", description: "Tertiary level rewards" },
    { tier: "Tier 4", percentage: "0.5%", description: "Deep network rewards" },
    { tier: "Performance Bonus", percentage: "Up to 3%", description: "Based on team growth" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="gradient-mesh">
        <main className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="pt-12 pb-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                    7KOLS <span className="text-gradient">System</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                    Multi-level affiliate program with exceptional rewards and network growth opportunities
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href="/">
                    <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                      <Layers className="h-5 w-5" />
                      Main Dashboard
                    </Button>
                  </Link>
                  <Link href="/staking">
                    <Button size="lg" className="gap-2 premium-button group">
                      <Target className="h-5 w-5" />
                      Staking
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Overview Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {overviewStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} className="stat-card group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-400 border-green-500/30">
                        {stat.change}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                  </Card>
                )
              })}
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="structure" className="space-y-6">
              <TabsList className="bg-card/50 border border-border/50 p-1 h-auto gap-2 flex-wrap">
                <TabsTrigger value="structure" className="data-[state=active]:bg-primary/20">
                  <Layers className="h-4 w-4 mr-2" />
                  7KOLS Structure
                </TabsTrigger>
                <TabsTrigger value="rewards" className="data-[state=active]:bg-primary/20">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Rewards Breakdown
                </TabsTrigger>
                <TabsTrigger value="referral" className="data-[state=active]:bg-primary/20">
                  <Users className="h-4 w-4 mr-2" />
                  Referral Program
                </TabsTrigger>
              </TabsList>

              {/* Structure Tab */}
              <TabsContent value="structure" className="space-y-6">
                <div className="glass-card rounded-xl p-8 border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                    <h2 className="text-2xl font-bold">7KOLS Membership Levels</h2>
                  </div>

                  <div className="grid gap-5">
                    {kolStructure.map((level, index) => (
                      <div
                        key={level.level}
                        className="group p-6 rounded-xl border border-border/50 bg-card/40 hover:bg-card/60 transition-all duration-300 hover:border-primary/50 cursor-pointer"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                          {/* Level Badge */}
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-12 w-12 rounded-xl bg-gradient-to-br ${
                                index === 0
                                  ? "from-blue-600 to-cyan-600"
                                  : index === 1
                                    ? "from-purple-600 to-pink-600"
                                    : index === 2
                                      ? "from-emerald-600 to-teal-600"
                                      : "from-amber-600 to-orange-600"
                              } flex items-center justify-center text-white font-bold`}
                            >
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{level.level}</h3>
                              <p className="text-sm text-primary font-medium">{level.name}</p>
                            </div>
                          </div>

                          {/* Commission */}
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">Commission</p>
                            <p className="font-bold text-lg text-accent">{level.commission}</p>
                          </div>

                          {/* Requirement */}
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">Requirement</p>
                            <p className="text-sm font-medium">{level.requirement}</p>
                          </div>

                          {/* Members */}
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">Active Members</p>
                            <p className="font-bold text-lg">{level.members.toLocaleString()}</p>
                          </div>

                          {/* Action */}
                          <div className="flex justify-end">
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {level.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Rewards Tab */}
              <TabsContent value="rewards" className="space-y-6">
                <div className="glass-card rounded-xl p-8 border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-1 bg-gradient-to-b from-accent to-primary rounded-full" />
                    <h2 className="text-2xl font-bold">Rewards Breakdown</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {referralRewards.map((reward) => (
                      <div
                        key={reward.tier}
                        className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300 text-center group cursor-pointer"
                      >
                        <div className="text-4xl font-bold text-gradient mb-3">{reward.percentage}</div>
                        <h3 className="font-semibold text-foreground mb-2">{reward.tier}</h3>
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/30 space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Bonus Incentives</h4>
                        <p className="text-sm text-muted-foreground">
                          Members who maintain active networks and meet performance targets receive additional bonuses
                          up to 3% on monthly rewards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Referral Program Tab */}
              <TabsContent value="referral" className="space-y-6">
                <div className="glass-card rounded-xl p-8 border border-border/50">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-1 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full" />
                    <h2 className="text-2xl font-bold">Referral Program</h2>
                  </div>

                  <div className="space-y-6">
                    {/* Your Referral Link */}
                    {walletConnected && (
                      <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Your Referral Link</h3>
                          <div className="flex items-center gap-2 bg-card/70 border border-border/50 rounded-lg p-4 group hover:border-emerald-500/50 transition-all">
                            <code className="flex-1 text-sm font-mono text-muted-foreground truncate">
                              https://7kols.io/ref/0x7e4A3...f3a2
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard("https://7kols.io/ref/0x7e4A3...f3a2")}
                              className="text-emerald-500 hover:text-emerald-400"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          {copied && <p className="text-xs text-emerald-400 mt-2">Copied to clipboard!</p>}
                        </div>
                      </div>
                    )}

                    {/* How It Works */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">How Referral Rewards Work</h3>
                      <div className="grid gap-4">
                        {[
                          {
                            step: "1",
                            title: "Share Your Link",
                            desc: "Distribute your unique referral link to friends and community",
                          },
                          {
                            step: "2",
                            title: "They Join",
                            desc: "When someone signs up using your link, they become your referral",
                          },
                          {
                            step: "3",
                            title: "Earn Commissions",
                            desc: "Earn commissions on their deposits across multiple levels",
                          },
                          {
                            step: "4",
                            title: "Unlimited Growth",
                            desc: "Build your network and multiply your earnings over time",
                          },
                        ].map((item) => (
                          <div
                            key={item.step}
                            className="flex gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all"
                          >
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                              {item.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security Note */}
                    <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-3">
                      <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Security & Verification</h4>
                          <p className="text-sm text-muted-foreground">
                            All referral commissions are automatically tracked on-chain and verified through smart
                            contracts. Your referral data is secure and transparent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Call to Action */}
            <div className="mt-12 p-8 rounded-xl glass-card border border-border/50 text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Ready to Join 7KOLS?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Start building your network today and earn passive income through our multi-level affiliate program
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {!walletConnected ? (
                  <Button size="lg" className="gap-2 premium-button group" onClick={() => setWalletConnected(true)}>
                    <Wallet className="h-5 w-5" />
                    Connect Wallet to Start
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button size="lg" className="gap-2 premium-button group">
                    <Target className="h-5 w-5" />
                    Start Your Journey
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
