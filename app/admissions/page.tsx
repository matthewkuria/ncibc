import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | New Creation International Bible College",
};

const steps = [
  {
    n: "01",
    title: "Download the application form",
    body: "Download the PDF application form using the button below and fill in your personal details, ministry background, and testimony.",
  },
  {
    n: "02",
    title: "Submit your application",
    body: "Send your completed application form back to our admissions team via email.",
  },
  {
    n: "03",
    title: "Interview",
    body: "A short interview with college leadership to understand your calling and confirm the program is the right fit.",
  },
  {
    n: "04",
    title: "Enrollment & fees",
    body: "Once accepted, you'll receive enrollment details and the fee structure for the upcoming intake.",
  },
  {
    n: "05",
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
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-2xl italic text-ink">
            Download application form
          </h2>
          <p className="mt-3 font-body text-sm text-slate">
            Click below to download the application package, fill it out, and return it to our admissions office.
          </p>

          <div className="mt-10">
            <a
              href="/documents/ncibc-application-form.pdf"
              download
              className="inline-flex items-center justify-center rounded-sm bg-ink px-8 py-4 font-body text-sm text-parchment transition hover:bg-wine"
            >
              Download Application Form (PDF)
            </a>
          </div>

          <p className="mt-6 font-body text-xs text-slate">
            Need help? Reach out to admissions@ncibc.ac.ke for assistance with your application.
          </p>
        </div>
      </section>
    </>
  );
}