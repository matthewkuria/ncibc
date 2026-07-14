const stages = [
  {
    mark: "I",
    weeks: "Weeks 1–16",
    title: "First Semester",
    award: "Certificate awarded",
  },
  {
    mark: "II",
    weeks: "Weeks 17–32",
    title: "Second Semester",
    award: "Certificate awarded",
  },
  {
    mark: "III",
    weeks: "Weeks 33–48",
    title: "Third Semester",
    award: "Certificate awarded",
  },
  {
    mark: "IV",
    weeks: "Weeks 49–64",
    title: "Fourth Semester",
    award: "Diploma in Christian Ministry awarded",
    final: true,
  },
  {
    mark: "V",
    weeks: "Weeks 65–80",
    title: "Field Attachment",
    award: "Practical ministry placement",
  },
];

export default function SemesterTimeline() {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-0 right-0 top-[52px] rule" />
      <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
        {stages.map((s) => (
          <li key={s.mark} className="relative flex flex-col items-start md:items-center md:text-center">
            <div
              className={`z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 font-display text-lg
                ${s.final ? "border-gold bg-gold text-ink" : "border-ink bg-parchment text-ink"}`}
            >
              {s.mark}
            </div>
            <p className="mt-4 font-body text-xs uppercase tracking-[0.15em] text-wine">
              {s.weeks}
            </p>
            <p className="mt-1 font-display text-lg text-ink">{s.title}</p>
            <p className="mt-1 font-body text-sm text-slate">{s.award}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
