import { useRef } from "react";
import "./portfolio.scss";
import {
  motion,
  transform,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://i.pinimg.com/originals/92/62/57/926257733542a8212f23521fc8e50fe0.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, expedita esse sed velit quaerat fuga doloremque dicta animi rerum cumque tenetur possimus, laboriosam tempore! Quo dicta amet neque ipsa sequi.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://th.bing.com/th/id/OIP.kPGfsTKTFrlvuM__dExcewHaFj?pid=ImgDet&rs=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, expedita esse sed velit quaerat fuga doloremque dicta animi rerum cumque tenetur possimus, laboriosam tempore! Quo dicta amet neque ipsa sequi.",
  },
  {
    id: 3,
    title: "Angular dashboard",
    img: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, expedita esse sed velit quaerat fuga doloremque dicta animi rerum cumque tenetur possimus, laboriosam tempore! Quo dicta amet neque ipsa sequi.",
  },
  {
    id: 4,
    title: "JakartaEE Bussiness",
    img: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, expedita esse sed velit quaerat fuga doloremque dicta animi rerum cumque tenetur possimus, laboriosam tempore! Quo dicta amet neque ipsa sequi.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
