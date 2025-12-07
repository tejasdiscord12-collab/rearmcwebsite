import type { Metadata } from 'next';
import StaffClient from './StaffClient';

export const metadata: Metadata = {
    title: 'Staff | RearMC',
    description: 'Meet the team behind RearMC.',
};

export default function StaffPage() {
    return <StaffClient />;
}
