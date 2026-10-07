import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* TOP */}

        <div className="contact-top">

          <motion.div
            className="contact-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>START YOUR PROJECT</span>
            <span>AHMEDABAD · INDIA</span>
          </motion.div>

          <motion.div
            className="contact-heading"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2>
              LET'S BUILD
              <br />
              YOUR
              <br />
              <em>BATHROOM.</em>
            </h2>

            <p>
              Tell us a little about your bathroom.
              We'll take it from there.
            </p>
          </motion.div>

        </div>


        {/* CONTACT GRID */}

        <div className="contact-grid">

          {/* CONTACT DETAILS */}

          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="contact-detail-block">

              <span>CALL US</span>

              <a href="tel:+919106569173">
                +91 91065 69173
              </a>

            </div>


            <div className="contact-detail-block">

              <span>EMAIL</span>

              <a href="mailto:info@thebathroommasters.in">
                info@thebathroommasters.in
              </a>

            </div>


            <div className="contact-detail-block">

              <span>VISIT US</span>

              <p>
                A-1005, Titanium Business Park,
                <br />
                Nr Divya Bhaskar Press,
                <br />
                Nr Railway Under Bridge,
                <br />
                Makarba, Ahmedabad,
                <br />
                Gujarat 380051
              </p>

            </div>


            <div className="contact-promise">

              <strong>14</strong>

              <div>
                <span>DAY GUARANTEE</span>
                <p>
                  ONE TEAM.
                  <br />
                  ONE FINISHED BATHROOM.
                </p>
              </div>

            </div>

          </motion.div>


          {/* FORM */}

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="contact-form-row">

              <label>
                <span>01 · YOUR NAME</span>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </label>

              <label>
                <span>02 · PHONE NUMBER</span>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </label>

            </div>


            <div className="contact-form-row">

              <label>
                <span>03 · EMAIL</span>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </label>

              <label>
                <span>04 · BATHROOM SIZE</span>

                <select defaultValue="">
                  <option value="" disabled>
                    Select size
                  </option>

                  <option value="small">
                    Small · &lt; 200 sq ft
                  </option>

                  <option value="medium">
                    Medium · 200–250 sq ft
                  </option>

                  <option value="large">
                    Large · &gt; 250 sq ft
                  </option>
                </select>

              </label>

            </div>


            <label className="contact-message">
              <span>05 · TELL US ABOUT YOUR PROJECT</span>

              <textarea
                rows="4"
                placeholder="What are you looking to renovate?"
              />
            </label>


            <button
              type="submit"
              className="contact-submit"
            >
              <span>GET A FREE QUOTE</span>

              <strong>↗</strong>
            </button>

          </motion.form>

        </div>


        {/* BOTTOM CTA */}

        <motion.div
          className="contact-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span>
            READY WHEN YOU ARE.
          </span>

          <strong>
            ON TIME.
            <br />
            <em>ON BUDGET.</em>
          </strong>

        </motion.div>


        {/* FOOTER */}

        <footer className="site-footer">

          <div className="footer-brand">

            <h3>
              THE
              <br />
              BATHROOM
              <br />
              MASTERS.
            </h3>

            <p>
              End-to-end bathroom renovation,
              <br />
              from design to completion.
            </p>

          </div>


          <div className="footer-links">

            <div>
              <span>NAVIGATE</span>

              <a href="#work">Work</a>
              <a href="#packages">Packages</a>
              <a href="#process">Process</a>
              <a href="#about">About</a>
              <a href="#faq">FAQ</a>
            </div>


            <div>
              <span>CONNECT</span>

              <a href="tel:+919106569173">
                Call Us
              </a>

              <a href="mailto:info@thebathroommasters.in">
                Email
              </a>

              <a href="#contact">
                Get A Free Quote
              </a>
            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} THE BATHROOM MASTERS
            </span>

            <span>
              AHMEDABAD · GUJARAT
            </span>

            <a href="#top">
              BACK TO TOP ↗
            </a>

          </div>

        </footer>

      </div>
    </section>
  );
}

export default Contact;