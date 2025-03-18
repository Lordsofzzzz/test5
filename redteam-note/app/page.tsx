export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] gap-8 py-8 relative overflow-hidden">
      {/* Background decorative elements - modified for better dark mode appearance */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      {/* Removed the bottom orange blur that was causing the red/black effect */}
      <div className="absolute top-1/2 right-0 -z-10 w-1/3 h-1/3 bg-red-500/5 blur-3xl rounded-full dark:opacity-30" />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 py-16 animate-fade-in">
        <div className="relative">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-800 bg-clip-text text-transparent drop-shadow-sm">
            Red Team Notes
          </h1>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-800/20 blur-3xl animate-pulse" />
        </div>
        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
          Your comprehensive resource for Red Team operations, techniques, and security assessments.
        </p>
        <div className="flex gap-4 items-center mt-4">
          <a
            className="bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
            href="/notes"
          >
            Browse Notes
          </a>
          <a
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3 rounded-lg font-medium transition-all border border-zinc-800 hover:border-red-500/50 hover:-translate-y-0.5"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <div className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl space-y-4 border border-zinc-800/50 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">
          <div className="bg-gradient-to-br from-red-500 to-orange-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform shadow-lg shadow-red-500/20">
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
          <h2 className="text-2xl font-semibold text-white">Security Techniques</h2>
          <p className="text-gray-300 leading-relaxed">
            Detailed documentation of offensive security methodologies and best practices.
          </p>
        </div>

        <div className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl space-y-4 border border-zinc-800/50 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
          <div className="bg-gradient-to-br from-orange-500 to-yellow-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
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
          <h2 className="text-2xl font-semibold text-white">Structured Knowledge</h2>
          <p className="text-gray-300 leading-relaxed">
            Organized collection of tools, tactics, and procedures for red team operations.
          </p>
        </div>

        <div className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl space-y-4 border border-zinc-800/50 hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-1">
          <div className="bg-gradient-to-br from-yellow-500 to-red-600 p-3 rounded-lg w-fit group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/20">
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
          <h2 className="text-2xl font-semibold text-white">Regular Updates</h2>
          <p className="text-gray-300 leading-relaxed">
            Continuously updated with new techniques, tools, and security insights.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Red Team Notes. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
