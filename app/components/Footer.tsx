import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl italic text-gold">
              New Creation
            </p>
            <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-parchment/60">
              International Bible College
            </p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-parchment/70">
              Training men and women for the high calling since 1996 &mdash;
              a licensed TVET institution, non&#8209;denominational, and open to the nations.
            </p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Visit</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/70">
              <li><Link href="/about" className="hover:text-parchment">About the College</Link></li>
              <li><Link href="/programs" className="hover:text-parchment">Diploma in Christian Ministry</Link></li>
              <li><Link href="/admissions" className="hover:text-parchment">Admissions</Link></li>
              <li><Link href="/contact" className="hover:text-parchment">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Reach us</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/70">
              <li>Nakuru, Kenya</li>
              <li><a href="mailto:info@ncibc.ac.ke" className="hover:text-parchment">info@ncibc.ac.ke</a></li>
              <li>Classes in English &amp; Kiswahili</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-parchment/15 pt-6 font-body text-xs text-parchment/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} New Creation International Bible College. All rights reserved.</p>
          <p>Licensed TVET Institution &middot; Est. 1996</p>
        </div>
      </div>
    </footer>
  );
}
