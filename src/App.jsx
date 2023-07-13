import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./pages/productList";
import DetailProduct from "./pages/detailProduct";
import Layout from "./component/Layout";
import Checkout from "./pages/payment/Checkout";
import Instructions from "./pages/payment/Instructions";
import { Provider } from "react-redux";

import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "detail/:id",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "pembayaran",
    element: <Instructions />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
