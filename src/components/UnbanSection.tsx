import { ShieldAlert, Info, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function UnbanSection() {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/30 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Разбан аккаунта
                </h2>
                <p className="text-sm text-gray-400">Вернись на сервер за 300₽</p>
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-[#0a0a0a] border border-[#262626] p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong className="text-white">Важная информация:</strong></p>
                  <ul className="space-y-1 text-gray-400">
                    <li>• Разбан действует <span className="text-white font-medium">один раз</span></li>
                    <li>• После покупки бан будет снят в течение <span className="text-white font-medium">5-15 минут</span></li>
                    <li>• Повторное нарушение правил приведёт к <span className="text-red-400 font-medium">перманентному бану</span></li>
                    <li>• При серьёзных нарушениях (читы, слив данных) разбан <span className="text-red-400 font-medium">невозможен</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 flex items-center gap-1 text-sm text-gray-300">
                    Твой никнейм <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Steve_2077"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-red-500/50 transition-colors"
                  />
                  <p className="mt-1 text-xs text-gray-500">Точный никнейм как в игре</p>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-1 text-sm text-gray-300">
                    Email для чека <span className="text-gray-500">(необязательно)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-red-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="rounded-xl bg-[#0a0a0a] border border-[#262626] p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Стоимость разбана</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-white">300₽</span>
                    <span className="text-sm text-gray-500">один раз</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Мгновенная обработка</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Безопасная оплата</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Поддержка 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6 rounded-xl"
              disabled={!nickname}
            >
              Купить разбан за 300₽
            </Button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Нажимая кнопку, ты соглашаешься с{" "}
              <a href="#" className="text-red-400 hover:text-red-300">правилами сервера</a>
              {" "}и обязуешься их соблюдать
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-[#141414] border border-[#262626] p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Часто задаваемые вопросы</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-300 mb-1">❓ За что не снимается бан?</p>
              <p className="text-sm text-gray-500">Читы, DDoS атаки, слив личных данных игроков, массовый спам, повторный бан после разбана.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300 mb-1">❓ Сколько ждать после оплаты?</p>
              <p className="text-sm text-gray-500">Обычно 5-15 минут. В редких случаях до 1 часа. Если дольше — пиши в Discord поддержку.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300 mb-1">❓ Можно ли купить разбан несколько раз?</p>
              <p className="text-sm text-gray-500">Нет, разбан работает только один раз. При повторном нарушении — бан навсегда без возможности снятия.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
