import { motion } from "framer-motion";
import project01 from "../assets/project-01.jpg";
import project02 from "../assets/project-02.jpg";
import project03 from "../assets/project-03.jpg";
import project04 from "../assets/project-04.jpg";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      number: "01",
      title: "Master Suite & Smoked Glass Vanity",
      location: "Bodakdev, Ahmedabad",
      scope: "Full Turnkey Renovation · 14 Days",
      image: project01,
    },
    {
      number: "02",
      title: "Calacatta Marble & Brushed Gold Suite",
      location: "Vastrapur, Ahmedabad",
      scope: "Curved Stone Counter & Gold Fixtures · 14 Days",
      image: project02,
    },
    {
      number: "03",
      title: "Monochrome Geometric Powder Room",
      location: "Sindhu Bhavan Road, Ahmedabad",
      scope: "Herringbone Tilework & Pedestal Basin · 12 Days",
      image: project03,
    },
    {
      number: "04",
      title: "Frameless Glass & Brass Shower Spa",
      location: "Ambli Road, Ahmedabad",
      scope: "Wet/Dry Enclosure & Designer Vanity · 14 Days",
      image: project04,
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
            <span>04 REAL PROJECTS</span>
          </div>

          <div className="portfolio-heading-content">
            <h2>
              SPACES
              <br />
              <em>WE'VE MADE.</em>
            </h2>

            <p>
              Thoughtfully designed bathrooms built around everyday comfort,
              precision waterproofing, and lasting architectural detail across Ahmedabad.
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

              {/* CARD INFO PILL */}
              <div className="portfolio-card-info">
                <h4>{project.title}</h4>
                <span>{project.location} · {project.scope}</span>
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