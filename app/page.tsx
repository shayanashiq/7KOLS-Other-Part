import { Header } from "@/components/header"
import { EmailNotification } from "@/components/email-notification"
import { StructureManagement } from "@/components/structure-management"
import { MyStructure } from "@/components/my-structure"
import { GlobalStats } from "@/components/global-stats"
import { DownlineSection } from "@/components/downline-section"
import { PlatformVideos } from "@/components/platform-videos"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Layers, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero gradient background */}
      <div className="gradient-mesh">
        <main className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header with Navigation */}
            <div className="pt-12 pb-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                    7KOLS <span className="text-gradient">Dashboard</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                    Manage your crypto structure, monitor your earnings, and track global statistics in real-time
                  </p>
                </div>
                <Link href="/staking">
                  <Button size="lg" className="gap-2 premium-button group">
                    <Layers className="h-5 w-5" />
                    Staking Dashboard
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Email and Structure Management */}
              <div className="grid gap-6 lg:grid-cols-2">
                <EmailNotification />
                <StructureManagement />
              </div>

              {/* My Structure Info */}
              <MyStructure />

              {/* Global Statistics */}
              <GlobalStats />

              {/* Downline Section */}
              <DownlineSection />

              {/* Platform Videos */}
              <PlatformVideos />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
