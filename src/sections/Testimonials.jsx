import { motion } from "framer-motion";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "The entire process was hassle-free. The team completed the renovation in exactly 14 days without us having to coordinate with plumbers or suppliers.",
      name: "Muskan Bhojwani",
      role: "Homeowner",
    },
    {
      quote:
        "The 3D drawing made it very easy to visualise the final bathroom. The execution was neat, clean and completed within 14 days.",
      name: "Ritvan Upadhyay",
      role: "Homeowner",
    },
    {
      quote:
        "There were no delays and the bathroom was delivered in 14 days. The design and functionality turned out exactly the way we wanted.",
      name: "Neel Shah",
      role: "Homeowner",
    },
    {
      quote:
        "We did not have to keep running around or chase vendors. The entire process was organised and the final design was excellent.",
      name: "Pratik Dharia",
      role: "Homeowner",
    },
  ];

  const displayReviews = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}

        <div className="testimonials-header">

          <motion.div
            className="testimonials-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>CLIENT EXPERIENCES</span>
            <span>REAL PEOPLE · REAL PROJECTS</span>
          </motion.div>

          <motion.div
            className="testimonials-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              WHAT OUR
              <br />
              CLIENTS
              <br />
              <em>SAY.</em>
            </h2>

            <p>
              A bathroom renovation should feel organised,
              transparent and stress-free. Our clients
              experienced exactly that.
            </p>
          </motion.div>

        </div>


        {/* SCROLLING TESTIMONIALS (SINGLE LINE) */}

        <div className="testimonials-marquee">

          <div className="testimonial-track testimonial-track-left">

            {displayReviews.map((testimonial, index) => (
              <article
                className="testimonial-card"
                key={`review-${index}`}
              >
                <div className="testimonial-stars">
                  ★★★★★
                </div>

                <p>
                  "{testimonial.quote}"
                </p>

                <div className="testimonial-card-bottom">

                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="testimonial-person">
                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.role}
                    </span>
                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>


        {/* BOTTOM STATEMENT */}

        <motion.div
          className="testimonials-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>
            TRUSTED BY
            <br />
            HOMEOWNERS IN AHMEDABAD
          </span>

          <strong>
            14 DAYS.
            <br />
            <em>ZERO DRAMA.</em>
          </strong>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;