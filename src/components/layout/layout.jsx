import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from './sideBar';
import TopBar from './topBar';

import Modal from '../common/modal';
import AddProductForm from '../common/addProductForm';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);

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

    </div>
  );
}

export default Layout;