import { motion } from "framer-motion";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      number: "01",
      title: "The Minimalist Marble Suite",
      location: "Bodakdev, Ahmedabad",
      scope: "Full Gut Renovation · 14 Days",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
    },
    {
      number: "02",
      title: "The Japandi Warm Oak Retreat",
      location: "Vastrapur, Ahmedabad",
      scope: "Dry/Wet Segregation · 14 Days",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
    },
    {
      number: "03",
      title: "The Monolith Slate Powder Room",
      location: "Sindhu Bhavan Road, Ahmedabad",
      scope: "Architectural Stone & Brass · 12 Days",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    },
    {
      number: "04",
      title: "The Fluted Glass Spa Sanctuary",
      location: "Ambli Road, Ahmedabad",
      scope: "Concealed Smart Fixtures · 14 Days",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90",
    },
  ];

  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-container">
        {/* HEADER */}
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="portfolio-label">
            <span>SELECTED WORK</span>
            <span>04 FEATURED PROJECTS</span>
          </div>

          <div className="portfolio-heading-content">
            <h2>
              SPACES
              <br />
              <em>WE'VE MADE.</em>
            </h2>

            <p>
              Thoughtfully designed bathrooms built around everyday comfort,
              precision waterproofing, and lasting architectural detail.
            </p>
          </div>
        </motion.div>

        {/* IMAGE GRID */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.article
              className="portfolio-card"
              key={project.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="portfolio-overlay" />

              <div className="portfolio-number">
                {project.number}
              </div>

              <div className="portfolio-arrow">
                ↗
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          className="portfolio-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>YOUR BATHROOM COULD BE NEXT</span>

          <a href="#contact">
            START YOUR PROJECT
            <strong>↗</strong>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;