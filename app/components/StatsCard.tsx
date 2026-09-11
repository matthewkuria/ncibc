export default function StatsCard() {
  return (
    <div className="relative z-10 mx-auto -mb-16 max-w-6xl px-6 sm:-mb-20">
      <section className=" border border-slate-200/60 bg-parchment p-8 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { n: "1996", l: "Founded, with three students" },
            { n: "19", l: "Nations represented" },
            { n: "16 mo.", l: "Diploma program" },
            { n: "2025", l: "Licensed TVET institution" },
          ].map((s) => (
            <div key={s.l} className="text-center sm:text-left">
              <p className="font-display text-3xl font-light text-gold-dark md:text-4xl">
                {s.n}
              </p>
              <p className="mt-1 font-body text-sm text-slate">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
