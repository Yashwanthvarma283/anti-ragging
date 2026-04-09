export default function Navbar() {
  return (
    <nav className="glass border-b border-gray-200 px-10 py-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-semibold tracking-tight">SafeCampus</h1>

      <div className="flex gap-6 items-center text-sm">
        <a className="hover:opacity-60 transition cursor-pointer">Login</a>
        <button className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}