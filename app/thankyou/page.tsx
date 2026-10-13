export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      {/* Card */}
      <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-10 max-w-lg w-full text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700">
          🎉 Thank You for Enrolling!
        </h2>
        <p className="text-lg mb-6">
          You’re now part of the <span className="font-semibold">12‑week live program</span>.
          Check your email for session details and community access.
        </p>

        {/* Button */}
        <a
          href="/calendar"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          View Calendar
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-200">
        © 2026 Mehta Insights. All rights reserved.
      </footer>
    </div>
  );
}
