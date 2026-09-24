function InventoryOverview() {
  const inventory = [
    {
      name: 'In Stock',
      value: 72,
      amount: '6,110 items',
      color: 'bg-green-500',
    },
    {
      name: 'Low Stock',
      value: 18,
      amount: '1,528 items',
      color: 'bg-yellow-500',
    },
    {
      name: 'Out of Stock',
      value: 10,
      amount: '854 items',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Inventory Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Current inventory status.
        </p>

      </div>

      <div className="p-6">

        <div className="mb-6 flex items-center justify-center">

          <div className="flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-green-500">

            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">
                72%
              </p>

              <p className="text-xs text-slate-500">
                In Stock
              </p>
            </div>

          </div>

        </div>

        <div className="space-y-5">

          {inventory.map((item) => (

            <div key={item.name}>

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <span
                    className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {item.name}
                  </span>

                </div>

                <span className="text-sm font-semibold text-slate-900">
                  {item.value}%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.value}%` }}
                />

              </div>

              <p className="mt-1 text-xs text-slate-500">
                {item.amount}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default InventoryOverview;