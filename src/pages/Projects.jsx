// src/pages/Projects.jsx
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
    likes: 5,
    codeSnippet: `const secret = 42;
let guess;
let attempts = 0;
do {
  guess = Math.floor(Math.random() * 100);
  attempts++;
  console.log("AI guesses:", guess);
} while (guess !== secret);
console.log("Found in", attempts, "tries");`,
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
    likes: 3,
    codeSnippet: `import cv2
img = cv2.imread("photo.jpg")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
cv2.imwrite("gray_photo.jpg", gray)`,
  },
  {
    id: "3",
    title: "Text Sentiment Analyzer",
    contributors: "AI Club Volunteers",
    summary: "Check if a sentence is Positive or Negative using TextBlob.",
    description:
      "Simple NLP project to analyze the sentiment of a given sentence using TextBlob. Good intro to natural language processing.",
    tags: ["Python", "NLP", "TextBlob"],
    date: "2025-07-10",
    likes: 7,
    codeSnippet: `from textblob import TextBlob
text = "I love learning AI!"
blob = TextBlob(text)
print("Sentiment polarity:", blob.sentiment.polarity)`,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-800">Club Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {dummyProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              state={{ project }}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 block"
            >
              <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.contributors}</p>
              <p className="text-gray-700">{project.summary}</p>
            </Link>
          ))}
        </div>
     </div>
           {/* Footer pushed to bottom */}
           <Footer />
         </div>
  );
}
