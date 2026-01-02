import { motion } from "framer-motion";

export default function Header() {
    return(
        <motion.header className="Header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
        >
            <h1 className="Title">TODOIST</h1>
        </motion.header>
    );
}