import { useState, useCallback } from "react";
import beforeImage from "../assets/before-bathroom.jpg";
import afterImage from "../assets/after-bathroom.jpg";
import "./BeforeAfter.css";

function BeforeAfter() {
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX, container) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  }, []);

  const handleMouseMove = (event) => {
    updatePosition(event.clientX, event.currentTarget);
  };

  const handleTouchMove = (event) => {
    if (event.touches && event.touches[0]) {
      updatePosition(event.touches[0].clientX, event.currentTarget);
    }
  };

  return (
    <section className="before-after-section" id="transformation">
      <div className="before-after-heading">
        <p className="section-label">THE TRANSFORMATION</p>

        <h2>
          SAME SPACE.
          <br />
          <span>NEW EXPERIENCE.</span>
        </h2>

        <p className="section-description">
          Great renovation isn't about moving walls or adding square feet.
          It's about re-engineering layout, lighting, waterproofing, and tactile materials
          into a daily sanctuary.
        </p>
      </div>

      <div
        className="before-after-container"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background) */}
        <div className="after-image">
          <img
            src={afterImage}
            alt="Renovated luxury bathroom after transformation"
          />
          <div className="image-label after-label">AFTER · 14 DAYS</div>
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div
          className="before-image"
          style={{
            width: `${position}%`,
          }}
        >
          <img
            src={beforeImage}
            alt="Bathroom before renovation"
          />
          <div className="image-label before-label">BEFORE RENOVATION</div>
        </div>

        {/* SLIDER HANDLE */}
        <div
          className="slider-line"
          style={{
            left: `${position}%`,
          }}
        >
          <div className="slider-button" aria-label="Slide to compare before and after">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>

      <div className="before-after-hint">
        <span>↔ HOVER OR DRAG ACROSS TO REVEAL</span>
      </div>
    </section>
  );
}

export default BeforeAfter;