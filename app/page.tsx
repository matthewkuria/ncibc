import Link from "next/link";
import { Metadata } from "next";
import SemesterTimeline from "./components/SemesterTimeline";
import NationsList from "./components/NationsList";

// Define the SEO metadata for the College Home Page
export const metadata: Metadata = {
  title: "New Creation International Bible College | Nakuru, Kenya",
  description: "Train for full-time ministry, leadership, and the marketplace. NCIBC is a licensed TVET institution in Nakuru, Kenya offering a 16-month Diploma in Christian Ministry taught in English and Kiswahili.",
  keywords: [
    "Bible College Kenya",
    "NCIBC",
    "New Creation International Bible College",
    "Theology Diploma Kenya",
    "TVET Bible school Nakuru",
    "Ministry training Kenya",
    "Christian Ministry Diploma"
  ],
  openGraph: {
    title: "New Creation International Bible College | Nakuru, Kenya",
    description: "Equipping men and women for ministry and marketplace leadership through our 16-month Diploma program.",
    url: "https://ncibc.org", // Replace with your actual domain
    siteName: "NCIBC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Creation International Bible College",
    description: "Equipping men and women for ministry and marketplace leadership.",
  }
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-parchment hover:cursor-pointer">
        <div className="pointer-events-none absolute inset-0 opacity-[0.4]">
          <div className="h-full w-full" style={{
            backgroundImage:
              "url('/ncibc-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }} />
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Established 1996 &middot; Nakuru, Kenya
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl italic leading-[1.1] text-balance sm:text-5xl md:text-6xl">
            Press toward the mark of the high calling.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-parchment/75 md:text-lg">
            New Creation International Bible College trains men and women
            who are serious with God &mdash; in full-time ministry, in leadership,
            and in the marketplace &mdash; through a 16-month Diploma in Christian
            Ministry, taught in English and Kiswahili.
          </p>
          <div className="mt-10 flex gap-4 md:gap-6">
            <Link
              href="/admissions"
              className="rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition hover:bg-gold-light"
            >
              Apply for Admission
            </Link>
            <Link
              href="/programs"
              className="rounded-sm border border-parchment/30 px-6 py-3 font-body text-sm text-parchment transition hover:border-gold hover:text-gold"
            >
              View the Program
            </Link>
          </div>
        </div>

        <div className="rule" />
      </section>

      {/* Stat strip */}
      <section className="border-b border-ink/10 bg-parchment">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
          {[
            { n: "1996", l: "Founded, with three students" },
            { n: "19", l: "Nations represented" },
            { n: "16 mo.", l: "Diploma program" },
            { n: "2025", l: "Licensed TVET institution" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl text-wine md:text-4xl">{s.n}</p>
              <p className="mt-1 font-body text-sm text-slate">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About excerpt */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl italic text-ink">
              A college, not a crowd.
            </h2>
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-ink/80">
            <p>
              New Creation International Bible College is non-denominational,
              set in an atmosphere conducive to focusing wholly on God, His
              Word, and His plan for your life. Since opening in September
              1996 with three students, the college has equipped and trained
              hundreds of ministers drawn from nations across Africa, Europe,
              Asia, and North America.
            </p>
            <p>
              In April 2025, NCIBC was registered and licensed as a TVET
              institution &mdash; formal recognition of a training standard the
              college has held to since its first cohort.
            </p>
            <Link
              href="/about"
              className="inline-block font-body text-sm font-medium text-wine underline underline-offset-4 hover:text-ink"
            >
              Read the full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Program timeline (signature element) */}
      <section className="border-y border-ink/10 bg-parchment-dark/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">
            The structure
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl italic text-ink">
            Sixteen weeks at a time, for sixteen months.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-slate">
            Four semesters, each sixteen weeks, each closing with an awarded
            certificate &mdash; and a diploma at the fourth. Then a sixteen-week
            attachment to put the Word to work.
          </p>

          <div className="mt-16">
            <SemesterTimeline />
          </div>

          <Link
            href="/programs"
            className="mt-14 inline-block font-body text-sm font-medium text-wine underline underline-offset-4 hover:text-ink"
          >
            See full program details &rarr;
          </Link>
        </div>
      </section>

      {/* Nations */}
      <section className="bg-ink py-24 text-parchment">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">
            Sent from, sent to
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl italic">
            Ministers trained from these nations.
          </h2>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-parchment/60">
            Graduates have returned home &mdash; and gone elsewhere &mdash; carrying
            what they learned in Nakuru into pulpits, marketplaces, and
            leadership across the world.
          </p>
          <div className="mt-12">
            <NationsList />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl italic text-ink md:text-4xl">
          Serious with God, and ready to be equipped?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-base text-slate">
          Admissions are open for the next intake. Classes run in English
          and Kiswahili.
        </p>
        <Link
          href="/admissions"
          className="mt-8 inline-block rounded-sm bg-ink px-8 py-3 font-body text-sm text-parchment transition hover:bg-wine"
        >
          Start Your Application
        </Link>
      </section>
    </>
  );
}