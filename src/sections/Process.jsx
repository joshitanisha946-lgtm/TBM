import { motion } from "framer-motion";
import "./Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "DEFINE",
      phase: "PHASE 01",
      description:
        "We understand your requirements, bathroom layout, budget, and expectations before renovation begins.",
    },
    {
      number: "02",
      title: "DESIGN",
      phase: "PHASE 02",
      description:
        "We measure the space, craft 3D layouts, and help you select the right materials, fittings, and finishes.",
    },
    {
      number: "03",
      title: "DEVELOP",
      phase: "PHASE 03",
      description:
        "Our team handles demolition, concealed plumbing, electricals, waterproofing, and precision tiling.",
    },
    {
      number: "04",
      title: "DELIVER",
      phase: "PHASE 04",
      description:
        "We install fixtures, conduct rigorous multi-point quality audits, add final touches, and deep clean.",
    },
    {
      number: "05",
      title: "DELIGHT",
      phase: "PHASE 05",
      description:
        "We hand over your sparkling finished bathroom on time, backed by post-renovation warranty support.",
    },
  ];

  // Duplicate for seamless infinite single-line marquee loop (like reviews)
  const marqueeSteps = [...steps, ...steps, ...steps];

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        {/* HEADER */}
        <div className="process-header">
          <motion.div
            className="process-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>HOW IT WORKS</span>
            <span>01 — 05 STEPS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            FROM IDEA
            <br />
            TO <em>DONE.</em>
          </motion.h2>

          <motion.p
            className="process-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            One dedicated team manages your bathroom renovation from the first conversation to final handover in 14 days.
          </motion.p>
        </div>
      </div>

      {/* CONTINUOUS SINGLE-LINE SLIDESHOW MARQUEE */}
      <div className="process-marquee">
        <div className="process-track">
          {marqueeSteps.map((step, index) => (
            <article className="process-card" key={`${step.number}-${index}`}>
              <div className="process-card-top">
                <span className="process-card-number">{step.number}</span>
                <span className="process-card-badge">{step.phase}</span>
              </div>

              <div className="process-card-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <div className="process-card-bottom">
                <span>14-DAY TIMELINE</span>
                <strong>↗</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;