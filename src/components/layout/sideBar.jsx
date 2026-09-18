function SideBar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen w-64 bg-slate-950 text-white shadow-2xl transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >

      {/* Logo */}
      <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">

        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Wareflow
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            Warehouse Management
          </p>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          className="text-slate-400 transition hover:text-white"
        >
          ✕
        </button>

      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">

        {/* Overview */}
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Overview
        </p>

        <div className="space-y-1">

          <button className="flex w-full items-center gap-3 rounded-lg bg-slate-800 px-3 py-2.5 text-sm font-medium text-white">
            <span>⌂</span>
            Dashboard
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>▦</span>
            Products
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>◫</span>
            Inventory
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>↗</span>
            Orders
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>□</span>
            Shipments
          </button>

        </div>

        {/* Management */}
        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Management
        </p>

        <div className="space-y-1">

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>♙</span>
            Suppliers
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>♧</span>
            Customers
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
            <span>▤</span>
            Reports
          </button>

        </div>

      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-0 w-full border-t border-slate-800 p-4">

        {/* Settings */}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white">
          <span>⚙</span>
          Settings
        </button>

        {/* User */}
        <div className="mt-4 flex items-center gap-3 rounded-lg bg-slate-900 p-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold">
            MS
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-medium text-white">
              Warehouse Admin
            </p>

            <p className="truncate text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default SideBar;