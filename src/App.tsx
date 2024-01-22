import { Provider } from 'react-redux';
import Dashboard from './dashboard';
import Login from './login/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

let element = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  { path: "/", element: <Login /> },
]);

function App() {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={element} />
    </PersistGate>
  </Provider>

}

export default App;
