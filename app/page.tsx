export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base">
            DPH
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">Del Paso Heights</div>
            <div className="text-blue-400 text-xs">Plumbing</div>
          </div>
        </div>
        <a
          href="tel:9167690414"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          (916) 769-0414
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
            OPEN NEARLY 24/7 — CALL ANYTIME
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Sacramento&apos;s{" "}
            <span className="text-blue-400">Always-On</span>{" "}
            Plumber
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Del Paso Heights Plumbing is available nearly around the clock — open from midnight to 7am
            and 8am to midnight, every day of the week. Water heaters, pipes, drains, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9167690414"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call (916) 769-0414
            </a>
            <a
              href="#services"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Hours Banner */}
      <section className="bg-blue-600 text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center items-center text-sm font-medium">
          <div>Open 12:00am to 7:00am daily</div>
          <div className="hidden sm:block w-px h-4 bg-blue-400" />
          <div>Open 8:00am to Midnight daily</div>
          <div className="hidden sm:block w-px h-4 bg-blue-400" />
          <div>Sacramento, CA</div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl font-black text-blue-600">24/7</div>
            <div className="text-slate-600 text-sm mt-1">Nearly Always Open</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl font-black text-blue-600">3.8</div>
            <div className="text-slate-600 text-sm mt-1">Google Stars</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl font-black text-blue-600">Fast</div>
            <div className="text-slate-600 text-sm mt-1">Reliable Response</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="text-3xl font-black text-blue-600">Local</div>
            <div className="text-slate-600 text-sm mt-1">Sacramento-Based</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              What We <span className="text-blue-600">Fix</span>
            </h2>
            <p className="text-slate-600 text-lg">Full-service residential plumbing in Sacramento</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Water Heater Service",
                desc: "Installation, inspection, and repair of water heaters. Colby and his team check all connections and ensure optimal performance.",
              },
              {
                title: "Plumbing Maintenance",
                desc: "Comprehensive inspection and maintenance of all residential plumbing — pipes, fixtures, and connections. Thorough, detail-oriented service.",
              },
              {
                title: "Drain Clearing",
                desc: "Clearing of blocked kitchen, bathroom, and household drains. Fast relief when you need it most.",
              },
              {
                title: "Pipe Inspection",
                desc: "Detailed pipe inspection to catch problems early before they become expensive emergencies.",
              },
              {
                title: "Kitchen Sink Installation",
                desc: "Professional installation of kitchen sinks and related fixtures. Done right the first time.",
              },
              {
                title: "Garbage Disposal Replacement",
                desc: "Quick removal of old disposals and installation of new units — usually completed in one visit.",
              },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-slate-50 rounded-xl border-l-4 border-blue-600">
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2">What Sacramento Customers Say</h2>
            <div className="text-blue-400">Recent Google Reviews</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-yellow-400 text-xl mb-3 font-bold">5 Stars</div>
              <p className="text-slate-300 leading-relaxed italic text-sm">
                &ldquo;Colby and his coworker thoroughly checked our water heater and all household pipes
                during a maintenance visit, making sure every system was working correctly. I was so
                impressed by the attention to detail.&rdquo;
              </p>
              <div className="mt-4 text-slate-400 text-xs">— Sacramento homeowner</div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="text-yellow-400 text-xl mb-3 font-bold">5 Stars</div>
              <p className="text-slate-300 leading-relaxed italic text-sm">
                &ldquo;Some of the best plumbers I&apos;ve ever used. Excellent kitchen sink installation and
                garbage disposal replacement. Professional, thorough, and got the job done right.&rdquo;
              </p>
              <div className="mt-4 text-slate-400 text-xs">— Sacramento customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">
                Led by <span className="text-blue-600">Colby</span> — Detail-Oriented From Start to Finish
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Del Paso Heights Plumbing is led by Colby, a Sacramento plumber who believes every
                job deserves a thorough, careful approach. The team is known for going the extra mile:
                checking all systems, not just the one you called about.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                With near-24/7 availability, we&apos;re here when you need us most — whether it&apos;s
                a midnight emergency or a planned maintenance visit.
              </p>
              <a
                href="tel:9167690414"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Call (916) 769-0414
              </a>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-4 text-blue-400">Service Area</h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <div>Del Paso Heights, Sacramento</div>
                <div>Sacramento, CA 95815</div>
                <div>Surrounding Sacramento neighborhoods</div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h3 className="font-bold text-lg mb-3 text-blue-400">Hours</h3>
                <div className="space-y-1 text-slate-300 text-sm">
                  <div>Mon to Sun: 12:00am to 7:00am</div>
                  <div>Mon to Sun: 8:00am to 12:00am</div>
                  <div className="text-orange-400 text-xs mt-2">Nearly 24/7 — call anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Plumbing Problem? We&apos;re Available Now.
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Open nearly 24/7 so you never have to wait. Call Colby&apos;s team today.
          </p>
          <a
            href="tel:9167690414"
            className="inline-block bg-white text-orange-500 font-black text-xl px-10 py-5 rounded-xl hover:bg-orange-50 transition-colors"
          >
            (916) 769-0414
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="font-bold text-white text-lg mb-1">Del Paso Heights Plumbing</div>
          <div>3135 Del Paso Blvd, Sacramento, CA 95815</div>
          <div className="mt-2">
            <a href="tel:9167690414" className="text-blue-400 hover:text-blue-300">
              (916) 769-0414
            </a>
          </div>
          <div className="mt-4 text-xs text-slate-600">
            &copy; 2026 Del Paso Heights Plumbing. Sacramento, CA.
          </div>
        </div>
      </footer>
    </main>
  );
}
