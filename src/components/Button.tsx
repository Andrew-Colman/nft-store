import React, { ReactElement } from 'react';

import { motion } from 'framer-motion';

interface ButtonProps {
    text: string;
    classes?: string;
    onClick?: () => void;
}

export default function Button({
    text,
    onClick,
    classes,
}: ButtonProps): ReactElement {
    return (
        <motion.button
            className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors duration-150 ${classes}`}
            whileHover={{ scale: 1.1 }}
            onClick={onClick}
        >
            {text}
        </motion.button>
    );
}
