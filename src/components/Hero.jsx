import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 py-16 md:py-24 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Now launching the next-gen credit platform
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Finance that moves at the speed of your ambition
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
              CreditTorch powers modern lending experiences with modular APIs, automation-ready workflows, and a beautiful admin for your team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-white shadow-[0_10px_60px_-10px_rgba(0,0,0,0.25)]">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -z-0 left-1/2 top-0 -translate-x-1/2 blur-3xl" aria-hidden="true">
        <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-tr from-indigo-200 via-violet-200 to-fuchsia-200 opacity-60" />
      </div>
    </section>
  );
}
