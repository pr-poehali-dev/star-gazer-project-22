export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a6905b7c-2609-470f-a47e-feff25b9d34a/bucket/aeb7e4f8-9275-4396-8683-711af4fd7bcb.jpeg"
          alt="Blast M.S. — рэп-артист"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Об артисте</h3>
        <p className="text-lg lg:text-2xl mb-6 text-neutral-900 leading-relaxed">
          Родом из Кропоткина Кавказского района. Вырос на Кубани, окончил 9 классов в ст. Казанской, затем — училище РЖД и служба в армии.
        </p>
        <p className="text-lg lg:text-2xl mb-6 text-neutral-900 leading-relaxed">
          Музыкальный путь начал в 2025 году. Жизненный опыт — единственный источник вдохновения. Каждый трек — страница пройденного пути.
        </p>
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-8">
          Слова, музыка, биты — Михаил Сидненко
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://music.yandex.ru/album/42116603/track/151454624"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-widest text-center"
          >
            Яндекс Музыка
          </a>
          <a
            href="https://vk.com/music/album/-2000608851_27608851_04c5c52dcdd09f02c7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-black hover:text-white cursor-pointer uppercase tracking-widest text-center"
          >
            ВК Музыка
          </a>
        </div>
      </div>
    </div>
  );
}