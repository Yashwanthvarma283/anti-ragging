import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 bg-black text-white text-center relative overflow-hidden">

      {/* subtle background effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white,transparent)]"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold tracking-tight"
      >
        Silence protects abusers.
        <br />
        Reporting protects students.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-4 text-gray-300"
      >
        Take the first step toward a safer campus.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        className="mt-8 bg-white text-black px-6 py-3 rounded-xl text-sm"
      >
        Raise a Complaint
      </motion.button>
    </section>
  );
}