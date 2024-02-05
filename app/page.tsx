'use client';

import { useOrganization } from '@clerk/nextjs';

import { EmptyOrg } from '@/app/_components/empty-org';
import { BoardList } from '@/app/_components/board-list';
import { DashboardLayout } from '@/app/_components/dashboard-layout';

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <DashboardLayout>
      <div className="flex-1 h-[calc(100%-80px)] p-6">
        {!organization ? (
          <EmptyOrg />
        ) : (
          <BoardList orgId={organization.id} query={searchParams} />
        )}
      </div>
    </DashboardLayout>
  );
}
