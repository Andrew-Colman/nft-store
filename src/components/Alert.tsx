import React, { ReactElement, ReactNode, useState } from 'react';
import {
    Alert as ChakraAlert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    CloseButton,
    SlideFade,
} from '@chakra-ui/react';

interface AlertProps {
    title: string;
    description: ReactNode;
    status: 'info' | 'warning' | 'success' | 'error';
    isOpen?: boolean;
    hideable?: boolean;
}

export default function Alert({
    title,
    description,
    status,
    isOpen,
    hideable,
}: AlertProps): ReactElement {
    const [close, setClose] = useState(false);

    if (close) return null;

    return (
        <SlideFade in={isOpen} offsetY="20px">
            <ChakraAlert status={status} textColor={'blackAlpha.900'}>
                <AlertIcon />
                <AlertTitle mr={2}>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
                {hideable && (
                    <CloseButton
                        position="absolute"
                        right="8px"
                        top="8px"
                        onClick={() => setClose(true)}
                    />
                )}
            </ChakraAlert>
        </SlideFade>
    );
}
