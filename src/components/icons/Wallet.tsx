import { ReactElement } from 'react';
import { Icon } from '@chakra-ui/react';

interface WalletIconProps {}

export default function WalletIcon({}: WalletIconProps): ReactElement {
    return (
        <Icon
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
        </Icon>
    );
}
