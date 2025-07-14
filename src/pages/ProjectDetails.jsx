// src/pages/ProjectDetails.jsx
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-600 font-semibold text-center px-4">
        <p>⚠️ Project not found or no data passed.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-700 underline text-sm hover:text-blue-900"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
          {project.title}
        </h2>

        {/* Contributor & Date */}
        <p className="text-gray-600 text-sm mb-2">
          👤 <strong>{project.contributors}</strong> • 🗓️{" "}
          {project.date || "Date not available"}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-800 mb-6">{project.description}</p>

        {/* Embedded Code */}
        {project.codeSnippet && (
          <div className="bg-gray-100 rounded-md p-4 mb-6 overflow-auto text-sm font-mono">
            <pre>
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Source Code Link */}
        {project.sourceCode ? (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            🔗 View Full Source Code
          </a>
        ) : (
          <p className="text-sm text-gray-600 italic mb-4">
            No external source code available.
          </p>
        )}

        {/* Likes Section (Static for now) */}
        <div className="mt-6 text-gray-700 text-sm">
          👍 <strong>{project.likes || 0}</strong> people liked this project
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 block text-blue-700 hover:underline text-sm"
        >
          ← Back to Projects
        </button>
      </div>
      <Footer />
    </div>
  );
}
