import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-blue-800">About the AI Club</h2>
        <p className="text-lg leading-7 mb-4">
          The AI Club at RGMCET is a student-led initiative focused on promoting learning and innovation
          in the field of Artificial Intelligence, Machine Learning, and Data Science.
        </p>
        <p className="text-lg leading-7 mb-4">
          We conduct workshops, host hackathons, and build real-world projects to empower students with future-ready skills.
        </p>
        <p className="text-lg leading-7">
          Our mission is to build a community of AI enthusiasts who learn, share, and grow together.
        </p>
      </div>
      <Footer />
    </div>
  );
}
