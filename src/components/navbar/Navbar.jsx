import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scal: 0.5 }}
          animate={{ opacity: 1, scal: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mid-term
        </motion.span>
        <div className="social">
          <motion.a
            initial={{ opacity: 0, scal: 0.5 }}
            animate={{ opacity: 1, scal: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
          >
            <img src="/facebook.png" alt="" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scal: 0.5 }}
            animate={{ opacity: 1, scal: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
          >
            <img src="/instagram.png" alt="" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scal: 0.5 }}
            animate={{ opacity: 1, scal: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
          >
            <img src="/youtube.png" alt="" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scal: 0.5 }}
            animate={{ opacity: 1, scal: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
          >
            <img src="/dribbble.png" alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
