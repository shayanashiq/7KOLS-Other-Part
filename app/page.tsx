"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AlertCircle, Zap, Copy, Check, ImageIcon, Lock, Sparkles, Package, Tag, Grid3x3, Flame } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("badges")
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [claimableCount] = useState(5)
  const [singleSalesTab, setSingleSalesTab] = useState<"list" | "create">("list")
  const [bundleSalesTab, setBundleSalesTab] = useState<"list" | "create">("list")

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAddress(id)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  const contractAddresses = {
    nft: "0xe12afe6aa7023389bfdda42fb0518fd10c247f0",
    marketplace: "0x2cf77347ce7be7d78843abe883b9b871572f51",
    usdt: "0xe19b4cbc66c8e47be0",
  }

  const sampleNFTs = [
    { id: 1, name: "Badge #001", level: "Gold", price: 50, image: "/nft-badge-gold.jpg" },
    { id: 2, name: "Badge #002", level: "Silver", price: 30, image: "/nft-badge-silver.jpg" },
    { id: 3, name: "Badge #003", level: "Platinum", price: 100, image: "/nft-badge-platinum.jpg" },
  ]

  const bundleListings = [
    { id: 1, name: "Elite Bundle", badges: 5, price: 200, discount: "20%", image: "/nft-bundle-elite.jpg" },
    { id: 2, name: "Starter Bundle", badges: 3, price: 100, discount: "15%", image: "/nft-bundle-starter.jpg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                KOLS Participation <span className="text-gradient">NFT Badge</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                BSC Testnet • KPB NFT • Single Sale / Bundle Sale / Buy NFT
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-4 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Network</p>
              <p className="text-lg font-semibold text-foreground">BSC Testnet</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Claimable Badges</p>
              <p className="text-lg font-semibold text-accent">{claimableCount}</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Token Standard</p>
              <p className="text-lg font-semibold text-primary">ERC-721</p>
            </div>
          </div>
        </div>

        {/* Generate NFTs Section */}
        <div className="mb-8 md:mb-12">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/20">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-accent" />
                  Generate NFTs
                </h2>
                <p className="text-muted-foreground">Create and generate new participation badges</p>
              </div>
              <Button className="glow-effect-accent gap-2 px-6 py-3 rounded-xl font-semibold text-lg bg-accent/20 hover:bg-accent/30 text-accent">
                <Sparkles className="h-5 w-5" />
                Generate New Badge
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-card/30 rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-colors">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  Total Generated
                </p>
                <p className="text-3xl font-bold text-foreground">1,245</p>
                <p className="text-xs text-muted-foreground mt-2">Badges created</p>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-colors">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  Pending Mint
                </p>
                <p className="text-3xl font-bold text-primary">28</p>
                <p className="text-xs text-muted-foreground mt-2">Awaiting minting</p>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-colors">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  Generation Fee
                </p>
                <p className="text-3xl font-bold text-accent">0.1 USDT</p>
                <p className="text-xs text-muted-foreground mt-2">Per badge</p>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-colors">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  Next Generation
                </p>
                <p className="text-3xl font-bold text-foreground">42</p>
                <p className="text-xs text-muted-foreground mt-2">Batch ready</p>
              </div>
            </div>

            <div className="mt-6 bg-card/50 rounded-xl p-4 border border-border/50">
              <p className="text-sm text-muted-foreground">
                🎨 Generate unique NFT badges based on participation level. Each badge includes metadata, traits, and
                visual elements. Generation requires USDT fee.
              </p>
            </div>
          </div>
        </div>

        {/* Claim Badge Section */}
        <div className="mb-8 md:mb-12">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/20">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  Claim Participation Badge (NFT Mint)
                </h2>
                <p className="text-muted-foreground mb-2">Based on 7KOLS UniLevel Participation</p>
                <p className="text-sm text-muted-foreground">
                  Participation count is calculated from UniLevel total deposit / 7 USDT. Any unissued badge NFTs can be
                  minted at once.
                </p>
              </div>
              <Button className="glow-effect gap-2 px-6 py-3 rounded-xl font-semibold text-lg">
                <Zap className="h-5 w-5" />
                Mint Claimable Badges
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-card/30 rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Total Participation (UniLevel)</p>
                <p className="text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Already Minted NFTs</p>
                <p className="text-3xl font-bold text-foreground">7</p>
              </div>
              <div className="bg-card/30 rounded-xl p-4 border border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Claimable NFT Amount</p>
                <p className="text-3xl font-bold text-accent">{claimableCount}</p>
              </div>
            </div>

            {/* Warning Alert */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-200">
                Badge minting does not work if UniLevelUSDT contract address is not set.
              </p>
            </div>
          </div>
        </div>

        {/* My NFTs & Marketplace */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* My NFTs */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ImageIcon className="h-6 w-6 text-primary" />
                My NFTs
              </h2>
              <p className="text-muted-foreground mb-6">
                Fetches all KPB NFTs owned by your wallet using ERC721Enumerable.
              </p>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-border/50 pb-4">
                <button
                  onClick={() => setSingleSalesTab("list")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    singleSalesTab === "list"
                      ? "bg-primary/20 text-primary border border-primary/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <Grid3x3 className="h-4 w-4" />
                  Single Sale
                </button>
                <button
                  onClick={() => setSingleSalesTab("create")}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    singleSalesTab === "create"
                      ? "bg-primary/20 text-primary border border-primary/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <Tag className="h-4 w-4" />
                  Create Listing
                </button>
              </div>

              {/* Content Area */}
              {singleSalesTab === "list" ? (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {sampleNFTs.map((nft) => (
                      <div
                        key={nft.id}
                        className="group bg-card/30 rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all"
                      >
                        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                          <img
                            src={nft.image || "/placeholder.svg"}
                            alt={nft.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                            {nft.level}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">{nft.name}</h3>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-muted-foreground text-sm">Price:</span>
                            <span className="text-lg font-bold text-accent">{nft.price} USDT</span>
                          </div>
                          <Button className="w-full glow-effect rounded-lg">
                            <Tag className="h-4 w-4 mr-2" />
                            List for Sale
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-card/30 rounded-xl p-6 border border-border/50">
                    <label className="block text-sm font-semibold text-foreground mb-3">Select NFT to List</label>
                    <select className="w-full bg-input rounded-lg px-4 py-2 text-foreground border border-border/50 focus:border-primary/50 focus:outline-none transition-colors">
                      <option>Choose an NFT...</option>
                      {sampleNFTs.map((nft) => (
                        <option key={nft.id}>
                          {nft.name} - {nft.level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="bg-card/30 rounded-xl p-6 border border-border/50">
                    <label className="block text-sm font-semibold text-foreground mb-3">Sale Price (USDT)</label>
                    <input
                      type="number"
                      placeholder="Enter price in USDT"
                      className="w-full bg-input rounded-lg px-4 py-2 text-foreground border border-border/50 focus:border-primary/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <Button className="w-full glow-effect rounded-lg py-3 font-semibold">
                    <Zap className="h-4 w-4 mr-2" />
                    Create Listing
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Marketplace */}
          <div className="space-y-6">
            {/* Single Sales */}
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <Tag className="h-5 w-5 text-primary" />
                  Single Sales
                </h2>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">3</span>
              </div>

              <div className="space-y-3">
                {sampleNFTs.map((nft) => (
                  <div
                    key={nft.id}
                    className="flex items-center justify-between p-3 bg-card/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <ImageIcon className="h-6 w-6 text-primary opacity-60" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{nft.name}</p>
                        <p className="text-xs text-muted-foreground">{nft.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent text-sm">{nft.price} USDT</p>
                      <Button variant="outline" size="sm" className="mt-1 text-xs h-6 bg-transparent">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bundle Sales */}
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <Package className="h-5 w-5 text-accent" />
                  Bundle Sales
                </h2>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-semibold">2</span>
              </div>

              <div className="space-y-3">
                {bundleListings.map((bundle) => (
                  <div
                    key={bundle.id}
                    className="flex items-center justify-between p-3 bg-card/30 rounded-lg border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                        <Package className="h-6 w-6 text-accent opacity-60" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-foreground">{bundle.name}</p>
                        <p className="text-xs text-muted-foreground">{bundle.badges} badges</p>
                      </div>
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded font-semibold">
                        <Flame className="h-3 w-3 inline mr-1" />
                        {bundle.discount} OFF
                      </div>
                    </div>
                    <div className="text-right ml-3">
                      <p className="font-bold text-accent text-sm">{bundle.price} USDT</p>
                      <Button variant="outline" size="sm" className="mt-1 text-xs h-6 bg-transparent">
                        Buy Bundle
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Sale Creation Section */}
        <div className="mb-8 md:mb-12">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-accent/20">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                  <Package className="h-8 w-8 text-accent" />
                  Create Bundle Sale
                </h2>
                <p className="text-muted-foreground">Package multiple NFTs together with special pricing</p>
              </div>
              <Button className="glow-effect-accent gap-2 px-6 py-3 rounded-xl font-semibold text-lg bg-accent/20 hover:bg-accent/30 text-accent">
                <Package className="h-5 w-5" />
                Create Bundle
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/30 rounded-xl p-6 border border-border/50">
                <label className="block text-sm font-semibold text-foreground mb-3">Bundle Name</label>
                <input
                  type="text"
                  placeholder="e.g., Elite Bundle"
                  className="w-full bg-input rounded-lg px-4 py-2 text-foreground border border-border/50 focus:border-accent/50 focus:outline-none transition-colors"
                />
              </div>
              <div className="bg-card/30 rounded-xl p-6 border border-border/50">
                <label className="block text-sm font-semibold text-foreground mb-3">Bundle Price (USDT)</label>
                <input
                  type="number"
                  placeholder="Enter total price"
                  className="w-full bg-input rounded-lg px-4 py-2 text-foreground border border-border/50 focus:border-accent/50 focus:outline-none transition-colors"
                />
              </div>
              <div className="bg-card/30 rounded-xl p-6 border border-border/50 md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-3">Select NFTs for Bundle</label>
                <div className="space-y-2">
                  {sampleNFTs.map((nft) => (
                    <label
                      key={nft.id}
                      className="flex items-center gap-3 p-3 bg-card/50 rounded-lg hover:bg-card/70 transition-colors cursor-pointer"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm font-medium text-foreground">
                        {nft.name} - {nft.level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="bg-card/30 rounded-xl p-6 border border-border/50 md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-3">Discount Percentage</label>
                <input
                  type="number"
                  placeholder="e.g., 20"
                  className="w-full bg-input rounded-lg px-4 py-2 text-foreground border border-border/50 focus:border-accent/50 focus:outline-none transition-colors"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Customers save this % compared to individual purchases
                </p>
              </div>
              <Button className="md:col-span-2 w-full glow-effect-accent bg-accent/20 hover:bg-accent/30 text-accent rounded-lg py-3 font-semibold">
                <Zap className="h-4 w-4 mr-2" />
                Create & List Bundle
              </Button>
            </div>
          </div>
        </div>

        {/* Contract Information */}
        <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Lock className="h-6 w-6 text-primary" />
            Contract Information
          </h2>
          <p className="text-muted-foreground mb-6">NFT / Marketplace / USDT contract addresses on BSC Testnet.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* NFT Contract */}
            <div className="bg-card/30 rounded-xl p-4 border border-border/50">
              <p className="text-sm text-muted-foreground mb-3 font-semibold">NFT (KOLS Participation Badge)</p>
              <div className="bg-card/50 rounded-lg p-3 mb-3 border border-border/50">
                <p className="text-xs font-mono text-foreground break-all leading-relaxed">{contractAddresses.nft}</p>
              </div>
              <button
                onClick={() => copyToClipboard(contractAddresses.nft, "nft")}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-semibold"
              >
                {copiedAddress === "nft" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Marketplace Contract */}
            <div className="bg-card/30 rounded-xl p-4 border border-border/50">
              <p className="text-sm text-muted-foreground mb-3 font-semibold">Marketplace</p>
              <div className="bg-card/50 rounded-lg p-3 mb-3 border border-border/50">
                <p className="text-xs font-mono text-foreground break-all leading-relaxed">
                  {contractAddresses.marketplace}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(contractAddresses.marketplace, "marketplace")}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-semibold"
              >
                {copiedAddress === "marketplace" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* USDT Contract */}
            <div className="bg-card/30 rounded-xl p-4 border border-border/50">
              <p className="text-sm text-muted-foreground mb-3 font-semibold">USDT (Testnet)</p>
              <div className="bg-card/50 rounded-lg p-3 mb-3 border border-border/50">
                <p className="text-xs font-mono text-foreground break-all leading-relaxed">{contractAddresses.usdt}</p>
              </div>
              <button
                onClick={() => copyToClipboard(contractAddresses.usdt, "usdt")}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-semibold"
              >
                {copiedAddress === "usdt" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}






