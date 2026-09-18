import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/layout/layout';

import Dashboard from './components/pages/dashboard';
import Products from './components/pages/products';
import Inventory from './components/pages/inventory';
import Orders from './components/pages/orders';
import Shipments from './components/pages/shipments';
import Suppliers from './components/pages/suppliers';
import Customers from './components/pages/customers';
import Reports from './components/pages/reports';
import Settings from './components/pages/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: 'products',
        element: <Products />,
      },

      {
        path: 'inventory',
        element: <Inventory />,
      },

      {
        path: 'orders',
        element: <Orders />,
      },

      {
        path: 'shipments',
        element: <Shipments />,
      },

      {
        path: 'suppliers',
        element: <Suppliers />,
      },

      {
        path: 'customers',
        element: <Customers />,
      },

      {
        path: 'reports',
        element: <Reports />,
      },

      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;