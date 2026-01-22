import { Crown, ArrowUpRight, Plus, Server } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const privileges = [
  { name: "ВИП", info: "Приватный чат, киты, /fly", price: "300₽", color: "bg-yellow-600" },
  { name: "Легенда", info: "Эксклюзивные команды", price: "210₽", color: "bg-purple-600" },
  { name: "Император", info: "Расширенные возможности", price: "140₽", color: "bg-red-600" },
  { name: "Делюкс", info: "Цветной ник, /tpa, /warp", price: "100₽", color: "bg-blue-600" },
  { name: "Титан", info: "Префикс, /home x3, /back", price: "60₽", color: "bg-cyan-600" },
  { name: "Стартер", info: "Набор старта, защита регионов", price: "30₽", color: "bg-green-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a] mb-4">
          <Crown className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Server className="h-3.5 w-3.5" />
          <span>IP: <span className="text-white font-mono">d13.aurorix.net:25989</span></span>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Выбери свою привилегию</h3>
      <p className="mb-2 text-sm text-gray-400">Каждый ранг открывает уникальные команды и возможности на сервере</p>
      <p className="mb-4 text-xs text-gray-500">Версии: 1.16.5 — 1.21.4 • Режим: Vanilla+</p>

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