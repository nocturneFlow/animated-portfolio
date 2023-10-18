import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I made your brand stay on
          <br /> a high-level
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#EF476F" }}>Frustraiting</motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#EF476F" }}>Four your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "#9AACA4" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            architecto iure. Animi, vitae tempore, ratione voluptates laborum,
            molestias deleniti quam aspernatur sequi sunt porro eaque voluptatem
            aperiam minus debitis quidem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "#9AACA4" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            architecto iure. Animi, vitae tempore, ratione voluptates laborum,
            molestias deleniti quam aspernatur sequi sunt porro eaque voluptatem
            aperiam minus debitis quidem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "#9AACA4" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            architecto iure. Animi, vitae tempore, ratione voluptates laborum,
            molestias deleniti quam aspernatur sequi sunt porro eaque voluptatem
            aperiam minus debitis quidem.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "#9AACA4" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            architecto iure. Animi, vitae tempore, ratione voluptates laborum,
            molestias deleniti quam aspernatur sequi sunt porro eaque voluptatem
            aperiam minus debitis quidem.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
