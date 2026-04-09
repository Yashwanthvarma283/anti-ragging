import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-center py-40 px-6 overflow-hidden">

      {/* Gradient Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-gray-200 via-gray-100 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
      >
        Speak Without Fear.
        <br />
        Act With Confidence.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto"
      >
        A next-generation anti-ragging system built for anonymity,
        accountability, and real-world impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex justify-center gap-4"
      >
        <button className="bg-black text-white px-8 py-3 rounded-xl text-sm hover:scale-105 transition">
          Start Reporting
        </button>

        <button className="px-8 py-3 rounded-xl border text-sm hover:bg-gray-50 transition">
          See How It Works
        </button>
      </motion.div>

    </section>
  );
}