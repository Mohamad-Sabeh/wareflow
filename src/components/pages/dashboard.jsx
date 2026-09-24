import { useOutletContext } from 'react-router-dom';

import StatsCards from '../dashboard/statsCards';
import RecentOrders from '../dashboard/recentOrders';
import LowStock from '../dashboard/lowStock';
import InventoryOverview from '../dashboard/inventoryOverview';
import QuickActions from '../dashboard/quickActions';

function Dashboard() {
  const { openAddProduct } = useOutletContext();

  return (
    <div>

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Overview of your warehouse.
        </p>

      </div>


      <div className="mt-6">
        <StatsCards />
      </div>


      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentOrders />
        </div>

        <div className="xl:col-span-1">
          <InventoryOverview />
        </div>

      </div>


      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">

        <LowStock />

        <QuickActions
          onAddProduct={openAddProduct}
        />

      </div>

    </div>
  );
}

export default Dashboard;