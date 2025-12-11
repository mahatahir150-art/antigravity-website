import DashboardLayoutWrapper from '@/components/dashboard/DashboardLayoutWrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardLayoutWrapper>
            {children}
        </DashboardLayoutWrapper>
    );
}
