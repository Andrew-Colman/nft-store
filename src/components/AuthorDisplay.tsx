import { ReactElement } from 'react';
import { Avatar, Tag, TagLabel } from '@chakra-ui/react';

interface AuthorDisplayProps {
    author: {
        id?: string;
        img: string;
        name: string;
    };
}

export default function AuthorDisplay({
    author,
}: AuthorDisplayProps): ReactElement {
    return (
        <Tag size="lg" colorScheme="blackAlpha" borderRadius="sm" p="2">
            <Avatar src={author?.img} name={author?.name} size={'sm'} />

            <TagLabel ml="4" color="gray.400">
                {author?.name}
            </TagLabel>
        </Tag>
    );
}
