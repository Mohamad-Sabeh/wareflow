function RecentOrders() {
    
  const orders = [
    {
      id: '#ORD-001',
      customer: 'ABC Electronics',
      date: 'Sep 21, 2026',
      status: 'Processing',
      total: '$1,240',
    },
    {
      id: '#ORD-002',
      customer: 'Tech World',
      date: 'Sep 21, 2026',
      status: 'Shipped',
      total: '$860',
    },
    {
      id: '#ORD-003',
      customer: 'Smart Solutions',
      date: 'Sep 20, 2026',
      status: 'Pending',
      total: '$540',
    },
    {
      id: '#ORD-004',
      customer: 'Digital Store',
      date: 'Sep 20, 2026',
      status: 'Delivered',
      total: '$1,890',
    },
  ];

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}    
      <div className="flex items-center justify-between border-b border-slate-200 p-6">

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Orders
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest orders in your warehouse.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
          View All
        </button>

      </div>

      {/* Orders */}
      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="border-b border-slate-200 bg-slate-50">

            <tr>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Order
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Customer
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Date
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                Total
              </th>
            </tr>

          </thead>

          <tbody className="divide-y divide-slate-200">

            {orders.map((order) => (
              <tr
                key={order.id}
                className="transition hover:bg-slate-50"
              >

                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                  {order.id}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                  {order.customer}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                  {order.date}
                </td>

                <td className="whitespace-nowrap px-6 py-4">

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-700'
                        : order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-slate-900">
                  {order.total}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentOrders;