import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Products() {
  const { openAddProduct } = useOutletContext();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('All Status');

  const products = [
    {
      id: 1,
      name: 'Industrial Refrigerator',
      sku: 'REF-001',
      category: 'Kitchen Equipment',
      price: '$1,200',
      stock: 8,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Commercial Microwave',
      sku: 'MIC-002',
      category: 'Kitchen Equipment',
      price: '$450',
      stock: 4,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Stainless Steel Spoon',
      sku: 'SPO-003',
      category: 'Utensils',
      price: '$3',
      stock: 120,
      status: 'In Stock',
    },
    {
      id: 4,
      name: 'Food Processor',
      sku: 'FPR-004',
      category: 'Kitchen Equipment',
      price: '$280',
      stock: 0,
      status: 'Out of Stock',
    },
    {
      id: 5,
      name: 'Commercial Blender',
      sku: 'BLD-005',
      category: 'Kitchen Equipment',
      price: '$350',
      stock: 12,
      status: 'In Stock',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === 'All Categories' ||
      product.category === category;

    const matchesStatus =
      status === 'All Status' ||
      product.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Products
          </h1>

          <p className="mt-2 text-slate-500">
            Manage the products in your warehouse.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddProduct}
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          + Add Product
        </button>

      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 md:flex-row">

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
          >
            <option>All Categories</option>
            <option>Kitchen Equipment</option>
            <option>Utensils</option>
            <option>Food</option>
            <option>Machines</option>
            <option>Other</option>
          </select>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
          >
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

        </div>

      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

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
                  Category
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Price
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

              {filteredProducts.map((product) => (

                <tr
                  key={product.id}
                  className="transition hover:bg-slate-50"
                >

                  <td className="whitespace-nowrap px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">
                      {product.name}
                    </p>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                    {product.sku}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {product.category}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                    {product.price}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                    {product.stock}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        product.status === 'In Stock'
                          ? 'bg-green-100 text-green-700'
                          : product.status === 'Low Stock'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
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

    </div>
  );
}

export default Products;