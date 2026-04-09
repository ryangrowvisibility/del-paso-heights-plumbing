"use client";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

const services = [
  {
    num: "01",
    title: "Water Heater Service",
    desc: "Installation, inspection, and repair. Colby checks all connections and ensures optimal performance — thoroughness is the standard, not the exception.",
  },
  {
    num: "02",
    title: "Plumbing Maintenance",
    desc: "Comprehensive inspection of all residential plumbing: pipes, fixtures, connections. Known for catching problems others miss.",
  },
  {
    num: "03",
    title: "Drain Clearing",
    desc: "Kitchen, bathroom, household drains cleared fast. Available through the night when the problem can't wait until morning.",
  },
  {
    num: "04",
    title: "Pipe Inspection",
    desc: "Detailed inspection to identify issues before they escalate. A proactive visit now prevents an emergency call later.",
  },
  {
    num: "05",
    title: "Kitchen Sink Installation",
    desc: "Professional installation of sinks and related fixtures. Done right the first visit — no callbacks needed.",
  },
  {
    num: "06",
    title: "Garbage Disposal Replacement",
    desc: "Old unit out, new unit in, fully tested. A routine job done with the same thoroughness as everything else.",
  },
];

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text-primary)", minHeight: "100dvh" }}>

      {/* Nav */}
      <nav
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border-subtle)" }}
        className="sticky top-0 z-50 px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            style={{ background: "var(--accent)", fontFamily: "var(--font-display)" }}
            className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-xs tracking-wider"
          >
            DPH
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700 }} className="text-sm leading-tight" aria-label="Del Paso Heights Plumbing">
              Del Paso Heights Plumbing
            </div>
            <div style={{ color: "var(--text-muted)" }} className="text-xs">Sacramento, CA</div>
          </div>
        </div>
        <a
          href="tel:9167690414"
          style={{
            background: "var(--accent)",
            transition: "background 160ms ease-out, transform 160ms ease-out",
          }}
          className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded text-sm active:scale-97"
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
          aria-label="Call Del Paso Heights Plumbing at (916) 769-0414"
        >
          <PhoneIcon />
          (916) 769-0414
        </a>
      </nav>

      {/* Hero — left-aligned split layout */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <div
              className="animate-fade-in inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-8"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              <ClockIcon />
              Open Nearly 24 Hours a Day
            </div>

            <h1
              className="animate-fade-up delay-1 text-5xl md:text-7xl font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Sacramento&apos;s<br />
              <span style={{ color: "var(--accent)" }}>always-on</span><br />
              plumber.
            </h1>

            <p className="animate-fade-up delay-2 text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              Del Paso Heights Plumbing runs midnight to 7am and 8am to midnight —
              every day of the week. When your water heater fails at 2am, Colby&apos;s team picks up.
            </p>

            <div className="animate-fade-up delay-3 flex flex-wrap gap-3">
              <a
                href="tel:9167690414"
                style={{
                  background: "var(--accent)",
                  transition: "background 160ms ease-out, transform 160ms ease-out",
                }}
                className="flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded text-base active:scale-97"
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
              >
                <PhoneIcon />
                Call (916) 769-0414
              </a>
              <a
                href="#services"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  transition: "border-color 160ms ease-out, color 160ms ease-out, transform 160ms ease-out",
                }}
                className="font-medium px-6 py-3.5 rounded text-base active:scale-97"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--blue)";
                  e.currentTarget.style.color = "var(--blue)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                See services
              </a>
            </div>
          </div>

          {/* Hours panel */}
          <div
            className="animate-fade-up delay-2 rounded-2xl p-6 w-full md:w-72 shrink-0"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-center gap-2 mb-5" style={{ color: "var(--text-muted)" }}>
              <ClockIcon />
              <span className="text-xs font-semibold tracking-widest uppercase">Hours</span>
            </div>
            <div className="space-y-3">
              {[
                { period: "Mon – Sun", hours: "12:00am – 7:00am" },
                { period: "Mon – Sun", hours: "8:00am – 12:00am" },
              ].map((h, i) => (
                <div key={i}>
                  <div className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{h.period}</div>
                  <div className="font-semibold">{h.hours}</div>
                </div>
              ))}
            </div>
            <div
              className="mt-5 pt-5 text-xs font-semibold"
              style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--accent)" }}
            >
              Nearly 24/7 — closed only 7am to 8am daily
            </div>
            <div className="mt-5 pt-5 space-y-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Service area</div>
              <div className="text-sm font-medium">Del Paso Heights</div>
              <div className="text-sm font-medium">Sacramento, CA 95815</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              "Near-24/7 availability",
              "Detail-oriented service",
              "Led by Colby — hands-on every job",
              "Water heaters, pipes, drains",
              "Del Paso Heights & Sacramento",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <div style={{ color: "var(--accent)" }}><CheckIcon /></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we fix.
            </h2>
            <p style={{ color: "var(--text-secondary)" }} className="text-lg max-w-xl">
              Full-service residential plumbing — from routine maintenance to middle-of-the-night emergencies.
            </p>
          </div>

          <div className="divide-y" style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`grid md:grid-cols-[80px_1fr] gap-4 py-6 animate-fade-up delay-${i + 1}`}
              >
                <div
                  className="text-4xl font-bold leading-none pt-1 select-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)", opacity: 0.4 }}
                  aria-hidden="true"
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ background: "var(--bg-surface)" }} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What customers say.
            </h2>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex" style={{ color: "var(--accent)" }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </span>
              <span>Google Reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Colby and his coworker thoroughly checked our water heater and all household pipes during a maintenance visit, making sure every system was working correctly. I was so impressed by the attention to detail.",
                credit: "Sacramento homeowner — recent Google review",
              },
              {
                quote: "Some of the best plumbers I have ever used. Excellent kitchen sink installation and garbage disposal replacement. Professional, thorough, and got the job done right.",
                credit: "Sacramento customer — Google review",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-xl p-7"
                style={{ background: "var(--bg-raised)", border: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="text-5xl font-bold leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)", opacity: 0.25 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {r.quote}
                </p>
                <div className="flex items-center gap-2">
                  <span className="flex" style={{ color: "var(--accent)" }}>
                    {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{r.credit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Colby */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Led by Colby.<br />
              <span style={{ color: "var(--blue)" }}>Detail-oriented</span> by default.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Del Paso Heights Plumbing is built around one principle: check everything, not just what the customer called about. Colby and his team inspect the whole system — so you know what&apos;s working and what isn&apos;t.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              The near-24/7 hours aren&apos;t a gimmick. They&apos;re how this business was built — available when nobody else is, reliable when it matters most.
            </p>
            <a
              href="tel:9167690414"
              style={{
                background: "var(--accent)",
                transition: "background 160ms ease-out, transform 160ms ease-out",
              }}
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded text-base active:scale-97"
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
            >
              <PhoneIcon />
              Call (916) 769-0414
            </a>
          </div>
          <div className="space-y-4">
            {[
              { label: "Available", value: "Midnight to 7am + 8am to Midnight daily" },
              { label: "Location", value: "3135 Del Paso Blvd, Sacramento, CA 95815" },
              { label: "Approach", value: "Full system check — not just the reported issue" },
              { label: "Specialty", value: "Water heaters, pipes, drains, disposals" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
                  {item.label}
                </div>
                <div className="font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--accent)" }} className="px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Plumbing problem right now?
            </h2>
            <p className="text-white/80 text-lg">
              We&apos;re open — call Colby&apos;s team any time of night or day.
            </p>
          </div>
          <a
            href="tel:9167690414"
            className="shrink-0 inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-lg active:scale-97"
            style={{
              background: "white",
              color: "var(--accent)",
              transition: "opacity 160ms ease-out, transform 160ms ease-out",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <PhoneIcon />
            (916) 769-0414
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
        className="px-6 py-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div>
            <div className="font-semibold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Del Paso Heights Plumbing
            </div>
            <div>3135 Del Paso Blvd, Sacramento, CA 95815</div>
            <a href="tel:9167690414" className="mt-1 block" style={{ color: "var(--blue)" }}>
              (916) 769-0414
            </a>
          </div>
          <div className="text-xs self-end" style={{ color: "var(--text-muted)" }}>
            &copy; 2026 Del Paso Heights Plumbing
          </div>
        </div>
      </footer>
    </main>
  );
}
