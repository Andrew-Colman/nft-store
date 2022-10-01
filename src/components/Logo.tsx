import { ReactElement } from 'react';
import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { hueShift } from '@styles/keyframes';

interface LogoProps {
    src: string;
}

const StyledLogo = chakra('img', {
    baseStyle: {
        width: '48px',
        opacity: 0.9,
        cursor: 'pointer',
        _hover: {
            animation: `${hueShift} 1s linear infinite`,
        },
    },
});

export default function Logo({ src }: LogoProps): ReactElement {
    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <StyledLogo className={'app-logo'} src={src} alt="Logo" />
        </motion.div>
    );
}
