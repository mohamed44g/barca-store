import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./style.scss";
import Title from "../../../componants/Title";
import { lazy } from "react";
import { Getdata } from "../../../apis/getData";
import Loader from "../../../componants/Loader";
const NewsCard = lazy(() => import("../../../componants/NewsCard"));
export default function index() {
    const { data, isLoading } = Getdata("/users/news", "newsdata");
    if (isLoading)
        return _jsx(Loader, {});
    return (_jsx("div", { className: "News", children: _jsxs("div", { className: "container", children: [_jsx(Title, { title: "Barcalona History" }), _jsx("div", { className: "News-cards d-flex justify-content-center flex-wrap gap-5", children: data.data &&
                        data?.data.map((item) => {
                            return (_jsx(NewsCard, { img: item.img, title: item.name, cardId: item._id }, item._id));
                        }) })] }) }));
}
