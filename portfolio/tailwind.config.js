module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        header: "var(--header-bg)",
        headerText: "var(--header-text)",
    borderLight: "var(--border-light)",
    borderStrong: "var(--border-strong)",

    awareness: "var(--awareness)",
    engagement: "var(--engagement)",
    humor: "var(--humor)",
    amplification: "var(--amplification)",
    socialProof: "var(--social-proof)",
    visual: "var(--visual)",
  },
  borderRadius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
  },
  spacing: {
    1: "var(--space-1)",
    2: "var(--space-2)",
    3: "var(--space-3)",
    4: "var(--space-4)",
    6: "var(--space-6)",
    8: "var(--space-8)",
    12: "var(--space-12)",
  },
}
} 
};
