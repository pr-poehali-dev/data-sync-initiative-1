import { X, CreditCard, Wallet, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  productPrice: number
  productType: "privilege" | "unban"
}

export function PaymentModal({ isOpen, onClose, productName, productPrice, productType }: PaymentModalProps) {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")

  if (!isOpen) return null

  const handlePayment = () => {
    if (!nickname) {
      alert("Введи свой никнейм!")
      return
    }

    const description = productType === "privilege" 
      ? `Привилегия ${productName} для ${nickname}`
      : `Разбан для ${nickname}`

    console.log("Платёж:", { nickname, email, productName, productPrice, description })
    alert(`Функция оплаты будет подключена после настройки платёжной системы.\n\nДанные:\n- Товар: ${description}\n- Сумма: ${productPrice}₽\n- Никнейм: ${nickname}`)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-[#141414] border border-[#262626] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
            productType === "privilege" ? "bg-violet-600/20 border border-violet-500/30" : "bg-red-600/20 border border-red-500/30"
          }`}>
            {productType === "privilege" ? (
              <CreditCard className={`h-6 w-6 ${productType === "privilege" ? "text-violet-400" : "text-red-400"}`} />
            ) : (
              <Wallet className="h-6 w-6 text-red-400" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {productType === "privilege" ? `Покупка: ${productName}` : "Покупка разбана"}
          </h3>
          <p className="text-gray-400">
            {productType === "privilege" 
              ? "Привилегия выдаётся навсегда после оплаты"
              : "Бан будет снят в течение 5-15 минут"}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">
              <User className="h-4 w-4" />
              Твой никнейм <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Steve_2077"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
            />
            <p className="mt-1 text-xs text-gray-500">Точный никнейм как в игре</p>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              Email для чека <span className="text-gray-500">(необязательно)</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-[0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>

          <div className="rounded-xl bg-[#0a0a0a] border border-[#262626] p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Товар:</span>
              <span className="text-sm font-medium text-white">{productName}</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#262626]">
              <span className="text-base font-medium text-gray-300">Итого:</span>
              <span className="text-2xl font-bold text-white">{productPrice}₽</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handlePayment}
            disabled={!nickname}
            className={`w-full text-white text-lg py-6 rounded-xl ${
              productType === "privilege" 
                ? "bg-violet-600 hover:bg-violet-700" 
                : "bg-red-600 hover:bg-red-700"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Оплатить {productPrice}₽
          </Button>
          
          <Button
            onClick={onClose}
            variant="ghost"
            className="w-full text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
          >
            Отменить
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
          Безопасная оплата через банковскую карту
        </p>
      </div>
    </div>
  )
}
