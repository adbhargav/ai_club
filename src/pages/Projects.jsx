import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const dummyProjects = [
  {
    id: "1",
    title: "Number Guesser AI",
    contributors: "AI Club RGMCET",
    summary: "A guessing game where AI randomly guesses numbers.",
    description:
      "A fun beginner AI simulation where the AI generates random numbers to match a secret number. Helps understand basic control flow and randomness.",
    tags: ["JavaScript", "Beginner", "AI Simulation"],
    date: "2025-07-14",
    githubLink: "https://github.com/example/number-guesser-ai",
    demoLink: "https://numberguesser.ai.demo",
  },
  {
    id: "2",
    title: "Image Grayscale Converter",
    contributors: "Beginner Batch",
    summary: "Convert colored images to grayscale using OpenCV.",
    description:
      "This project demonstrates how to load an image and convert it to grayscale using OpenCV in Python. Great for beginners in image processing.",
    tags: ["Python", "OpenCV", "Image Processing"],
    date: "2025-07-12",
    githubLink: "https://github.com/example/grayscale-converter",
    demoLink: "https://grayscale-demo.vercel.app",
  },
  {
    id: "3",
    title: "AI News Summarizer",
    contributors: "AI Explorers",
    summary: "Summarizes tech news using NLP and Hugging Face transformers.",
    description:
      "This project fetches and summarizes the latest tech news using NLP models. Built using Hugging Face APIs.",
    tags: ["React", "NLP", "HuggingFace", "API"],
    date: "2025-07-15",
    githubLink: "https://github.com/example/ai-news-summarizer",
    demoLink: "https://ainews.vercel.app",
  },
  {
    id: "4",
    title: "Weather Chatbot",
    contributors: "Weather Wizards",
    summary: "Chatbot that gives weather updates by city name.",
    description:
      "Built using OpenWeatherMap API and React. It can answer user queries about temperature, humidity, and weather conditions.",
    tags: ["React", "Node.js", "API", "Chatbot"],
    date: "2025-07-10",
    githubLink: "https://github.com/example/weather-chatbot",
    demoLink: "https://weatherbot.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-10 text-indigo-800 text-center">Club Projects</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {dummyProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-1 font-medium">{project.contributors}</p>
                <p className="text-gray-700 mb-3">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
