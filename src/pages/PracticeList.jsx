import React, { useState } from 'react';
import practicePrompts from '../data/practicePrompts';
import PracticeCard from '../components/PracticeCard';
import PracticeModal from '../components/PracticeModal';

const PracticeList = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [userPrompt, setUserPrompt] = useState("");

  const handleCardClick = (prompt) => {
    setSelectedPrompt(prompt);
    setUserPrompt(prompt.defaultPrompt);
  };

  const handleCloseModal = () => {
    setSelectedPrompt(null);
  };

  const handleSave = () => {
    alert("Prompt saved locally.");
  };

  const handleDone = () => {
    alert("Prompt marked as done!");
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-black p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-800">🧠 Practice Prompts</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {practicePrompts.map((prompt) => (
          <PracticeCard key={prompt.id} prompt={prompt} onClick={handleCardClick} />
        ))}
      </div>

      {selectedPrompt && (
        <PracticeModal
          prompt={selectedPrompt}
          onClose={handleCloseModal}
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          onSave={handleSave}
          onDone={handleDone}
        />
      )}
    </div>
  );
};

export default PracticeList;
