import { useState } from 'react';

function EditProductForm({ product, onSave, onClose }) {
  const [productName, setProductName] = useState(product.name);
  const [sku, setSku] = useState(product.sku);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price.replace('$', ''));
  const [stock, setStock] = useState(product.stock);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      ...product,
      name: productName,
      sku,
      category,
      price: `$${price}`,
      stock: Number(stock),
      status:
        Number(stock) === 0
          ? 'Out of Stock'
          : Number(stock) <= 5
          ? 'Low Stock'
          : 'In Stock',
    };

    onSave(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="space-y-5 p-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Product Name
          </label>

          <input
            type="text"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            SKU
          </label>

          <input
            type="text"
            value={sku}
            onChange={(event) => setSku(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
            required
          >
            <option value="">Select a category</option>
            <option value="Kitchen Equipment">Kitchen Equipment</option>
            <option value="Utensils">Utensils</option>
            <option value="Food">Food</option>
            <option value="Machines">Machines</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            min="0"
            step="0.01"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Stock
          </label>

          <input
            type="number"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            min="0"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-400"
            required
          />
        </div>

      </div>

      <div className="flex justify-end gap-3 border-t border-slate-200 p-6">

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Save Changes
        </button>

      </div>

    </form>
  );
}

export default EditProductForm;