import { motion } from "framer-motion";
import "./WhyUs.css";

function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "CUSTOMIZED DESIGN",
      description:
        "Every bathroom is designed around your space, requirements, lifestyle and personal preferences.",
    },
    {
      number: "02",
      title: "HIGHLY SKILLED TEAM",
      description:
        "Experienced professionals handle the renovation with attention to detail, quality and precision.",
    },
    {
      number: "03",
      title: "14-DAY GUARANTEE",
      description:
        "We work with a defined timeline and aim to deliver your complete bathroom renovation within 14 days.",
    },
    {
      number: "04",
      title: "PERSONALIZED PACKAGES",
      description:
        "Choose a renovation package that fits your bathroom, requirements and budget.",
    },
    {
      number: "05",
      title: "EXPERT SUPERVISION",
      description:
        "Your project is managed and supervised by one dedicated team from planning through completion.",
    },
    {
      number: "06",
      title: "POST-RENOVATION SUPPORT",
      description:
        "Our relationship doesn't end at handover. We continue to support your bathroom after completion.",
    },
    {
      number: "07",
      title: "PREMIUM CONSTRUCTION",
      description:
        "From waterproofing to installation, every stage is handled with a focus on durability and finish.",
    },
    {
      number: "08",
      title: "QUALITY MATERIALS",
      description:
        "We help you select reliable materials, fittings and fixtures that combine quality and lasting performance.",
    },
    {
      number: "09",
      title: "TRANSPARENT PRICING",
      description:
        "Clear packages and defined scope help you understand what you're paying for before work begins.",
    },
  ];

  return (
    <section className="why-us-section" id="about">
      <div className="why-us-container">

        {/* HEADER */}

        <motion.div
          className="why-us-header"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="why-us-label">
            <span>WHY BATHROOM MASTERS</span>
            <span>09 REASONS</span>
          </div>


          <div className="why-us-heading">

            <h2>
              MORE THAN
              <br />
              A RENOVATION.
            </h2>

            <p>
              One dedicated team, one clear process and
              one finished bathroom without the usual
              renovation chaos.
            </p>

          </div>

        </motion.div>


        {/* REASONS */}

        <div className="why-us-grid">

          {reasons.map((reason, index) => (

            <motion.article
              className="why-us-card"
              key={reason.number}

              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.6,
                delay: index * 0.06,
              }}
            >

              <div className="why-us-card-top">

                <span className="why-us-number">
                  {reason.number}
                </span>

                <span className="why-us-arrow">
                  ↗
                </span>

              </div>


              <div className="why-us-card-content">

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <motion.div
          className="why-us-bottom"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <span>
            THE BATHROOM MASTERS APPROACH
          </span>

          <strong>
            NO DELAYS.
            <br />
            NO DRAMA.
            <br />
            JUST <em>DONE.</em>
          </strong>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;