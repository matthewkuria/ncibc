import type { Metadata } from "next";
import Image from "next/image";
import NationsList from "../components/NationsList";

export const metadata: Metadata = {
  title: "About | New Creation International Bible College",

};

export default function About() {
  return (
    <>
      <section className="relative flex flex-col justify-end pb-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/ncibc-hero-bg6.jpg"
            alt="The New Creation International Bible College campus"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient: dark at bottom where text lives, lighter at top */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />
        <div className="relative container mx-auto flex min-h-[45vh] items-center px-6 lg:px-16 mt-24">
        <div className="px-6 text-parchment">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">About Us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl italic md:text-5xl">
            New Creation International Bible College
          </h1>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-6 font-body text-base leading-relaxed text-ink/80">
          <p>
            New Creation International Bible College is a non-denominational
            Bible college committed to training and equipping men and women
            who are serious with God and want to broaden their knowledge and
            press toward the mark of the high calling on their lives. It is
            set in an atmosphere conducive to total focus on God, His Word,
            and His plan for your life.
          </p>
          <p>
            The college was established in September 1996 with three
            students. In the years since, it has equipped and trained
            hundreds of ministers from nations across the world &mdash; among
            them Ethiopia, Nigeria, India, Zambia, Zimbabwe, Holland, Norway,
            South Africa, Rwanda, Botswana, Mozambique, Uganda, the
            Democratic Republic of Congo, Somalia, the United States,
            Tanzania, South Sudan, the United Kingdom, and Kenya.
          </p>
          <p>
            NCIBC is structured to accommodate the needs of those in
            full-time ministry, leadership positions, and the marketplace
            ministry. Teaching is grounded in practical Biblical principles
            intended to transform life and destiny for Christ, and classes
            are taught in both English and Kiswahili.
          </p>
          <p>
            In April 2025, NCIBC was registered and licensed as a TVET
            institution, a formal recognition of the training standard the
            college has held since its earliest cohort.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">
            Nations represented
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl italic">
            Every graduate carries this forward.
          </h2>
          <div className="mt-12">
            <NationsList />
          </div>
        </div>
      </section>
    </>
  );
}
