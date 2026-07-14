import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | New Creation International Bible College",
};

export default function Contact() {
  return (
    <>
      <section className="bg-ink py-20 text-parchment">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl italic md:text-5xl">
            We'd love to hear from you.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Location</p>
              <p className="mt-2 font-display text-xl text-ink">Nakuru, Kenya</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Email</p>
              <a href="mailto:info@ncibc.ac.ke" className="mt-2 block font-display text-xl text-ink hover:text-wine">
                info@ncibc.ac.ke
              </a>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Language of instruction</p>
              <p className="mt-2 font-display text-xl text-ink">English &amp; Kiswahili</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-wine">Status</p>
              <p className="mt-2 font-display text-xl text-ink">
                Non-denominational &middot; Licensed TVET Institution
              </p>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                Email
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
              <label htmlFor="message" className="font-body text-xs uppercase tracking-[0.1em] text-slate">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full border border-ink/20 bg-parchment px-4 py-3 font-body text-sm text-ink outline-none focus:border-wine"
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-ink px-8 py-3 font-body text-sm text-parchment transition hover:bg-wine"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
