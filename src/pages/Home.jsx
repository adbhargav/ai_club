import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* 🌟 Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-950 to-indigo-900 text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to the AI Club</h1>
        <p className="text-xl md:text-2xl mb-6">
          RGMCET's Innovation Hub for Artificial Intelligence & Emerging Tech
        </p>
        <a
          href="/signup"
          className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition"
        >
          Join Now
        </a>
      </section>

      {/* 🔁 Announcement Marquee */}
      <Marquee gradient={false} speed={50} className="bg-blue-800 text-white py-2 font-semibold text-lg">
        🚀 AI Hackathon coming soon! &nbsp; | &nbsp; 🧠 Machine Learning Workshop this Saturday &nbsp; | &nbsp;
        
      </Marquee>

      {/* 📊 Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-800">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Members", end: 7 },
              { label: "Projects", end: 3},
              { label: "Events", end: 1},
              { label: "Workshops", end: 0},
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow">
                <h3 className="text-4xl font-bold text-indigo-800">
                  <CountUp end={stat.end} duration={2.5} />+
                </h3>
                <p className="text-gray-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📈 Trending AI Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-900">Trending AI Skills in 2025</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              ["Machine Learning", "Learn how systems learn from data."],
              ["NLP", "Make machines understand human language."],
              ["Computer Vision", "AI that understands images."],
              ["Prompt Engineering", "Guide AI models effectively."],
              ["Data Science", "Extract insights using code and stats."],
              ["AI Ethics", "Understand responsible AI usage."],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md">
                <h3 className="font-semibold text-lg text-indigo-800 mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📅 Upcoming Events */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-800">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ML Workshop",
                date: "updated soon",
                desc: "Hands-on session on scikit-learn and real datasets.",
              },
              {
                title: "AI Hackathon",
                date: "updated soon",
                desc: "Build mini-projects in 6 hours. Certificates & goodies!",
              },
              {
                title: "Prompt Battle",
                date: "updated soon",
                desc: "Compete by generating the best outputs from ChatGPT.",
              },
            ].map((event, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md text-left">
                <h4 className="text-xl font-bold text-indigo-900 mb-1">{event.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 Why Join */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Join AI Club?</h2>
          <ul className="text-lg space-y-3">
            <li>✅ Work on real-world AI projects</li>
            <li>✅ Get mentorship and internship guidance</li>
            <li>✅ Access to premium tools and learning tracks</li>
            <li>✅ Boost your resume and network with AI peers</li>
          </ul>
          <a
            href="/signup"
            className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300 transition"
          >
            Become a Member
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
