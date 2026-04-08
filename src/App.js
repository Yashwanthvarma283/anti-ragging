
import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b">
        <h1 className="text-xl font-semibold tracking-tight">SafeCampus</h1>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:opacity-70">Login</a>
          <a href="#" className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80">Sign Up</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight">
          Report Ragging. Stay Protected. Stay Anonymous.
        </h2>
        <p className="mt-6 text-gray-600 text-lg">
          A secure platform designed to protect students and ensure justice through anonymous reporting and escalation.
        </p>
        <div className="mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-sm hover:opacity-90">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-10 px-10 py-20 max-w-6xl mx-auto">
        <div>
          <h3 className="font-medium text-lg">Anonymous Reporting</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Your identity is fully protected with secure anonymous IDs.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-lg">Smart Escalation</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Automatic escalation if no action is taken.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-lg">Tamper-Proof Logs</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Every action is tracked to ensure transparency.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 SafeCampus. All rights reserved.
      </footer>
    </div>
  );
}
