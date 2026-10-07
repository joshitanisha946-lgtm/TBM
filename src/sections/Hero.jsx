import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Clock, ArrowDown } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="top">
      {/* Subtle ambient lighting */}
      <div className="hero-ambient-glow" />

      <div className="hero-container">
        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="hero-left">
          <motion.div
            className="hero-badge-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-eyebrow">THE BATHROOM MASTERS · AHMEDABAD</span>
            <div className="hero-rating-pill">
              <span className="rating-stars">★★★★★</span>
              <span>4.9 (150+ Homes)</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            A better bathroom
            <br />
            <em>starts here.</em>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            End-to-end luxury bathroom renovations completed in 14 days.
            From 3D design to flawless tiling and plumbing — managed by one dedicated team.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <a href="#contact" className="hero-button">
              <span>GET A FREE QUOTE</span>
              <strong>↗</strong>
            </a>

            <a href="#work" className="hero-secondary-btn">
              <span>View Projects</span>
              <ArrowDown size={14} className="hero-btn-arrow" />
            </a>
          </motion.div>

          {/* TRUST METRICS ROW */}
          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <div className="metric-item">
              <div className="metric-icon">
                <Clock size={16} />
              </div>
              <div className="metric-text">
                <strong>14 Days</strong>
                <span>Guaranteed Delivery</span>
              </div>
            </div>

            <div className="metric-divider" />

            <div className="metric-item">
              <div className="metric-icon">
                <ShieldCheck size={16} />
              </div>
              <div className="metric-text">
                <strong>100% Turnkey</strong>
                <span>Single-Team Managed</span>
              </div>
            </div>

            <div className="metric-divider" />

            <div className="metric-item">
              <div className="metric-icon">
                <Sparkles size={16} />
              </div>
              <div className="metric-text">
                <strong>3D Design</strong>
                <span>Included Prior to Work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Luxury Visual Showcase */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-visual-card">
            <img
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury modern renovated bathroom showcase"
              className="hero-card-img"
            />
            <div className="hero-card-overlay" />

            {/* FLOATING STATUS PILL */}
            <motion.div
              className="floating-pill floating-status"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="pulse-dot" />
              <div>
                <strong>Turnkey Handover</strong>
                <small>Ahmedabad, GJ</small>
              </div>
            </motion.div>

            {/* FLOATING 14-DAY GUARANTEE */}
            <motion.div
              className="hero-guarantee-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <strong>14</strong>
              <div className="guarantee-badge-content">
                <span>DAY GUARANTEE</span>
                <p>END-TO-END RENOVATION</p>
              </div>
            </motion.div>

            {/* BOTTOM FLOATING SCOPE */}
            <motion.div
              className="floating-pill floating-scope"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <CheckCircle2 size={16} className="scope-check-icon" />
              <span>Plumbing · Waterproofing · Tiling · Luxury Fittings</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="hero-line" />
    </section>
  );
}

export default Hero;