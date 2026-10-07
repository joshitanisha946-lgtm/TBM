import { motion } from "framer-motion";
import "./Problem.css";

function Problem() {
  const problems = [
    "DELAYS",
    "FOLLOW-UPS",
    "DUST",
    "NOISE",
    "PLUMBER",
    "ELECTRICIAN",
    "COST OVERRUN",
  ];

  const bubbleAnimations = [
    {
      y: [0, -12, 0],
      rotate: [-4, -1, -4],
    },
    {
      y: [0, 15, 0],
      rotate: [3, 6, 3],
    },
    {
      y: [0, -10, 0],
      rotate: [-2, 2, -2],
    },
    {
      y: [0, 13, 0],
      rotate: [4, 1, 4],
    },
    {
      y: [0, -14, 0],
      rotate: [2, -2, 2],
    },
    {
      y: [0, 11, 0],
      rotate: [-4, 0, -4],
    },
    {
      y: [0, -12, 0],
      rotate: [3, -1, 3],
    },
  ];

  const solutionPoints = [
    "NO CHASING VENDORS",
    "NO COORDINATING CONTRACTORS",
    "NO UNCERTAINTY",
  ];

  return (
    <section className="problem-section">
      <div className="problem-container">
        <motion.div
          className="problem-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THE OLD WAY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          RENOVATION
          <br />
          SHOULDN'T FEEL
          <br />
          LIKE <em>THIS.</em>
        </motion.h2>

        {/* FLOATING PROBLEM BUBBLES */}
        <div className="problem-chaos">
          {problems.map((problem, index) => (
            <motion.span
              key={problem}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              animate={{
                ...bubbleAnimations[index],
                transition: {
                  duration: 4 + index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              {problem}
            </motion.span>
          ))}
        </div>

        {/* THE BETTER WAY */}
        <motion.div
          className="problem-solution"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>THE BETTER WAY</span>

          <h3>
            ONE TEAM.
            <br />
            ONE PLAN.
            <br />
            ONE FINISHED
            <br />
            <em>BATHROOM.</em>
          </h3>

          {/* FLOATING SOLUTION POINTS */}
          <div className="problem-points">
            {solutionPoints.map((point, index) => (
              <motion.p
                key={point}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                animate={{
                  y: [0, index % 2 === 0 ? -7 : 7, 0],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                  backgroundColor: "#ffbd00",
                  borderColor: "#ffbd00",
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                {point}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Problem;