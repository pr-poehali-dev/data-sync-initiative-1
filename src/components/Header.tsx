import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <XaocWorldLogo />
        <span className="text-lg font-semibold text-white">
          Xaoc World
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#привилегии" className="text-sm text-gray-300 hover:text-white transition-colors">
          Привилегии
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Возможности <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          О сервере
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Правила
        </a>
        <a href="https://discord.gg/CWz4576Mg4" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">
          Discord
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        IP: d13.aurorix.net:25989
      </Button>
    </header>
  )
}

function XaocWorldLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="6" fill="#8B5CF6" />
      <rect x="14" y="4" width="6" height="6" fill="#8B5CF6" opacity="0.7" />
      <rect x="4" y="14" width="6" height="6" fill="#8B5CF6" opacity="0.7" />
      <rect x="14" y="14" width="6" height="6" fill="#8B5CF6" opacity="0.5" />
      <rect x="9" y="9" width="6" height="6" fill="#A78BFA" />
    </svg>
  )
}