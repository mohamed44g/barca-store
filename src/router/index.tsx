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

        <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}></Route>
        <Route path="/register" element={<Register />} errorElement={<ErrorPage />}></Route>
        <Route path="/login" element={<Login />} errorElement={<ErrorPage />}></Route>
        <Route path="/store" element={<Store />} errorElement={<ErrorPage />}></Route>
        <Route path="/cart" element={<Cart />} errorElement={<ErrorPage />}/>
        <Route path="/player/:id" element={<Player />} errorElement={<ErrorPage />}></Route>
        <Route path="/news/:id" element={<News />} errorElement={<ErrorPage />}></Route>
        <Route path="/error" element={<AuthErrors />} errorElement={<ErrorPage />}></Route>
        <Route path="/payment" element={<Payment />} errorElement={<ErrorPage />}/>
        <Route path="/logout" element={<Logout />}errorElement={<ErrorPage />} />
    </>
  )
);

export default router;
