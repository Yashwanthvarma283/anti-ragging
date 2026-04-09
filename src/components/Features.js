import { motion } from "framer-motion";

const features = [
  {
    title: "Zero Identity Exposure",
    desc: "Your identity is never revealed — not even to the system administrators.",
  },
  {
    title: "Auto Escalation Engine",
    desc: "If ignored, complaints are automatically escalated to higher authorities.",
  },
  {
    title: "Immutable Evidence Logs",
    desc: "Every action is recorded permanently to prevent manipulation.",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition bg-white"
          >
            <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}