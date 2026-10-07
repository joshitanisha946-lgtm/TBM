import { motion } from "framer-motion";
import "./Packages.css";

function Packages() {
  const packagesData = [
    {
      number: "01",
      name: "ESSENTIAL REFRESH",
      startingPrice: "₹1,49,000",
      description:
        "Designed to modernize dated finishes, eliminate persistent leaks, and revitalize compact bathrooms with clean, durable materials.",
      features: [
        "Premium anti-skid vitrified floor & wall tiling",
        "Concealed plumbing overhaul & CP fittings",
        "Modern sanitaryware & wall-hung basin",
        "Complete waterproofing with warranty",
        "14-Day guaranteed completion",
      ],
    },
    {
      number: "02",
      name: "SIGNATURE MAKEOVER",
      startingPrice: "₹2,89,000",
      description:
        "Our most popular turnkey package: full spatial redesign with wet and dry separation, ambient lighting, and designer fixtures.",
      features: [
        "Floor-to-ceiling designer large format tiles",
        "Custom fluted glass wet/dry shower partition",
        "Wall-hung WC with concealed tank & plate",
        "Quartz/Solid surface floating vanity unit",
        "LED backlit mirror & cove accent lighting",
        "14-Day guaranteed completion",
      ],
    },
    {
      number: "03",
      name: "LUXURY MASTER SUITE",
      startingPrice: "₹4,75,000",
      description:
        "Architectural luxury for discerning master suites: bespoke bookmatched stone surfaces, concealed thermostatic controls, and smart mirrors.",
      features: [
        "Imported large-slab porcelain & stone surfaces",
        "Thermostatic rain shower with multi-jet system",
        "Custom waterproof teak or fluted oak vanity",
        "Smart defogger mirror with integrated touch sensors",
        "Premium frameless glass enclosure & niches",
        "14-Day priority turnkey execution",
      ],
    },
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="packages-container">
        {/* HEADER */}
        <motion.div
          className="packages-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="packages-eyebrow">
            <span>RENOVATION PACKAGES</span>
            <br />
            <span>03 CURATED TIERS</span>
          </div>

          <h2>
            DEFINED
            <br />
            <em>PACKAGES.</em>
          </h2>

          <p className="packages-intro">
            Transparent pricing with clearly defined scopes. No surprises,
            no surprise contractor markups, and one accountable team from start to finish.
          </p>
        </motion.div>

        {/* PACKAGE LIST */}
        <div className="packages-list">
          {packagesData.map((pkg, index) => (
            <motion.article
              className="package-card"
              key={pkg.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="package-top">
                <span className="package-number">{pkg.number}</span>
                <div className="package-price">
                  <span>STARTING AT</span>
                  <strong>{pkg.startingPrice}</strong>
                </div>
              </div>

              <div className="package-main">
                <h3>{pkg.name}</h3>
                <a href="#contact" className="package-arrow" aria-label={`Select ${pkg.name}`}>
                  ↗
                </a>
              </div>

              <div className="package-hidden">
                <p>{pkg.description}</p>
                <div className="package-features">
                  {pkg.features.map((feature) => (
                    <span key={feature}>
                      <b>✓</b> {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* NOTE */}
        <div className="packages-note">
          <span>✦</span>
          <p>
            All packages include complete 14-day turnkey execution, site debris disposal,
            daily photo progress updates, and our comprehensive post-renovation warranty.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Packages;