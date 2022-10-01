import { ReactElement } from 'react';

interface NavLinkProps {
    text: string;
    onClick: () => void;
    styles?: string;
}

export default function NavLink({
    text,
    onClick,
    styles,
}: NavLinkProps): ReactElement {
    return (
        <div
            className={`md:mr-5 hover:text-gray-400 font-semibold cursor-pointer ${styles}`}
            onClick={onClick}
        >
            {text}
        </div>
    );
}
