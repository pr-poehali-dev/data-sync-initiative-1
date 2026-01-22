import { Check, X, Crown, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PaymentModal } from "@/components/PaymentModal"
import { useState } from "react"

const privileges = [
  {
    name: "Стартер",
    price: "30₽",
    color: "bg-green-600",
    icon: Shield,
    description: "Начни своё приключение",
    features: [
      { name: "Стартовый набор", available: true },
      { name: "Защита регионов (3 региона)", available: true },
      { name: "/home (1 дом)", available: true },
      { name: "Префикс [Starter]", available: true },
      { name: "Цветной ник", available: false },
      { name: "/tpa, /tpahere", available: false },
      { name: "/back после смерти", available: false },
      { name: "/fly", available: false },
      { name: "Киты", available: false },
      { name: "Приватный чат", available: false },
    ]
  },
  {
    name: "Титан",
    price: "60₽",
    color: "bg-cyan-600",
    icon: Zap,
    description: "Больше возможностей",
    features: [
      { name: "Стартовый набор", available: true },
      { name: "Защита регионов (5 регионов)", available: true },
      { name: "/home (3 дома)", available: true },
      { name: "Префикс [Titan]", available: true },
      { name: "Цветной ник", available: true },
      { name: "/tpa, /tpahere", available: true },
      { name: "/back после смерти", available: true },
      { name: "/fly", available: false },
      { name: "Киты", available: false },
      { name: "Приватный чат", available: false },
    ]
  },
  {
    name: "Делюкс",
    price: "100₽",
    color: "bg-blue-600",
    icon: Star,
    description: "Комфортная игра",
    features: [
      { name: "Расширенный стартовый набор", available: true },
      { name: "Защита регионов (8 регионов)", available: true },
      { name: "/home (5 домов)", available: true },
      { name: "Префикс [Deluxe]", available: true },
      { name: "Цветной ник", available: true },
      { name: "/tpa, /tpahere, /warp", available: true },
      { name: "/back после смерти", available: true },
      { name: "/fly (30 минут в день)", available: true },
      { name: "Киты каждые 12 часов", available: true },
      { name: "Приватный чат", available: false },
    ]
  },
  {
    name: "Император",
    price: "140₽",
    color: "bg-red-600",
    icon: Crown,
    description: "Властвуй на сервере",
    features: [
      { name: "Премиум стартовый набор", available: true },
      { name: "Защита регионов (12 регионов)", available: true },
      { name: "/home (8 домов)", available: true },
      { name: "Префикс [Emperor]", available: true },
      { name: "Цветной ник + эффекты", available: true },
      { name: "/tpa, /tpahere, /warp", available: true },
      { name: "/back после смерти + /back", available: true },
      { name: "/fly (2 часа в день)", available: true },
      { name: "Киты каждые 6 часов", available: true },
      { name: "Приватный чат", available: true },
    ]
  },
  {
    name: "Легенда",
    price: "210₽",
    color: "bg-purple-600",
    icon: Star,
    description: "Легендарный статус",
    features: [
      { name: "Элитный стартовый набор", available: true },
      { name: "Защита регионов (20 регионов)", available: true },
      { name: "/home (15 домов)", available: true },
      { name: "Префикс [Legend]", available: true },
      { name: "Цветной ник + анимация", available: true },
      { name: "Все команды телепортации", available: true },
      { name: "/back после смерти + /back", available: true },
      { name: "/fly (неограниченно)", available: true },
      { name: "Киты каждые 3 часа", available: true },
      { name: "Приватный чат + голосовой", available: true },
    ]
  },
  {
    name: "ВИП",
    price: "300₽",
    color: "bg-yellow-600",
    icon: Crown,
    description: "Максимум возможностей",
    features: [
      { name: "VIP стартовый набор", available: true },
      { name: "Защита регионов (неограниченно)", available: true },
      { name: "/home (неограниченно)", available: true },
      { name: "Префикс [VIP]", available: true },
      { name: "Цветной ник + анимация + эффекты", available: true },
      { name: "Все команды телепортации + /tp", available: true },
      { name: "/back после смерти + /back", available: true },
      { name: "/fly + /god (неограниченно)", available: true },
      { name: "Все киты без ограничений", available: true },
      { name: "Приватный чат + голосовой + VIP лобби", available: true },
    ]
  },
]

export function PrivilegesComparison() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [selectedPrivilege, setSelectedPrivilege] = useState<{ name: string; price: number } | null>(null)

  const handleBuyClick = (name: string, priceStr: string) => {
    const price = parseInt(priceStr.replace('₽', ''))
    setSelectedPrivilege({ name, price })
    setIsPaymentModalOpen(true)
  }

  return (
    <section className="px-4 py-16" id="привилегии">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            Сравнение привилегий
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Выбери ранг под свой стиль игры. Все привилегии выдаются навсегда — плати один раз и пользуйся всеми возможностями без ограничений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privileges.map((privilege, index) => {
            const Icon = privilege.icon
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col hover:border-[#333] transition-colors"
              >
                <div className="mb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${privilege.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{privilege.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{privilege.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{privilege.price}</span>
                    <span className="text-sm text-gray-500">навсегда</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  {privilege.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      {feature.available ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.available ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => handleBuyClick(privilege.name, privilege.price)}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                >
                  Купить {privilege.name}
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 p-8 text-center">
          <Crown className="h-12 w-12 text-violet-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Не можешь выбрать?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Начни со Стартера за 30₽ и всегда сможешь улучшить ранг позже. Доплатишь только разницу в цене!
          </p>
          <Button className="bg-white text-black hover:bg-gray-100">
            Связаться с поддержкой
          </Button>
        </div>
      </div>

      {selectedPrivilege && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          productName={selectedPrivilege.name}
          productPrice={selectedPrivilege.price}
          productType="privilege"
        />
      )}
    </section>
  )
}