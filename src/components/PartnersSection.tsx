import { Sword, Shield, Sparkles, Crown, Gem, Zap, Star } from "lucide-react"

const partners = [
  { name: "EasyPay", icon: Sparkles },
  { name: "QIWI", icon: Zap },
  { name: "YooMoney", icon: Star },
  { name: "Visa", icon: Shield },
  { name: "Mastercard", icon: Gem },
  { name: "PayPal", icon: Crown },
  { name: "СБП", icon: Sword },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}</span>
        </div>
      ))}
    </section>
  )
}