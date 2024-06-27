import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function NewCollection() {
  const [newCollection, setNewCollection] = useState();
  const { product } = useSelector((state) => state.product);
  const getProductHandle = () => {
    const newCollectionProduct = product.filter(
      (item) => item.newCollection === "true"
    );
    setNewCollection(newCollectionProduct && newCollectionProduct.reverse());
  };

  useEffect(() => {
    getProductHandle();
  }, [product]);
  return (
    <div className="newcollection">
      <div className="newcollection_heading">
        <h3>NEW COLLECTION</h3>
      </div>
      <div className="featuredDeals_viewmore">
        <Link to="/viewmore/newCollection">View More</Link>
      </div>
      <div className="newcollection_card">
        {newCollection
          ?.filter((item) => item?.published === true)
          ?.slice(0, 8)
          ?.map((item) => (
            <ProductCard
              productTitle={item?.productTitle}
              productPrice={item?.productPrice}
              productImage={item?.productMainImage[0]}
              productId={item?.productId}
              productCategory={item?.productCategory}
              silver={item?.Silver}
              gold={item?.gold}
              diamond={item?.diamond}
              labourCharges={item?.labourCharges}
            />
          ))}
      </div>
      {/* <div className="newcollection_view_more">View More</div> */}
    </div>
  );
}

export default NewCollection;
