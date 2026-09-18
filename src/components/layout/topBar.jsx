function TopBar({ setSidebarOpen }) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-6 text-white">

      {/* Left side */}
      <div className="flex items-center gap-4">

        {/* Menu button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          ☰
        </button>

        {/* Page information */}
        <div>
          <p className="text-sm text-slate-500">
            Overview
          </p>

          <h2 className="text-xl font-semibold">
            Dashboard
          </h2>
        </div>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:block">

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-600 focus:border-slate-600"
          />

        </div>

        {/* Notification */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:scale-110 hover:text-white"
        >
          🔔
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold">
            MS
          </div>

          <div className="hidden sm:block">

            <p className="text-sm font-medium">
              Mohamad
            </p>

            <p className="text-xs text-slate-500">
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default TopBar;