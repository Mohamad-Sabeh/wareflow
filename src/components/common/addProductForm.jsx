import { useState } from 'react';

function AddProductForm({ onClose }) {
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      productName,
      sku,
      category,
      price,
      stock,
    });

    onClose();
  }

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
            placeholder="Enter product name"
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
            placeholder="Example: REF-001"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
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
            
            <option value="">
              Select a category
            </option>

            <option value="Kitchen Equipment">
              Kitchen Equipment
            </option>

            <option value="Utensils">
              Utensils
            </option>

            <option value="Food">
              Food
            </option>

            <option value="Machines">
              Machines
            </option>

            <option value="Other">
              Other
            </option>

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
            placeholder="Enter price"
            min="0"
            step="0.01"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
            required
          />

        </div>


        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Initial Stock
          </label>

          <input
            type="number"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            placeholder="Enter stock quantity"
            min="0"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
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
          Add Product
        </button>

      </div>

    </form>
  );
}

export default AddProductForm;