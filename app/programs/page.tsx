import type { Metadata } from "next";
import Link from "next/link";
import SemesterTimeline from "../components/SemesterTimeline";

export const metadata: Metadata = {
  title: "The Program | New Creation International Bible College",
};

const awards = [
  { stage: "First Semester", result: "Certificate" },
  { stage: "Second Semester", result: "Certificate" },
  { stage: "Third Semester", result: "Certificate" },
  { stage: "Fourth Semester", result: "Diploma in Christian Ministry" },
];

export default function Programs() {
  return (
    <>
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">
            The Program
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl italic md:text-5xl">
            Diploma in Christian Ministry
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-parchment/75">
            A 16-month diploma program, divided into four semesters of
            sixteen weeks each, followed by a sixteen-week field attachment.
            Teaching is grounded in practical Biblical principles, and
            classes are taught in both English and Kiswahili.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-2xl italic text-ink">
          How the program is structured
        </h2>
        <div className="mt-16">
          <SemesterTimeline />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-parchment-dark/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl italic text-ink">
            What you're awarded, and when
          </h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {awards.map((a) => (
              <div
                key={a.stage}
                className="flex items-center justify-between gap-4 py-4 font-body text-sm"
              >
                <span className="text-slate">{a.stage}</span>
                <span className="text-right font-medium text-ink">{a.result}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-sm text-slate">
            A certificate is awarded at the completion of the first, second,
            and third semesters, and a Diploma in Christian Ministry is
            awarded upon completion of the fourth and final semester.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-display text-2xl italic text-ink">
          Who it's structured for
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Full-time ministry",
              body: "Pastors, church planters, and those already serving in ministry roles full time.",
            },
            {
              title: "Leadership positions",
              body: "Leaders seeking a deeper Biblical foundation for the responsibility they already carry.",
            },
            {
              title: "Marketplace ministry",
              body: "Those called to carry ministry into their trade, business, or profession.",
            },
          ].map((c) => (
            <div key={c.title} className="border border-ink/10 bg-parchment p-6">
              <p className="font-display text-lg text-wine">{c.title}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-slate">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <Link
          href="/admissions"
          className="inline-block rounded-sm bg-ink px-8 py-3 font-body text-sm text-parchment transition hover:bg-wine"
        >
          Apply for This Program
        </Link>
      </section>
    </>
  );
}
