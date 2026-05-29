export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a6905b7c-2609-470f-a47e-feff25b9d34a/files/bbdea8cc-11a4-4b49-8d67-c59b97089f74.jpg"
          alt="GRIM — рэп-артист"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Об артисте</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          GRIM — голос улиц и андеграунда. Каждый трек — исповедь, каждая строфа — документ эпохи.
          Музыка без компромиссов.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
          Слушать на Яндекс Музыке
        </button>
      </div>
    </div>
  );
}