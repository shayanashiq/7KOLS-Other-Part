"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail } from "lucide-react"

export function EmailNotification() {
  const [email, setEmail] = useState("example@email.com")

  return (
    <Card className="glass-card border-border/40">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <CardTitle>Email Notification</CardTitle>
            <CardDescription>Receive updates about your staking activity</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="bg-secondary/50 border-border/40"
          />
          <p className="text-xs text-muted-foreground">Connected wallet will be mapped to this email</p>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">Save Email</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
