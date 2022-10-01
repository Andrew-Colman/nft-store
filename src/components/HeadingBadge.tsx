import { ReactElement, ReactNode } from 'react';

import { chakra } from '@chakra-ui/react';

interface Props {
    children: ReactNode;
    classes?: string;
    rest?: any;
}

export default function HeadingBadge({
    children,
    classes,
    ...rest
}: Props): ReactElement {
    return (
        <chakra.span
            rounded="md"
            className={`text-indigo-600 shadow-lg shadow-indigo-500/50 hover:bg-zinc-900 smooth-colors px-3 py-2 cursor-pointer duration-300 ${classes}`}
            {...rest}
        >
            {children}
        </chakra.span>
    );
}
