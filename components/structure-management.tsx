"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Users, Copy, RotateCcw } from "lucide-react"

export function StructureManagement() {
  const [referrerAddress, setReferrerAddress] = useState("")

  return (
    <Card className="glass-card border-border/40">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle>7 USDT Join & Structure Update</CardTitle>
            </div>
            <CardDescription>Claimable structure reward: 0 USDT</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="referrer">Referrer Address (Required for first join)</Label>
          <Input
            id="referrer"
            type="text"
            value={referrerAddress}
            onChange={(e) => setReferrerAddress(e.target.value)}
            placeholder="Enter referrer address"
            className="font-mono text-sm bg-secondary/50 border-border/40"
          />
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">Join 7 USDT</Button>
          <Button variant="outline" size="icon">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        <div className="pt-4 space-y-3 border-t border-border/40">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Load last joined user</span>
            <Button variant="ghost" size="sm">
              Load
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Reset referrer</span>
            <Button variant="ghost" size="sm">
              Reset
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Copy my invite link</span>
            <Button variant="ghost" size="sm" className="gap-2">
              <Copy className="h-3 w-3" />
              Copy
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
