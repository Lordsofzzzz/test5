import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] gap-8 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 py-12">
        <div className="relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-800 bg-clip-text text-transparent">
            Red Team Notes
          </h1>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-800/20 blur-3xl" />
        </div>
        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Your comprehensive resource for Red Team operations, techniques, and security assessments.
        </p>
        <div className="flex gap-4 items-center">
          <a
            className="bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-red-500/20"
            href="/notes"
          >
            Browse Notes
          </a>
          <a
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3 rounded-lg font-medium transition-all border border-zinc-800 hover:border-red-500/50"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        <div className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl space-y-3 border border-zinc-800/50 hover:border-red-500/50 transition-all">
          <div className="bg-gradient-to-br from-red-500 to-orange-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Security Techniques</h2>
          <p className="text-gray-200">
            Detailed documentation of offensive security methodologies and best practices.
          </p>
        </div>

        <div className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl space-y-3 border border-zinc-800/50 hover:border-orange-500/50 transition-all">
          <div className="bg-gradient-to-br from-orange-500 to-yellow-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Structured Knowledge</h2>
          <p className="text-gray-200">
            Organized collection of tools, tactics, and procedures for red team operations.
          </p>
        </div>

        <div className="group bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl space-y-3 border border-zinc-800/50 hover:border-yellow-500/50 transition-all">
          <div className="bg-gradient-to-br from-yellow-500 to-red-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Regular Updates</h2>
          <p className="text-gray-200">
            Continuously updated with new techniques, tools, and security insights.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800/50 py-6">
        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <a href="/docs" className="hover:text-red-500 transition-colors">Documentation</a>
          <a href="/contribute" className="hover:text-orange-500 transition-colors">Contribute</a>
          <a href="/github" className="hover:text-yellow-500 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
