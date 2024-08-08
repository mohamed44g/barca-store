import {
  Route,
  //   Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Store from "../pages/Store";
import Cart from "../pages/Store/Cart";
import Player from "../pages/PlayerInfo";
import News from "../pages/News";
import AuthErrors from "../Errors/authErrors";
import Payment from "../pages/Payment";
import Logout from "../pages/Logout";
import ErrorPage from "../Errors/errors";
import ErrorBoundary from "../Errors/ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/player/:id" element={<Player />}></Route>
        <Route path="/news/:id" element={<News />}></Route>
        <Route path="/error" element={<AuthErrors />}></Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/logout" element={<Logout />} />
      </ErrorBoundary>
    </>
  )
);

export default router;
