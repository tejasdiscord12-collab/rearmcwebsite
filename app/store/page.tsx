import type { Metadata } from 'next';
import StoreClient from './StoreClient';

export const metadata: Metadata = {
    title: 'Store | RearMC',
    description: 'Support the server by purchasing ranks and crates.',
};

export default function StorePage() {
    return <StoreClient />;
}
