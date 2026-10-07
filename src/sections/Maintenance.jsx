import { motion } from "framer-motion";
import "./Maintenance.css";

function Maintenance() {
  const services = [
    {
      number: "01",
      title: "CLEAN",
      description:
        "Internal and external cleaning of showerheads, diverters, taps, flush valves and tanks.",
    },
    {
      number: "02",
      title: "INSPECT",
      description:
        "We inspect fittings, fixtures and bathroom components for wear, loose parts and potential issues.",
    },
    {
      number: "03",
      title: "CHECK",
      description:
        "Water flow and bathroom functionality are checked to identify problems before they become expensive repairs.",
    },
    {
      number: "04",
      title: "REPAIR",
      description:
        "Minor repairs and adjustments help keep your bathroom working smoothly and looking its best.",
    },
  ];

  const plans = [
    {
      name: "MONTHLY",
      small: "₹750",
      medium: "₹900",
      large: "₹1,000",
    },
    {
      name: "QUARTERLY",
      small: "₹1,625",
      medium: "₹1,725",
      large: "₹1,925",
    },
    {
      name: "YEARLY",
      small: "₹5,625",
      medium: "₹8,100",
      large: "₹9,000",
    },
  ];

  return (
    <section className="maintenance-section" id="maintenance">
      <div className="maintenance-container">

        {/* HEADER */}

        <div className="maintenance-header">

          <motion.div
            className="maintenance-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>AFTER THE RENOVATION</span>
            <span>BATHROOM CARE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            KEEP IT
            <br />
            LOOKING
            <br />
            <em>NEW.</em>
          </motion.h2>

          <motion.p
            className="maintenance-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Regular care keeps your bathroom clean,
            functional and performing the way it should.
          </motion.p>

        </div>


        {/* SERVICES */}

        <div className="maintenance-services">

          {services.map((service, index) => (
            <motion.article
              className="maintenance-service"
              key={service.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <div className="maintenance-service-number">
                {service.number}
              </div>

              <div className="maintenance-service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="maintenance-service-arrow">
                ↗
              </div>
            </motion.article>
          ))}

        </div>


        {/* PRICING */}

        <div className="maintenance-pricing">

          <div className="maintenance-pricing-header">

            <div>
              <span>CARE PLANS</span>

              <h3>
                CHOOSE YOUR
                <br />
                <em>ROUTINE.</em>
              </h3>
            </div>

            <p>
              Plans are based on bathroom size.
              Choose the frequency that works best
              for your space.
            </p>

          </div>


          <div className="maintenance-plans">

            {plans.map((plan, index) => (
              <motion.article
                className="maintenance-plan"
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <div className="maintenance-plan-top">
                  <span>0{index + 1}</span>

                  <h4>{plan.name}</h4>

                  <strong>↗</strong>
                </div>


                <div className="maintenance-plan-prices">

                  <div>
                    <span>SMALL</span>
                    <strong>{plan.small}</strong>
                    <small>&lt; 200 SQ FT</small>
                  </div>

                  <div>
                    <span>MEDIUM</span>
                    <strong>{plan.medium}</strong>
                    <small>200–250 SQ FT</small>
                  </div>

                  <div>
                    <span>LARGE</span>
                    <strong>{plan.large}</strong>
                    <small>&gt; 250 SQ FT</small>
                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>


        {/* BOTTOM CTA */}

        <motion.div
          className="maintenance-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>
            YOUR BATHROOM DESERVES
            <br />
            REGULAR CARE.
          </span>

          <a href="#contact">
            EXPLORE CARE PLANS
            <strong>↗</strong>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Maintenance;