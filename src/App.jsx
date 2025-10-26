import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Placeholder sections for future modules */}
        <section id="blog" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">From the CreditTorch blog</h2>
              <p className="mt-3 text-gray-600">Product updates, underwriting insights, and growth tactics for credit teams.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3].map((i) => (
                <article key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Insight</div>
                  <h3 className="mt-2 text-lg font-semibold">Designing compliant lead funnels that convert</h3>
                  <p className="mt-2 text-sm text-gray-600">How to balance regulatory requirements with modern conversion patterns.</p>
                  <div className="mt-4 text-sm font-semibold text-indigo-600">Read more →</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
