import StatsCard from './statsCard';

function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Products"
        value="1,248"
        description="Products in your warehouse"
        icon="▦"
      />

      <StatsCard
        title="Total Inventory"
        value="8,492"
        description="Items currently in stock"
        icon="◫"
      />

      <StatsCard
        title="Pending Orders"
        value="37"
        description="Orders waiting to be processed"
        icon="↗"
      />

      <StatsCard
        title="Low Stock"
        value="12"
        description="Products need attention"
        icon="!"
      />

    </div>
  );
}

export default StatsCards;