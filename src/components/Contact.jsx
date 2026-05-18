import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div 
            id="contact" 
            className="contact section"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <p>For any questions please mail me:</p>
            <p><a href="mailto:rushabhjadhav666@gmail.com">rushabhjadhav666@gmail.com</a></p>
        </motion.div>
    )
}

export default Contact;