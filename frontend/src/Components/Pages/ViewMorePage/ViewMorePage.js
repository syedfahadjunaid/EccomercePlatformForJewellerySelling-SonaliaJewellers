import React, { useEffect } from "react";
import img from "../../Assests/Image/Group 36561.png";
import Filter from "../../Layout/Filter/Filter";
import img1 from "../../Assests/Image/image 51.png";
import img2 from "../../Assests/Image/image 52.png";
import img3 from "../../Assests/Image/image 53.png";
import img4 from "../../Assests/Image/image 54.png";
import img5 from "../../Assests/Image/Vector.png";
import img6 from "../../Assests/Image/Vector-1.png";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import GridView from "@mui/icons-material/GridView";
import GridOn from "@mui/icons-material/GridOn";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import Footer from "../../Layout/Footer/Footer";
import CustomPagination from "../../Layout/CustomPagination/CustomPagination";
import UpperNavBar from "../../Layout/UpperNavBar/UpperNavBar";
import MainNavBar from "../../Layout/MainNavBar/MainNavBar";
import { Add, KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function ViewMorePage() {
  const [mobilefilter, setMobilefilter] = useState(false);
  const [mobileSortBy, setMobileSortBy] = useState(false);
  const mobileFilterHandle = () => {
    setMobilefilter(!mobilefilter);
    setMobileSortBy(false);
  };
  const mobileSortByHandle = () => {
    setMobilefilter(false);
    setMobileSortBy(!mobileSortBy);
  };
  const { Id } = useParams();
  const [allProduct, setAllProduct] = useState();
  const { product } = useSelector((state) => state.product);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((product?.length / 9).toFixed(0));
  }, [product]);
  const getProductHandle = () => {
    if (Id === "dealsOfTheWeek") {
      const filter = product.filter((item) => item.dealsOfTheWeek === "true");
      setAllProduct(filter && filter.reverse());
    }
    if (Id === "newCollection") {
      const filter = product.filter((item) => item.newCollection === "true");
      setAllProduct(filter && filter.reverse());
    }
    if (Id === "featuredDeals") {
      const filter = product.filter((item) => item.featuredDeals === "true");
      setAllProduct(filter && filter.reverse());
    }
  };
  useEffect(() => {
    getProductHandle();
  }, [Id, product]);
  const [productRate, setProductRate] = useState("5000000");
  const [selectedKarat, setSelectedKarat] = useState("");
  const { price } = useSelector((state) => state.allPrice);
  const [goldPriceShow, setGoldPriceShow] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [filteredProduct, setFilteredProduct] = useState([]);
  const arr = [];
  const filterHandle = () => {
    if (selectedKarat === "") {
      const filter = allProduct?.filter((item) => {
        let goldPrice;
        console.log(item?.gold?.carat, "item?.gold?.carat");
        if (item?.gold?.carat === 24) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 100) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "goldPrice", "24");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }
        if (item?.gold?.carat === 22) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 93) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "22");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }
        if (item?.gold?.carat === 18) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 76) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "18");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }
        if (item?.gold?.carat === 14) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 59.2) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "14");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }

        const diamondPrice = item?.diamond?.price* item?.diamond?.carat;
        const silverPrice = price.slice(-1)[0]?.SliverPrice
          ? (price.slice(-1)[0]?.SliverPrice / 1000) * item?.Silver?.weight
          : "0";
        const productPrice = Number(diamondPrice) + Number(silverPrice);
        setItemPrice(productPrice && productPrice);
        console.log(
          goldPrice,
          "22 karat",
          goldPriceShow,
          "gold",
          diamondPrice,
          "diamond",
          silverPrice,
          "silver",
          productPrice,
          itemPrice
        );

        const total = Math.floor(
          Number(goldPrice ? goldPrice:0) +
            Number(itemPrice) +
            Number(item?.labourCharges)
        );
        console.log(total, "settotal", goldPriceShow,goldPrice,diamondPrice);
        const final = total <= Number(productRate);
        {
          final === true && final && arr.push(item);
        }
        {
          final === false && final && arr.push();
        }

        {
          arr && setFilteredProduct(arr);
        }

        console.log(total, "total", typeof Number(productRate), final);
        return final;
      });
      console.log(filter && filter);
    }
    if (selectedKarat !== "") {
      const selectedValue = allProduct?.filter(
        (item) => item?.gold?.carat === Number(selectedKarat?.slice(0, 2))
      );

      const filter = selectedValue?.filter((item) => {
        let goldPrice;
        console.log(item?.gold?.carat, "item?.gold?.carat");
        if (item?.gold?.carat === 24) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 100) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "goldPrice", "24");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }
        if (item?.gold?.carat === 22) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 93) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "22");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }
        if (item?.gold?.carat === 18) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 76) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "18");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }
        if (item?.gold?.carat === 14) {
          goldPrice =
            (((price.slice(-1)[0]?.GoldPrice / 100) * 59.2) / 10) *
            item?.gold?.weight;
          console.log(goldPrice, "14");
          setGoldPriceShow(goldPrice ? goldPrice : "0");
        }

        const diamondPrice = item?.diamond?.price* item?.diamond?.carat;
          
        const silverPrice = price.slice(-1)[0]?.SliverPrice
          ? (price.slice(-1)[0]?.SliverPrice / 1000) * item?.Silver?.weight
          : "0";
        const productPrice = Number(diamondPrice) + Number(silverPrice);
        setItemPrice(productPrice && productPrice);
        console.log(
          goldPrice,
          "22 karat 1",
          goldPriceShow,
          "gold",
          diamondPrice,
          "diamond",
          silverPrice,
          "silver",
          productPrice,
          itemPrice
        );

        const total = Math.floor(
          Number(goldPrice && goldPrice) +
            Number(itemPrice) +
            Number(item?.labourCharges)
        );
        console.log(total, "settotal", goldPriceShow);
        const final = total <= Number(productRate);
        {
          final === true && final && arr.push(item);
        }
        {
          final === false && final && arr.push();
        }

        {
          arr && setFilteredProduct(arr);
        }

        console.log(
          total,
          "total",
          "from karat",
          typeof Number(productRate),
          final
        );
        return final;
      });
      setFilteredProduct(filter && filter);
      console.log(filter && filter);
    }
  };
  useEffect(() => {
    filterHandle();
  }, [productRate, selectedKarat]);

  useEffect(() => {
    setFilteredProduct();
    setProductRate("5000000");
    setSelectedKarat("");
  }, [Id]);
  useEffect(() => {
    console.log(filteredProduct, "filteredProduct");
  }, [filteredProduct]);
  useEffect(() => {
    console.log(selectedKarat, "selectedKarat");
  }, [selectedKarat]);
  return (
    <>
      <UpperNavBar />
      <MainNavBar />

      <div className="productpage">
        <div className="productpage_breadcrums">
          {/* <Link to='/'>Home</Link> / <p> other-page</p> / <p> inside-page</p> */}
        </div>
        <div
          className="productpage_banner"
          style={{ backgroundImage: `url("${img}")` }}
        >
          <p>Free Shipping on over ₹ 5000</p>
          <p>For the Terms of the campaign, see the description page.</p>
        </div>
        <div className="productpage_main_section">
          <div className="productpage_main_section_left">
            <Filter
              setProductRate={setProductRate}
              productRate={productRate}
              setSelectedKarat={setSelectedKarat}
              selectedKarat={selectedKarat}
            />
          </div>
          <div className="productpage_main_section_right">
            <div className="productpage_main_section_right_top">
              <div className="productpage_main_section_right_top_left">
               
              </div>
             
            </div>
            <div className="productpage_main_section_right_bottom">
              <div className="productpage_main_section_right_bottom_mobile">
                <div onClick={mobileFilterHandle}>
                  <span>
                    <p>Filter</p> <Add style={{ fontSize: "16px" }} />
                  </span>
                </div>
               
              </div>
              {mobilefilter && (
                <span>
                  <Filter
                   setProductRate={setProductRate}
                   productRate={productRate}
                   setSelectedKarat={setSelectedKarat}
                   selectedKarat={selectedKarat}
                  />
                </span>
              )}
           
              {filteredProduct ? (
                <div className="productpage_main_section_right_bottom_cards">
                  {filteredProduct?.length > 0 ? (
                    filteredProduct?.filter((item)=> item?.published===true)?.map((item,index) => (
                      <ProductCard
                      key={index+1}
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
                    ))
                  ) : (
                    <div className="productpage_main_section_right_bottom_cards_no_data_found">
                      <h3>No Product Found After Filter</h3>
                    </div>
                  )}
                </div>
              ) : allProduct?.length > 0 ? (
                <div className="productpage_main_section_right_bottom_cards">
                  {allProduct
                   ?.filter((item)=> item?.published===true)
                    ?.slice((page - 1) * 10, (page - 1) * 10 + 10)
                    ?.map((item,index) => (
                      <ProductCard
                      key={index+1}
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
              ) : (
                <div className="productpage_main_section_right_bottom_cards_no_data_found">
                  <h3>No Product Found</h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pagination">
          <CustomPagination count={count} setPage={setPage} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ViewMorePage;
