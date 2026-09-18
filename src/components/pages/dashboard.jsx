import StatsCards from '../dashboard/statsCards';

function Dashboard() {
  return (
    <div>

      {/* Dashboard heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Overview of your warehouse.
        </p>
      </div>

      {/* Statistics */}
      <div className="mt-6">
        <StatsCards />
      </div>

    </div>
  );
}

export default Dashboard;