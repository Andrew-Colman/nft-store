import { ReactElement } from 'react';
import { Tooltip } from '@chakra-ui/react';

interface Props {
    price?: string;
    currency: string;
}

function getCurrencySymbol(currency: string) {
    if (currency === 'ethereum') return 'Ξ';
    if (currency === 'bitcoin') return '₿';
    return '$';
}

export default function CurrencyDisplay({
    price = '',
    currency,
}: Props): ReactElement {
    return (
        <span>
            {price}
            <Tooltip label={currency}>{getCurrencySymbol(currency)}</Tooltip>
        </span>
    );
}
