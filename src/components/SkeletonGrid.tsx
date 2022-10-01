import { Flex, Skeleton } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface SkeletonGridProps {
    count: number;
    isLoading: boolean;
    width: string | string[];
    height: string | string[];
    gap: string | string[];
    className?: string;
}

export default function SkeletonGrid({
    count,
    isLoading,
    width,
    height,
    gap,
    className,
}: SkeletonGridProps): ReactElement {
    return (
        <Flex
            className={className}
            gridGap={gap}
            flexWrap={'wrap'}
            justify={'center'}
        >
            {Array.from(Array(count), (_, i) => i + 1).map(item => (
                <Skeleton
                    key={item}
                    isLoaded={!isLoading}
                    width={width}
                    height={height}
                />
            ))}
        </Flex>
    );
}
