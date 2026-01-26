export function AboutServerSection() {
  const serverImages = [
    {
      url: "https://cdn.poehali.dev/projects/33831dbe-f3c8-4cb6-920e-9cbb7379430d/bucket/ac323eeb-54aa-4112-ab99-b7796d2d9943.jpg",
      alt: "Величественный замок с освещенным входом"
    },
    {
      url: "https://cdn.poehali.dev/projects/33831dbe-f3c8-4cb6-920e-9cbb7379430d/bucket/9e64fe8e-675c-4aec-a833-661e3fd24012.jpg",
      alt: "Современная кузница с огненными печами"
    },
    {
      url: "https://cdn.poehali.dev/projects/33831dbe-f3c8-4cb6-920e-9cbb7379430d/bucket/bc4ff1e9-a3df-40c3-9d7d-381bed60d125.jpg",
      alt: "Древние руины в туманном мире"
    },
    {
      url: "https://cdn.poehali.dev/projects/33831dbe-f3c8-4cb6-920e-9cbb7379430d/bucket/6a5a51ed-3d6d-409a-8fca-5be155f27c4b.jpg",
      alt: "Богатая библиотека с золотыми стеллажами"
    },
    {
      url: "https://cdn.poehali.dev/projects/33831dbe-f3c8-4cb6-920e-9cbb7379430d/bucket/faa063f0-9e3b-4297-bc93-12bd3cd2ce94.jpg",
      alt: "Современный дом в хвойном лесу"
    }
  ]

  return (
    <section id="о-сервере" className="px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Xaoc World — Твой новый современный мир
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Исследуй уникальные постройки, создавай собственные шедевры и становись частью активного игрового сообщества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-purple-500/5 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-purple-500/5">
            <div className="text-3xl font-bold text-violet-400 mb-2">1000+</div>
            <div className="text-gray-300">Активных игроков</div>
          </div>
          <div className="p-6 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-purple-500/5">
            <div className="text-3xl font-bold text-violet-400 mb-2">24/7</div>
            <div className="text-gray-300">Работа сервера</div>
          </div>
          <div className="p-6 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-purple-500/5">
            <div className="text-3xl font-bold text-violet-400 mb-2">500+</div>
            <div className="text-gray-300">Уникальных построек</div>
          </div>
        </div>
      </div>
    </section>
  )
}
