import { Sword, ArrowUpRight, Pickaxe, ChevronDown, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Sword className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Эксклюзивные команды</h3>
      <p className="mb-4 text-sm text-gray-400">Получи доступ к мощным возможностям: киты, полёты, телепорты и многое другое</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Все команды <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-yellow-600 flex items-center justify-center">
              <Sword className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Ранг: VIP</p>
              <p className="text-xs text-gray-500">Полный доступ</p>
            </div>
          </div>
          <button className="text-sm text-violet-400 hover:text-violet-300">Продлить</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Доступные команды <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">/fly, /heal, /god, /kit vip</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Неограниченное использование всех команд.</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#262626]">
                <Pickaxe className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Стартовый набор</p>
                <p className="text-xs text-gray-500">Алмазные инструменты + броня</p>
              </div>
            </div>
            <button className="text-sm text-violet-400 hover:text-violet-300">Получить</button>
          </div>
        </div>

        <Button className="w-full bg-violet-600 text-white hover:bg-violet-700">Активировать команды</Button>
      </div>
    </div>
  )
}