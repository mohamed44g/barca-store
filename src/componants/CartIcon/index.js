import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./style.scss";
export default function index({ number }) {
    return (_jsxs("div", { className: "Store-icon d-flex flex-column align-items-center", children: [_jsx("div", { className: "cart-amount align-self-end", children: _jsx("p", { children: number }) }), _jsx(NavLink, { to: "/cart", children: _jsx(FaCartShopping, { color: "#fff", size: 25 }) })] }));
}
