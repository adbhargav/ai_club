import React from 'react';

const PracticeCard = ({ prompt, onClick }) => {
  return (
    <div
      className="bg-white text-black p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer border border-gray-200 max-w-md mx-auto"
      onClick={() => onClick(prompt)}
    >
      {prompt.type === "image" ? (
        <img
          src="img1.jpeg"
          className="h-40 w-full object-cover rounded mb-3"
          alt="Prompt"
        />
      ) : (
        <video className="h-40 w-full object-cover rounded mb-3" muted autoPlay loop>
          <source src={prompt.mediaUrl} type="video/mp4" />
        </video>
      )}
      <h2 className="text-lg font-bold">{prompt.title}</h2>
      <p className="text-sm text-gray-600">{prompt.category} • {prompt.difficulty}</p>
    </div>
  );
};

export default PracticeCard;
