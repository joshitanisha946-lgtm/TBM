import { motion } from "framer-motion";
import "./GlobalTrends.css";

function GlobalTrends() {
  const trends = [
    {
      number: "01",
      category: "MATERIAL",
      title: "STATEMENT STONE",
      description:
        "Natural stone, expressive textures and large-format surfaces are bringing a stronger architectural character to modern bathrooms.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
    },
    {
      number: "02",
      category: "STYLE",
      title: "SPA MINIMALISM",
      description:
        "Calm colours, clean forms and warm materials create bathrooms that feel less like utility spaces and more like private retreats.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90",
    },
    {
      number: "03",
      category: "AESTHETIC",
      title: "JAPANDI",
      description:
        "Japanese simplicity meets Scandinavian warmth through natural textures, muted tones and beautifully restrained detailing.",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
    },
    {
      number: "04",
      category: "TECHNOLOGY",
      title: "SMART BATHROOMS",
      description:
        "From intelligent lighting to modern fixtures, technology is becoming quieter, more useful and seamlessly integrated.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
    },
  ];

  return (
    <section className="global-trends-section" id="trends">
      <div className="global-trends-container">

        <div className="global-trends-header">
          <div className="global-trends-label">
            <span>GLOBAL TRENDS</span>
            <span>DESIGN · MATERIAL · TECHNOLOGY</span>
          </div>

          <div className="global-trends-heading">
            <h2>
              WHAT'S
              <br />
              SHAPING
              <br />
              <em>BATHROOMS.</em>
            </h2>

            <p>
              We look beyond the usual bathroom catalogue.
              From materials and finishes to new ways of
              experiencing the space, we bring global
              inspiration into local homes.
            </p>
          </div>
        </div>

        <div className="global-trends-grid">

          {trends.map((trend, index) => (
            <motion.article
              className="global-trend-card"
              key={trend.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >

              {/* FIXED IMAGE FRAME */}

              <div className="global-trend-image">

                <img
                  src={trend.image}
                  alt={trend.title}
                />

                <div className="global-trend-image-overlay" />

                <div className="global-trend-number">
                  {trend.number}
                </div>

                <button
                  className="global-trend-arrow"
                  type="button"
                  aria-label={`View ${trend.title}`}
                >
                  ↗
                </button>

              </div>

              {/* INFORMATION */}

              <div className="global-trend-info">

                <div className="global-trend-meta">
                  <span>{trend.category}</span>
                  <span>2026</span>
                </div>

                <h3>{trend.title}</h3>

                <p>{trend.description}</p>

                <div className="global-trend-line">
                  <span />
                </div>

              </div>

            </motion.article>
          ))}

        </div>

        <div className="global-trends-bottom">

          <div>
            <span>THE IDEA</span>

            <p>
              GOOD DESIGN DOESN'T
              <br />
              FOLLOW TRENDS.
              <br />
              IT <em>SELECTS</em> THEM.
            </p>
          </div>

          <a href="#contact">
            BRING AN IDEA TO LIFE
            <strong>↗</strong>
          </a>

        </div>

      </div>
    </section>
  );
}

export default GlobalTrends;