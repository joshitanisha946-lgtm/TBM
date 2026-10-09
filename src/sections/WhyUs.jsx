import { motion } from "framer-motion";
import "./WhyUs.css";

function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "CUSTOMIZED DESIGN",
      description:
        "Every bathroom is designed around your space, requirements, lifestyle and personal aesthetic preferences.",
    },
    {
      number: "02",
      title: "HIGHLY SKILLED TEAM",
      description:
        "Experienced in-house professionals handle the entire renovation with precision, craftsmanship and quality.",
    },
    {
      number: "03",
      title: "14-DAY GUARANTEE",
      description:
        "We commit to a defined timeline and deliver your complete bathroom renovation within 14 guaranteed days.",
    },
    {
      number: "04",
      title: "PERSONALIZED PACKAGES",
      description:
        "Choose a defined renovation package (Standard, Premium, Luxury) that fits your space, scope and budget.",
    },
    {
      number: "05",
      title: "EXPERT SUPERVISION",
      description:
        "Your project is managed and supervised end-to-end by one dedicated team from demolition to final handover.",
    },
    {
      number: "06",
      title: "POST-RENOVATION SUPPORT",
      description:
        "Our relationship doesn't end at handover. We provide warranty and post-renovation maintenance assistance.",
    },
    {
      number: "07",
      title: "PREMIUM CONSTRUCTION",
      description:
        "From certified multi-layer waterproofing to flawless tiling, every stage is executed for lasting durability.",
    },
    {
      number: "08",
      title: "QUALITY MATERIALS",
      description:
        "We source genuine, durable materials, concealed fixtures and fittings that guarantee long-term performance.",
    },
    {
      number: "09",
      title: "TRANSPARENT PRICING",
      description:
        "Clear pricing and fixed scopes mean you always know what you're paying for before any work begins.",
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeReasons = [...reasons, ...reasons];

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
            <span>09 CORE ADVANTAGES</span>
          </div>

          <div className="why-us-heading">
            <h2>
              MORE THAN
              <br />
              A RENOVATION.
            </h2>

            <p>
              One dedicated team, one clear process and one finished bathroom
              without the usual renovation chaos and endless vendor chasing.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CONTINUOUS SINGLE-LINE MARQUEE SLIDESHOW */}
      <div className="why-us-marquee">
        <div className="why-us-track">
          {marqueeReasons.map((reason, index) => (
            <article
              className="why-us-card"
              key={`${reason.number}-${index}`}
            >
              <div className="why-us-card-top">
                <span className="why-us-number">{reason.number}</span>
                <span className="why-us-arrow">↗</span>
              </div>

              <div className="why-us-card-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>

              <div className="why-us-card-bottom-bar" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;