import type { Metadata } from 'next';
import VoteClient from './VoteClient';

export const metadata: Metadata = {
    title: 'Vote | RearMC',
    description: 'Vote for RearMC to receive in-game rewards.',
};

export default function VotePage() {
    return <VoteClient />;
}
