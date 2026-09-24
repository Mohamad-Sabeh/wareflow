function LowStock() {
    const products = [
        {
            id: 1,
            sku: 'WRL-001',
            stock: 3,
            status: 'Low Stock',
            name: 'Wireless Keyboard',
        },

            {
                name: 'USB-C Hub',
                sku: 'USB-042',
                stock: 5,
                status: 'Low Stock',
                id: 2,
            },
            
        {
            name: 'Mechanical Keyboard',
            sku: 'KEY-018',
            stock: 2,
            status: 'Critical',
            id: 3,
        },

        {
            name: 'Wireless Mouse',
            sku: 'MSE-031',
            stock: 7,
            status: 'Low Stock',
            id: 4,
        },
  ];

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-slate-200 p-6">

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Low Stock Products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Products that need attention.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
          View All
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="border-b border-slate-200 bg-slate-50">

            <tr>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Product
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                SKU
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Stock
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>

            </tr>

          </thead>

          <tbody className="divide-y divide-slate-200">

            {products.map((product) => (

              <tr
                key={product.id}
                className="transition hover:bg-slate-50"
              >

                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                  {product.name}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                  {product.sku}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                  {product.stock}
                </td>

                <td className="whitespace-nowrap px-6 py-4">

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      product.status === 'Critical'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {product.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default LowStock;
