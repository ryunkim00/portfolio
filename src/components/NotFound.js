import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h3 style={{ marginTop: "-1rem", marginBottom: "3rem" }}>
        Page Not Found
      </h3>
      <Link to="/portfolio">
        <motion.button
          style={{ border: "1px #fcbc66 solid" }}
          whileHover={{ scale: 1.1 }}
        >
          Return Home
        </motion.button>
      </Link>
    </div>
  );
};

export default NotFound;
