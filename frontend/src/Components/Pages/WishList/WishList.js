import React from "react";
import "./WishList.css";
import WishlistCard from "../../Cards/WishlistCard/WishlistCard";
import { Link } from "react-router-dom";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { useSelector } from "react-redux";
function WishList() {
  const { wishlist } = useSelector((state) => state.allCart);
  console.log(wishlist, "wishlist");
  return (
    <>
      <UpperNavBar />
      <MainNavBar />

      <div className="wishlist">
        <div className="wishlist_breadcrums">
          <Link to="/">Home</Link> / <p>Wishlist</p>
        </div>
        <div className="wishlist_card">
          {wishlist?.map((item) => (
            <WishlistCard item={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default WishList;
