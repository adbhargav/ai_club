// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this matches your project
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.95rem",    // was 0.875rem
        base: "1.1rem",   // was 1rem
        lg: "1.25rem",    // was 1.125rem
        xl: "1.5rem",     // was 1.25rem
        "2xl": "1.75rem", // was 1.5rem
        "3xl": "2rem",    // was 1.875rem
        "4xl": "2.5rem",  // was 2.25rem
        "5xl": "3rem",    // was 3rem (no change)
      },
    },
  },
  plugins: [],
};
