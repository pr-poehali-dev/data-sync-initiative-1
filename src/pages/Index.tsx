import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { PrivilegesComparison } from "@/components/PrivilegesComparison"
import { UnbanSection } from "@/components/UnbanSection"
import { RulesSection } from "@/components/RulesSection"
import { SupportSection } from "@/components/SupportSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <PrivilegesComparison />
      <UnbanSection />
      <FeaturesSection />
      <RulesSection />
      <SupportSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        Играй на Xaoc World с привилегиями —{" "}
        <span className="font-medium text-white">открой новые возможности уже сегодня.</span>
      </footer>
    </main>
  )
}