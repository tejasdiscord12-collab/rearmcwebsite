import type { Metadata } from 'next';
import RulesClient from './RulesClient';

export const metadata: Metadata = {
    title: 'Rules | RearMC',
    description: 'Server rules for RearMC.',
};

export default function RulesPage() {
    return <RulesClient />;
}
