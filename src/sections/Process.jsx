import { motion } from "framer-motion";
import "./Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "DEFINE",
      description:
        "We understand your requirements, bathroom, budget and expectations before the renovation begins.",
    },
    {
      number: "02",
      title: "DESIGN",
      description:
        "We measure the space, create the layout and help you select the right materials, fittings and finishes.",
    },
    {
      number: "03",
      title: "DEVELOP",
      description:
        "Our team handles demolition, plumbing, electrical work, preparation, procurement and installation.",
    },
    {
      number: "04",
      title: "DELIVER",
      description:
        "We complete the renovation, perform quality checks, add the final touches and hand over the finished bathroom.",
    },
    {
      number: "05",
      title: "DELIGHT",
      description:
        "Our support continues after handover with post-renovation service and maintenance assistance.",
    },
  ];

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
            <span>01 — 05</span>
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
            One dedicated team takes care of your bathroom
            from the first conversation to the final handover.
          </motion.p>

        </div>


        {/* TIMELINE */}
        <div className="process-timeline">

          {/* Background line */}
          <div className="process-line">
            <motion.div
              className="process-line-active"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>


          {steps.map((step, index) => (
            <motion.article
              className="process-step"
              key={step.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >

              {/* NUMBER */}
              <div className="process-number">
                <span>{step.number}</span>
              </div>


              {/* CONTENT */}
              <div className="process-content">

                <div className="process-title-row">
                  <h3>{step.title}</h3>

                  <span className="process-arrow">
                    ↗
                  </span>
                </div>

                <p>{step.description}</p>

              </div>


              {/* STEP INDICATOR */}
              <div className="process-side">
                <span>STEP</span>
                <strong>{step.number}</strong>
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;