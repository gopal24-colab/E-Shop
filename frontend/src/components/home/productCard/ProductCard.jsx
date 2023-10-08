import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

/* eslint-disable react/prop-types */
const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const item_name = data.name;
  const product_name = item_name.replace(/\s+/g, "-");
  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300">
      <div className="flex justify-end"></div>
      <Link to={`/products/${product_name}`}>
        {data.image_Url && (
          <img
            src={`${data.image_Url[0]?.url}`}
            alt="products"
            className="w-full h-[170px] object-contain"
          />
        )}
      </Link>
      <Link to="/">
        {data.shop && (
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        )}
      </Link>

      <Link to={`/`}>
        <h4 className="pb-3 font-[500]">
          {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        </h4>
        <div className="flex">
          {/* <Ratings rating={data?.ratings} /> */}
          rating
        </div>

        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.originalPrice === 0
                ? data.originalPrice
                : data.discountPrice}
              $
            </h5>

            <h4 className={`${styles.price}`}>
              {data.originalPrice ? data.originalPrice + " $" : null}
            </h4>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} sold
            </span>
          </div>
        </div>
      </Link>

      {/* side option */}
      <div>
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            // onClick={() => removeFromWishlistHandler(data)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            // onClick={() => addToWishlistHandler(data)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => setOpen((prev) => !prev)}
          color="#333"
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          // onClick={() => addToCartHandler(data._id)}
          color="#444"
          title="Add to cart"
        />
        {/* {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null} */}
      </div>
    </div>
  );
};

export default ProductCard;