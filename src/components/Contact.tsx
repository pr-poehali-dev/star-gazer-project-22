export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <h3 className="uppercase text-neutral-400 text-xs tracking-widest mb-12">Контакты</h3>
      <div className="flex flex-col gap-6 max-w-md">
        <a
          href="https://vk.com/id1113637163"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-neutral-200 pb-6 hover:border-black transition-all duration-300"
        >
          <span className="text-2xl font-black uppercase tracking-tight text-black">ВКонтакте</span>
          <span className="text-neutral-400 group-hover:text-black transition-colors duration-300 text-sm uppercase tracking-widest">
            vk.com/id1113637163
          </span>
        </a>
      </div>
    </section>
  );
}
