const tracks = [
  {
    title: "Трек 1",
    yandex: "https://music.yandex.ru/artist/25981220",
    vk: "https://vk.com/audio-2001701968_149701968",
  },
  {
    title: "Трек 2",
    yandex: "https://music.yandex.ru/artist/25981220",
    vk: "https://vk.com/audio-2001383268_149383268",
  },
  {
    title: "Трек 3",
    yandex: "https://music.yandex.ru/artist/25981220",
    vk: "https://vk.com/audio-2001516442_84516442",
  },
];

export default function Music() {
  return (
    <section id="music" className="bg-black py-20 px-6">
      <h3 className="uppercase text-neutral-500 text-xs tracking-widest mb-12">Дискография</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
        {tracks.map((track, i) => (
          <div key={i} className="bg-black p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <p className="text-neutral-600 text-xs uppercase tracking-widest mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-white text-2xl font-black tracking-tight uppercase mb-8">
                {track.title}
              </h2>
            </div>
            <div className="flex gap-3">
              <a
                href={track.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest border border-neutral-700 text-neutral-300 px-4 py-2 hover:border-white hover:text-white transition-all duration-300"
              >
                Яндекс
              </a>
              <a
                href={track.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest border border-neutral-700 text-neutral-300 px-4 py-2 hover:border-white hover:text-white transition-all duration-300"
              >
                ВК
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
