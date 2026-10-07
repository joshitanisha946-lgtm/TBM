import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      number: "01",
      question: "Can my bathroom really be renovated in 14 days?",
      answer:
        "Yes. Our process is planned around a 14-day renovation timeline. From demolition and plumbing to tiling, electrical work, fittings, fixtures and final finishing, our dedicated team coordinates the complete project.",
    },
    {
      number: "02",
      question: "What is included in the renovation?",
      answer:
        "Our renovation scope can include plumbing, electrical work, tiling, waterproofing, painting, lighting, fittings, fixtures and other essential bathroom work depending on your selected package and requirements.",
    },
    {
      number: "03",
      question: "Can I choose my own tiles, fittings and fixtures?",
      answer:
        "Yes. You can choose the materials, fittings, fixtures, colours and finishes for your bathroom. Our team can also guide you through suitable options based on your design, requirements and budget.",
    },
    {
      number: "04",
      question: "Do you provide customised bathroom designs?",
      answer:
        "Yes. Every bathroom is different, so our designs are adapted to your available space, functionality requirements, preferred style and budget.",
    },
    {
      number: "05",
      question: "Will I need to coordinate with different contractors?",
      answer:
        "No. That's one of the main advantages of working with us. Our team manages the renovation from planning and sourcing through execution and completion, so you don't have to coordinate separate plumbers, electricians, tile workers or other vendors.",
    },
    {
      number: "06",
      question: "Can you renovate a small or compact bathroom?",
      answer:
        "Absolutely. Compact bathrooms can often benefit the most from thoughtful planning. We optimise layouts, storage, fittings and materials to make the best use of the available space.",
    },
    {
      number: "07",
      question: "Can I stay at home during the renovation?",
      answer:
        "In most cases, you do not need to vacate your home. We plan the work to minimise disruption and keep the renovation area organised throughout the project.",
    },
    {
      number: "08",
      question: "Do you provide support after the renovation?",
      answer:
        "Yes. Our relationship doesn't end at handover. We provide post-renovation support and maintenance options to help keep your bathroom performing well over time.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        {/* HEADER */}

        <div className="faq-header">

          <motion.div
            className="faq-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>FAQ</span>
            <span>QUESTIONS · ANSWERS</span>
          </motion.div>

          <motion.div
            className="faq-heading"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2>
              BEFORE YOU
              <br />
              <em>BEGIN.</em>
            </h2>

            <p>
              Everything you need to know before
              starting your bathroom renovation.
            </p>
          </motion.div>

        </div>


        {/* FAQ LIST */}

        <div className="faq-list">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.article
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >

                  <span className="faq-number">
                    {faq.number}
                  </span>

                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  <span className="faq-icon">
                    {isOpen ? "×" : "+"}
                  </span>

                </button>


                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.article>
            );
          })}

        </div>


        {/* BOTTOM */}

        <motion.div
          className="faq-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div>
            <span>STILL HAVE A QUESTION?</span>

            <p>
              LET'S TALK ABOUT
              <br />
              YOUR <em>BATHROOM.</em>
            </p>
          </div>

          <a href="#contact">
            ASK US ANYTHING
            <strong>↗</strong>
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;