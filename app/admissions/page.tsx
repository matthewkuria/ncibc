import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | New Creation International Bible College",
};

const steps = [
  {
    n: "01",
    title: "Submit your application",
    body: "Complete the application form with your personal details, ministry background, and a brief testimony of your calling.",
  },
  {
    n: "02",
    title: "Interview",
    body: "A short interview with college leadership to understand your calling and confirm the program is the right fit.",
  },
  {
    n: "03",
    title: "Enrollment & fees",
    body: "Once accepted, you'll receive enrollment details and the fee structure for the upcoming intake.",
  },
  {
    n: "04",
    title: "Begin Semester One",
    body: "Join your cohort for the first sixteen-week semester, taught in English and Kiswahili.",
  },
];

export default function Admissions() {
  return (
    <>
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">
            Admissions
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl italic md:text-5xl">
            Apply to New Creation.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-parchment/75">
            NCIBC welcomes men and women serious with God, from every
            nation, into a licensed TVET-recognized diploma program.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="font-display text-2xl italic text-ink">How to apply</h2>
        <div className="mt-10 space-y-10">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6">
              <span className="font-display text-2xl text-gold-dark">{s.n}</span>
              <div>
                <p className="font-display text-lg text-ink">{s.title}</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-slate">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-parchment-dark/40 py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-2xl italic text-ink">
            Start your application
          </h2>
          <p className="mt-3 font-body text-sm text-slate">
            Fill in the form below and a member of the admissions team will
            be in touch about the next intake.
          </p>

          <form className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
              />
            </div>

            <div>
              <label htmlFor="country" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
              />
            </div>

            <div>
              <label htmlFor="testimony" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                Briefly share your calling
              </label>
              <textarea
                id="testimony"
                name="testimony"
                rows={5}
                required
                className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
              />
            </div>

            <button
              type="submit"
              className="rounded-sm bg-ink px-8 py-3 font-body text-sm text-parchment transition hover:bg-wine"
            >
              Submit Application
            </button>
            <p className="font-body text-xs text-slate">
              This form is a starting point &mdash; connect it to your preferred
              form handler or backend to receive submissions.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
