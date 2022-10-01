import { ReactElement, LegacyRef, forwardRef, ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
}

const Section = forwardRef(
    (
        { children, className }: SectionProps,
        ref: LegacyRef<HTMLElement>
    ): ReactElement => {
        return (
            <section ref={ref} className={className}>
                {children}
            </section>
        );
    }
);

export default Section;
