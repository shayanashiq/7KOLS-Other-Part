"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Globe, Menu, X, BarChart3, ImageIcon } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isConnected, setIsConnected] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <span className="font-mono text-lg font-bold text-primary">K$</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-none">7KOLS System v3</h1>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs px-2 py-0 bg-primary/10 text-primary border-primary/20">
                  BNB Testnet
                </Badge>
                <Badge variant="secondary" className="text-xs px-2 py-0 bg-accent/10 text-accent border-accent/20">
                  7 USDT
                </Badge>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/staking">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  Staking
                </Button>
              </Link>
              <Link href="/7kols">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  7KOLS
                </Button>
              </Link>
              <Link href="/nft-marketplace">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ImageIcon className="h-4 w-4" />
                  NFT Marketplace
                </Button>
              </Link>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-border/50" />

            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              Switch to BNB Testnet
            </Button>

            {isConnected ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Connected wallet:</span>
                  <span className="text-sm font-mono">0x7e4...6f3a2</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsConnected(false)}>
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button className="gap-2 glow-effect" onClick={() => setIsConnected(true)}>
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border/40">
            <Link href="/">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/staking">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <Globe className="h-4 w-4" />
                Staking
              </Button>
            </Link>
            <Link href="/7kols">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                7KOLS System
              </Button>
            </Link>
            <Link href="/nft-marketplace">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <ImageIcon className="h-4 w-4" />
                NFT Marketplace
              </Button>
            </Link>

            <div className="py-2 border-t border-border/40" />

            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Globe className="h-4 w-4" />
              Switch to BNB Testnet
            </Button>

            {isConnected ? (
              <>
                <div className="px-3 py-2 text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-muted-foreground">Connected</span>
                  </div>
                  <span className="font-mono text-xs">0x7e4...6f3a2</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => setIsConnected(false)}
                >
                  Disconnect
                </Button>
              </>
            ) : (
              <Button className="w-full gap-2" onClick={() => setIsConnected(true)}>
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
