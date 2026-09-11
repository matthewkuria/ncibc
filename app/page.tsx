import type { Metadata } from "next";
import Link from "next/link";
import SemesterTimeline from "./components/SemesterTimeline";
import NationsList from "./components/NationsList";
import HeroCarousel from "./components/HeroCarousel";
import StatsCard from "./components/StatsCard";

export const metadata: Metadata = {
  title: "New Creation International Bible College | Nakuru, Kenya",
  description:
    "Train for full-time ministry, leadership, and the marketplace. NCIBC is a licensed TVET institution in Nakuru, Kenya offering a 16-month Diploma in Christian Ministry taught in English and Kiswahili.",
  keywords: [
    "Bible College Kenya",
    "NCIBC",
    "New Creation International Bible College",
    "Theology Diploma Kenya",
    "TVET Bible school Nakuru",
    "Ministry training Kenya",
    "Christian Ministry Diploma",
  ],
  openGraph: {
    title: "New Creation International Bible College | Nakuru, Kenya",
    description:
      "Equipping men and women for ministry and marketplace leadership through our 16-month Diploma program.",
    url: "https://ncibc.ac.ke",
    siteName: "NCIBC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Creation International Bible College",
    description: "Equipping men and women for ministry and marketplace leadership.",
  },

};




export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto overflow-hidden bg-ink">
        <HeroCarousel />
        <div className="relative flex flex-col items-center sm:items-start px-6 sm:pl-24 pb-24 pt-20 text-white md:pb-32 md:pt-28">
          <h1
            className={`font-display mt-24 sm:mt-5  text-3xl leading-[1.1] text-balance sm:text-4xl md:text-5xl`}
          >
            Welcome to New Creation International Bible College
          </h1>
          <p className=" mt-6 sm:max-w-xl font-body text-base leading-relaxed text-parchment/85 md:text-lg">
            At New Creation International Bible College we train men and women
            who are serious with God.
          </p>
          <div className="mt-10 flex gap-4 md:gap-6">
            <Link
              href="/admissions"
              className="rounded-full bg-gold px-3 py-2 sm:px-6 sm:py-3 font-body text-xs sm:text-sm font-medium text-ink shadow-md transition hover:bg-gold-light"
            >
              Apply for Admission
            </Link>
            <Link
              href="/programs"
              className="rounded-full border border-parchment/30 px-3 py-2 sm:px-6 sm:py-3 font-body text-sm text-parchment transition hover:border-gold hover:text-gold"
            >
              View the Program
            </Link>
          </div>
        </div>

        <div className="rule" />
      </section>

      {/* Stats Card */}
      <StatsCard />

      {/* About excerpt */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-dark">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl italic text-ink">
              A TVET licensed institution.
            </h2>
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-ink/80">
            <p>
              New Creation International Bible College is{" "}
              <strong>inter-denominational</strong>, set in an atmosphere
              conducive to focusing wholly on God, His Word, and His plan for
              your life. Since opening in September 1996 with{" "}
              <strong>three students</strong>, the college has equipped and
              trained hundreds of ministers drawn from nations across Africa,
              Europe, Asia, and North America.
            </p>
            <p>
              In April 2025, NCIBC was registered and licensed as a TVET
              institution &mdash; formal recognition of a training standard the
              college has held to since its first cohort.
            </p>
            <Link
              href="/about"
              className="inline-block font-body text-sm font-medium text-gold-dark underline underline-offset-4 hover:text-ink"
            >
              Read the full story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Program timeline (signature element) */}
      <section className="border-y border-ink/10 bg-parchment-dark/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-dark">
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
            className="mt-14 inline-block font-body text-sm font-medium text-gold-dark underline underline-offset-4 hover:text-ink"
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
            Graduates have returned home &mdash; and gone elsewhere &mdash;
            carrying what they learned in Nakuru into pulpits, marketplaces, and
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
          Admissions are open for the next intake. Classes run in English and
          Kiswahili.
        </p>
        <Link
          href="/admissions"
          className="mt-8 inline-block rounded-sm bg-ink px-8 py-3 font-body text-sm text-parchment shadow-md transition hover:bg-ink-light"
        >
          Start Your Application
        </Link>
      </section>
    </>
  );
}
