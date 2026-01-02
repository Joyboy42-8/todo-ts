import { motion } from "framer-motion";

export default function Footer() {
    return(
        <motion.footer className="Footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
            <p className="Copyright">JOYBOY_42-8</p>
        </motion.footer>
    );
}