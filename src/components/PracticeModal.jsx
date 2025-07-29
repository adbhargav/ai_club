import React from 'react';

const dummyPromptImages = [
  {
    prompt:
      "Close-up portrait of me leaning against a damp brick wall in a narrow alleyway at night. I’m wearing a charcoal trench coat with the collar popped and a tilted fedora, shadows partially covering my face. A single red neon “BAR” sign flickers above, casting reflections on the rain-slick pavement. A lit cigarette glows between my fingers. Mist rolls in from a nearby vent. High-contrast noir lighting, sharp shadows across the face. Shot with a 35mm lens, slight grain, vertical 3:4.",
    image: "p1.jpg",
  },
  {
    prompt:
      "Mid-shot of me standing alone at an empty train station platform in the early morning fog. I wear a long overcoat with gloves, holding a briefcase. Steam from a passing train obscures the background. Cool tones with a sepia overlay. 50mm lens, shallow depth, 4:5.",
    image: "p2.jpg",
  },
  {
    prompt:
      "Moody shot of me seated behind a desk under a bare bulb in a dim office with Venetian blinds casting striped shadows. Rolled-up white shirt, suspenders, a loosened tie. A smoking ashtray and half-empty whiskey glass sit nearby. Warm sepia tones. 1950s detective film. Ratio: 3:4.",
    image: "p3.jpg",
  },
  {
    prompt:
      "Side profile of me on a rusty fire escape, backlit by a neon motel sign casting intense blue and pink hues. I wear a dark leather coat and gloves, a revolver barely visible. Rain beads on the metal grate. Shot at night with shallow DOF. Ratio: 4:5.",
    image: "p4.jpg",
  },
  {
    prompt:
      "Mid-shot in the back of a smoky 1940s jazz club. I'm in a velvet blazer, sipping whiskey. Cigarette smoke veils the view, soft spotlight on a singer. Warm gold and cool blue hues, vintage film bokeh. 3:4 ratio.",
    image: "p5.jpg",
  },
  {
    prompt:
      "Wide shot on a rooftop under moonlight. Trench coat billows in breeze. Red signal light blinks nearby. I hold a crumpled letter. Cool steel-blue tones, noir lighting. Ratio: 4:5.",
    image: "p6.jpg",
  },
  {
    prompt:
      "Silhouette of me behind a rain-speckled office window, lit by city neon lights. Wearing a pinstripe suit. Rain streaks on the glass. Rich blacks and cinematic shadows. Portrait 3:4.",
    image: "p7.jpg",
  },
  {
    prompt:
      "Mid-shot of me under a flickering streetlamp. Crumpled shirt, trench coat, loose tie. Cigarette smoke curls into the mist. Orange-yellow glow and film grain. Ratio: 3:4.",
    image: "p8.jpg",
  },
  {
    prompt:
      "Indoor mid-shot of me opening a filing cabinet marked 'CONFIDENTIAL' in a smoky office. Shoulder holster visible, dusty air, slatted light. Cool green tones. Cinematic composition. 3:4.",
    image: "p9.jpg",
  },
  {
    prompt:
      "Low-angle shot in a dim parking garage. I walk toward camera, trench coat trailing. Car headlights flare in the back. Cold tungsten lighting and gritty tint. 4:5 ratio with motion blur.",
    image: "p10.jpg",
  },
];

const PracticeModal = ({
  prompt,
  onClose,
  userPrompt,
  setUserPrompt,
  onSave,
  onDone,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4 py-10">
      <div className="bg-[#e6f0ff] rounded-xl shadow-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900">Prompt Viewer</h2>
          <button onClick={onClose} className="text-xl text-blue-600 hover:text-blue-900">
            &times;
          </button>
        </div>

        {/* Title */}
        <p className="mb-6 text-lg font-semibold text-center text-blue-800">
          {prompt?.title || "Top 10 Prompts with Sample Images"}
        </p>

        {/* Prompt List */}
        <div className="grid gap-6">
          {dummyPromptImages.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-4 bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex-1">
                <h4 className="font-semibold mb-1 text-blue-900">Prompt {idx + 1}</h4>
                <p className="text-sm text-gray-700">{item.prompt}</p>
              </div>
              <img
                src={item.image}
                alt={`Prompt ${idx + 1}`}
                className="w-full md:w-1/3 rounded-lg object-cover max-h-60"
              />
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default PracticeModal;
