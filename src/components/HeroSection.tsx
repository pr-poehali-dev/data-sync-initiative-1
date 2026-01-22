import { ArrowUpRight, Play, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [showServerInfo, setShowServerInfo] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-400">ОНЛАЙН</span>
        <span className="text-gray-300">Сейчас в игре: 287 игроков</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Привилегии Xaoc World
      </h1>

      <p className="mb-8 max-w-xl text-gray-400">Получи уникальные возможности, крутые префиксы и закрытый доступ к эксклюзивным командам и предметам. <span className="text-violet-400 font-medium">Навсегда.</span></p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white">
          Выбрать привилегию <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800"
          onClick={() => setShowServerInfo(!showServerInfo)}
        >
          <Server className="mr-2 h-4 w-4 text-violet-500" /> Информация о сервере
        </Button>
      </div>

      {showServerInfo && (
        <div className="mt-6 max-w-md w-full animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
                <Server className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Xaoc World</h4>
                <p className="text-xs text-gray-500">Vanilla+ сервер</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-[#262626]">
                <span className="text-sm text-gray-400">IP адрес</span>
                <code className="text-sm text-white font-mono bg-[#1f1f1f] px-2 py-1 rounded">d13.aurorix.net:25989</code>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#262626]">
                <span className="text-sm text-gray-400">Версии</span>
                <span className="text-sm text-white">1.16.5 — 1.21.4</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#262626]">
                <span className="text-sm text-gray-400">Режим</span>
                <span className="text-sm text-white">Vanilla+</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-400">Онлайн</span>
                <span className="text-sm text-violet-400 font-medium">287 игроков</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}