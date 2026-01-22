import { Sparkles, CreditCard, ChevronDown, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Sparkles className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Быстрая оплата</h3>
      <p className="mb-4 text-sm text-gray-400">Приобретай привилегии за пару кликов — безопасно и мгновенно</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Способы оплаты <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-white">Выберите привилегию</p>
              <p className="text-xs text-gray-500">На 1 или 3 месяца</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Ваш никнейм <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <input
              type="text"
              placeholder="Steve_2077"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Email для чека <span className="text-violet-400">*</span> (Необязательно)
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-gray-400">Автопродление</span>
          <Switch className="data-[state=checked]:bg-violet-600" />
        </div>
      </div>
    </div>
  )
}