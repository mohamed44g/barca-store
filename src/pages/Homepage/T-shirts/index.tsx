import "./style.scss";
import StoreCard from "../../../componants/StoreCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from "../../../componants/Title";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { getProducts } from "../../../apis/getProducts";
import Loader from "../../../componants/Loader";

export default function Index() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, Products } = useSelector((state) => state?.Products);
  useEffect(() => {
    dispatch(getProducts({ url: "users/products?limit=4" }));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="store">
      {/* <h2 className="store-title text-center fs-2 fw-bold pt-3 mt-5">Store</h2> */}
      <Title title="Store" />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="item-card"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
      >
        {Products &&
          Products.map((item) => {
            return (
              <StoreCard
                key={item._id}
                id={item._id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            );
          })}
      </Carousel>
    </div>
  );
}
