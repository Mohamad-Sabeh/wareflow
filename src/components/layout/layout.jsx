import { useState } from 'react';
import SideBar from './sideBar';
import TopBar from './topBar';

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Dark and blurred background */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main application */}
      <div className="min-h-screen">

        <TopBar
          setSidebarOpen={setSidebarOpen}
        />

        <main className="min-h-[calc(100vh-5rem)] bg-slate-100 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;