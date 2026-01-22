import { Crown, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const privileges = [
  { name: "VIP", info: "Приватный чат, киты, /fly", price: "999₽", color: "bg-yellow-600" },
  { name: "Premium", info: "Префикс, /home x5, /back", price: "599₽", color: "bg-purple-600" },
  { name: "Deluxe", info: "Цветной ник, /tpa, /warp", price: "299₽", color: "bg-blue-600" },
  { name: "Starter", info: "Набор старта, защита регионов", price: "149₽", color: "bg-green-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Crown className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Выбери свою привилегию</h3>
      <p className="mb-4 text-sm text-gray-400">Каждый ранг открывает уникальные команды и возможности на сервере</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Полный список команд <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {privileges.map((privilege, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-lg ${privilege.color} flex items-center justify-center`}>
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{privilege.name}</p>
                <p className="text-xs text-gray-500">{privilege.info}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 font-medium">{privilege.price}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Сравнить привилегии
        </Button>
      </div>
    </div>
  )
}