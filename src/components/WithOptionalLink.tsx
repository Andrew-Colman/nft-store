import { ReactElement, ReactNode } from 'react';

interface WithOptionalLinkProps {
    hasLink?: boolean;
    linkUrl?: string;
    callback?: () => void;
    children: ReactNode;
}

export default function WithOptionalLink({
    hasLink,
    linkUrl,
    callback,
    children,
}: WithOptionalLinkProps): ReactElement {
    return (
        <>
            {hasLink ? (
                <a href={linkUrl} target={'_blank'} onClick={callback}>
                    {children}
                </a>
            ) : (
                children
            )}
        </>
    );
}
