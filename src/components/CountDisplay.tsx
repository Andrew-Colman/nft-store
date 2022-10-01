import { Tag, Tooltip } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CountDisplayProps {
    label: string;
    count: string | number;
}

export default function CountDisplay({
    label = 'count',
    count,
}: CountDisplayProps): ReactElement {
    return (
        <Tooltip label={label}>
            <Tag colorScheme="whiteAlpha" size="sm">
                {count}
            </Tag>
        </Tooltip>
    );
}
