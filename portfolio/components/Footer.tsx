export default function Footer() {
  return (
    <footer
      className="py-[var(--space-6)] text-center border-t txt-sm mt-2"
      style={{
        borderColor: "var(--border-light)",
        color: "var(--text-secondary)",
      }}
    >
      © {new Date().getFullYear()} Philip Amissah. All rights reserved.
    </footer>
  );
}
