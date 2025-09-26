// src/components/ScrollingText.jsx
const ScrollingText = ({ text, direction = "left", className = "" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-block text-4xl md:text-6xl font-bold text-muted-foreground/20 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {Array(10).fill(text).join(" • ")}
      </div>
    </div>
  );
};

export default ScrollingText;
