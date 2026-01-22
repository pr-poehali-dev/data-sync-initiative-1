import { MessageCircle, Send, Mail, Clock, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SupportSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !message) {
      alert("Заполни все обязательные поля!")
      return
    }

    if (message.length < 10) {
      alert("Сообщение должно содержать минимум 10 символов!")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://functions.poehali.dev/7ad96f7f-0f58-4a09-b7d0-4b52ac31ba19', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message })
      })

      const data = await response.json()

      if (response.ok) {
        alert(`Спасибо за обращение, ${name}!\n\nМы получили твоё сообщение и ответим на ${email} в течение 24 часов.`)
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      } else {
        alert(`Ошибка при отправке: ${data.error || 'Неизвестная ошибка'}`)
      }
    } catch (error) {
      console.error('Error sending support request:', error)
      alert('Не удалось отправить заявку. Проверь подключение к интернету и попробуй ещё раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="px-4 py-16" id="поддержка">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30 mb-6">
            <MessageCircle className="h-8 w-8 text-violet-400" />
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            Служба поддержки
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Возникли вопросы или проблемы? Наша команда готова помочь тебе 24/7. Отправь заявку, и мы свяжемся с тобой в ближайшее время.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl bg-[#141414] border border-[#262626] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Быстрый ответ</h3>
            </div>
            <p className="text-sm text-gray-400">
              Отвечаем на заявки в течение 24 часов. Срочные вопросы — через Discord.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-[#262626] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Опытная команда</h3>
            </div>
            <p className="text-sm text-gray-400">
              Наши администраторы знают все тонкости работы сервера и помогут с любым вопросом.
            </p>
          </div>

          <div className="rounded-xl bg-[#141414] border border-[#262626] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">100% решений</h3>
            </div>
            <p className="text-sm text-gray-400">
              Мы не оставляем заявки без ответа. Каждая проблема будет решена.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Отправить заявку</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                  Твоё имя / никнейм <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Steve_2077"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                  Email для связи <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                  Тема обращения
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white outline-none focus:border-violet-500/50 transition-colors"
                >
                  <option value="">Выбери тему...</option>
                  <option value="privilege">Вопрос по привилегиям</option>
                  <option value="payment">Проблема с оплатой</option>
                  <option value="unban">Разбан аккаунта</option>
                  <option value="bug">Баг на сервере</option>
                  <option value="complaint">Жалоба на игрока</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                  Твоё сообщение <span className="text-red-400">*</span>
                </label>
                <textarea
                  placeholder="Опиши свою проблему или вопрос максимально подробно..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full rounded-lg bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors resize-none"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Минимум 10 символов</p>
              </div>

              <Button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 border border-violet-500/20 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Другие способы связи</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://discord.gg/CWz4576Mg4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626] hover:border-violet-500/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-[#5865F2] flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Discord сервер</p>
                    <p className="text-xs text-gray-400">Самый быстрый способ связи</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0a0a0a] border border-[#262626]">
                  <div className="h-10 w-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email поддержка</p>
                    <p className="text-xs text-gray-400">support@xaocworld.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#141414] border border-[#262626] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Частые вопросы</h3>
              <div className="space-y-3">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm text-gray-300 hover:text-white">
                    <span>Как активировать привилегию?</span>
                    <span className="text-gray-500">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-gray-500 pl-4">
                    После оплаты привилегия активируется автоматически в течение 5 минут. Просто зайди на сервер.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm text-gray-300 hover:text-white">
                    <span>Не пришла привилегия после оплаты</span>
                    <span className="text-gray-500">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-gray-500 pl-4">
                    Напиши в поддержку Discord или отправь заявку выше, приложи скриншот чека.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm text-gray-300 hover:text-white">
                    <span>Можно ли вернуть деньги?</span>
                    <span className="text-gray-500">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-gray-500 pl-4">
                    Возврат возможен в течение 14 дней, если привилегия не была использована. Обратись в поддержку.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}