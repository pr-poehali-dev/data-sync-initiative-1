import { BookOpen, Shield, AlertCircle } from "lucide-react"

export function RulesSection() {
  return (
    <section className="px-4 py-16" id="правила">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30 mb-6">
            <BookOpen className="h-8 w-8 text-violet-400" />
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            Правила сервера
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ознакомься с правилами перед началом игры. Незнание правил не освобождает от ответственности.
          </p>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-8">
          <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-violet-600/10 border border-violet-500/20">
            <AlertCircle className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-violet-200">
              Создавая аккаунт на сервере, вы автоматически подтверждаете своё полное согласие с данным сводом правил.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-violet-400" />
                1. Общие правила
              </h3>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <RuleItem number="1.1">
                  Незнание правил не освобождает вас от ответственности.
                </RuleItem>
                <RuleItem number="1.2">
                  Создавая аккаунт на майнкрафт сервере minegrief.su вы автоматически подтверждаете своё полное согласие с данным сводом правил.
                </RuleItem>
                <RuleItem number="1.3">
                  При вводе на сайте неверного ника администрация проекта не отвечает за последствия покупки чего-либо на этот ник. (Скорее всего, этот аккаунт не будет зарегистрирован и вы без труда сможете зайти под ним, но ваш прогресс с прошлого аккаунта не перенесётся).
                </RuleItem>
                <RuleItem number="1.4">
                  Так как не всегда удается определить нарушение правил пользователем, окончательное решение остается за Администраторами проекта.
                </RuleItem>
                <RuleItem number="1.5">
                  Игрок имеет право на добровольное пожертвование, взамен которого он получает привилегию, полномочия которой зависят от суммы пожертвования.
                </RuleItem>
                <RuleItem number="1.6">
                  Игроки, имеющие различные привилегии на сервере, ничем не отличаются от обычных игроков, кроме дополнительных косметических возможностей и полностью подчиняются Правилам проекта. Наличие доната не означает распутность и право вредить обычным игрокам!
                </RuleItem>
                <RuleItem number="1.7">
                  Игрок может пожаловаться на других игроков, используя тему на форуме - <a href="https://forum.minegrief.su/index.php?/forum/12-жалобы" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline">forum.minegrief.su</a>.
                </RuleItem>
                <RuleItem number="1.8">
                  Игрок соглашается с тем, что потраченные им средства не будут возвращены ни при каких обстоятельствах. (Спокойствие, мы не собираемся сбрасывать привилегии / делать вайп донатеров. Просто вы обязаны осознавать, что делаете пожертвование, средства с которого возврату не подлежат!)
                </RuleItem>
                <RuleItem number="1.9">
                  Игрок обязан сообщать о выявленных багах и недоработках Администрации сервера, в случае намеренного скрытия и эксплуатации выявленных багов и недоработок, Администрация имеет право заблокировать аккаунт.
                </RuleItem>
                <RuleItem number="1.10" severity="warning">
                  Использование багов / дюпов / глитчей влечёт блокировку Аккаунта на усмотрение Администрации (Возможна очистка инвентаря и привата).
                </RuleItem>
                <RuleItem number="1.11" severity="warning">
                  Выдача себя за администрацию. Предусматривается наказание в виде блокировки аккаунта сроком на 2 дня.
                </RuleItem>
                <RuleItem number="1.12" severity="danger">
                  Запрещено использование читов. Предусмотрено наказание: Блокировка аккаунта на 7 дней. (Любые виды софтов/модов/макросов которые дают в PVP преимущество запрещены, кроме healhbar'a, и модов на мини-карту).
                </RuleItem>
                <RuleItem number="1.13" severity="danger">
                  Запрещено вступать в союз с игроками которые используют сторонние программы для PVP. Предусмотрено наказание: Блокировка аккаунта на 5 дней.
                </RuleItem>
                <RuleItem number="1.14" severity="danger">
                  Запрещено продавать что-либо за реальные деньги [Заниматься коммерческой деятельностью]. Предусмотрено наказание: Перманентная блокировка аккаунта.
                </RuleItem>
                <RuleItem number="1.15" severity="warning">
                  Донатерам/модераторам запрещено вызывать на проверку игроков без весомых на то причин. От друзей, тимейтов, соклановцев жалобы не принимаются. Предусмотрено наказание: Предупреждение.
                </RuleItem>
                <RuleItem number="1.16" severity="danger">
                  Запрещено создание "лаго-зон", которые как-либо могут принести вред на: процессу игры других игроков, работоспособность сервера, изменение ФПС других игроков в негативную сторону, финансовому положению проекта. Предусмотренное наказание: блокировка аккаунта от 14 дней до вечности.
                </RuleItem>
                <RuleItem number="1.17" severity="warning">
                  В названии клана не должны присутствовать оскорбление/беглые строки/упоминание других проектов. Предусмотренное наказание: блокировка аккаунта на 3 дня.
                </RuleItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface RuleItemProps {
  number: string
  children: React.ReactNode
  severity?: 'normal' | 'warning' | 'danger'
}

function RuleItem({ number, children, severity = 'normal' }: RuleItemProps) {
  const bgColor = {
    normal: 'bg-[#0a0a0a]',
    warning: 'bg-orange-600/5',
    danger: 'bg-red-600/5'
  }[severity]

  const borderColor = {
    normal: 'border-[#262626]',
    warning: 'border-orange-500/20',
    danger: 'border-red-500/20'
  }[severity]

  const numberColor = {
    normal: 'text-violet-400',
    warning: 'text-orange-400',
    danger: 'text-red-400'
  }[severity]

  return (
    <div className={`p-4 rounded-lg border ${bgColor} ${borderColor}`}>
      <span className={`font-semibold ${numberColor} mr-2`}>{number}</span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}
