import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./animate";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, idx) => {
          const { title, href } = link;

          return (
            <div key={`b_${idx}`} className={styles.linkContainer}>
              <motion.div
                href={href}
                custom={idx}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, idx) => {
          const { title, href } = link;

          return (
            <motion.a
              variants={slideIn}
              custom={idx}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${idx}`}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
