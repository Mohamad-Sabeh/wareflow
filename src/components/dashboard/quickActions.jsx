import { Link } from 'react-router-dom';

function QuickActions() {
  const actions = [
    {
      title: 'Add Product',
      description: 'Add a new product to inventory',
      icon: '+',
      path: '/products',
    },
    {
      title: 'Create Order',
      description: 'Create a new customer order',
      icon: '↗',
      path: '/orders',
    },
    {
      title: 'Add Supplier',
      description: 'Register a new supplier',
      icon: '♙',
      path: '/suppliers',
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Common warehouse tasks.
        </p>

      </div>

      <div className="space-y-3 p-6">

        {actions.map((action) => (

          <Link
            key={action.title}
            to={action.path}
            className="flex w-full items-center gap-4 rounded-lg border border-slate-200 p-4 text-left transition hover:border-slate-300 hover:bg-slate-50"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-lg font-semibold text-white">
              {action.icon}
            </div>

            <div className="min-w-0">

              <p className="text-sm font-semibold text-slate-900">
                {action.title}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {action.description}
              </p>

            </div>

            <span className="ml-auto text-slate-400">
              →
            </span>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;