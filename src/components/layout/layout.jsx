import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from './sideBar';
import TopBar from './topBar';

import Modal from '../common/modal';
import AddProductForm from '../common/addProductForm';
import EditProductForm from '../common/editProductForm';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);

  const [products, setProducts] = useState([
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
  ]);

  const [editProduct, setEditProduct] = useState(null);

  function openEditProduct(product) {
    setEditProduct(product);
  }

  function closeEditProduct() {
    setEditProduct(null);
  }

  function updateProduct(updatedProduct) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    closeEditProduct();
  }

  function deleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="min-h-screen">

        <TopBar
          setSidebarOpen={setSidebarOpen}
        />

        <main className="min-h-[calc(100vh-5rem)] bg-slate-100 p-6">

          <Outlet
            context={{
              openAddProduct: () => setAddProductOpen(true),
              products,
              setProducts,
              openEditProduct,
              deleteProduct,
            }}
          />

        </main>

      </div>

      {addProductOpen && (
        <Modal
          title="Add Product"
          onClose={() => setAddProductOpen(false)}
        >
          <AddProductForm
            onClose={() => setAddProductOpen(false)}
          />
        </Modal>
      )}

      {editProduct && (
        <Modal
          title="Edit Product"
          onClose={closeEditProduct}
        >
          <EditProductForm
            product={editProduct}
            onSave={updateProduct}
            onClose={closeEditProduct}
          />
        </Modal>
      )}

    </div>
  );
}

export default Layout;