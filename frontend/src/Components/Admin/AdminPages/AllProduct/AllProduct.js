import { Delete, Edit, List, Search } from "@mui/icons-material";
import "./AllProduct.css";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Fade,
  Modal,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import img from "../../Asset/Rectangle 110798.png";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import CustomPagination from "../../../Layout/CustomPagination/CustomPagination";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AllProduct() {
  const { React_App_Base_Url } = process.env;
  const editor = useRef();
  const [content, setContent] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(content);
  }, [content]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    height: "550px",
    overflowY: "scroll",
  };
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "transparent",
    border: "0px solid transparent",
    boxShadow: 0,
    p: 4,
    outline: "0",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    setProductImagePrev([]);
    setProductImagePrev1([]);
    setProductImages([]);
  };
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = useState(false);
  const handleClick3 = () => {
    setOpen3(true);
  };
  const handleClose3 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen3(false);
  };
  const [open4, setOpen4] = useState(false);
  const handleClick4 = () => {
    setOpen4(true);
  };
  const handleClose4 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen4(false);
  };
  const notify = () => toast.success("Submitted Successfull!");
  const notify1 = () => toast.warning("Something Went Wrong!");
  const [isLoading, setIsLoading] = useState();
  const [allBrands, setAllBrands] = useState();
  const [allCategory, setAllCategory] = useState();
  const [allSubCategory, setAllSubCategory] = useState();
  const [allProduct, setAllProduct] = useState();
  const [productId, setProductId] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productShortDescription, setProductShortDescription] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImages, setProductImages] = useState([]);
  const [productSubCategoryFilter, setproductSubCategoryFilter] = useState();
  const [productStock, setProductStock] = useState();
  const [productSku, setProductSku] = useState();
  const [featured, setFeatured] = useState();
  const [newCollection, setNewCollection] = useState();
  const [dealsOfWeek, setdealsOfWeek] = useState();
  const [product_Category, setProduct_Category] = useState();
  const [product_SubCategory, setProduct_SubCategory] = useState();
  const [product_Brand, setProduct_Brand] = useState();
  const [product_Tag, setProduct_Tag] = useState();
  const [productImagePrev, setProductImagePrev] = useState([]);
  const [productImagePrev1, setProductImagePrev1] = useState([]);
  const [goldWeight, setGoldWeight] = useState();
  const [goldKarat, setGoldKarat] = useState();
  const [silverWeight, setSilverWeight] = useState();
  const [diamondKarat, setDiamondKarat] = useState();
  const [gold, setGold] = useState();
  const [silver, setSilver] = useState();
  const [dimond, setDimond] = useState();
  const [laberCharge, setLaberCharge] = useState();
  const [diamondPerKaratPrice, setDiamondPerKaratPrice] = useState();

  const imageHandle = (e) => {
    setProductImages([...productImages, e.target.files[0]]);
    setProductImagePrev([
      ...productImagePrev,
      URL.createObjectURL(e.target.files[0]),
    ]);
  };
  const allBrandsHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllBrands"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllBrands(data && data);
  };
  const allCategoryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllCats"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllCategory(data && data);
  };
  const allSubCategoryHandle = async () => {
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getAllSubCategorys"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllSubCategory(data && data);
    console.log(data, "sub");
  };
  const filterSubCategoryHandle = () => {
    const filter = allSubCategory?.filter(
      (item) => item?.catId?.catTitle === product_Category
    );
    setproductSubCategoryFilter(filter && filter);
  };
  const allProductsHandle = async () => {
    // e.preventDefault();
    const { data } = await axios
      .get(`${process.env.React_App_Base_Url + "getProducts"}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setAllProduct(data && data);
    // console.log(data);
  };
  const addNewProductHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("productCategory", product_Category);
    // formData.append("productSubCategory", product_SubCategory);
    formData.append("productBrand", product_Brand);
    formData.append("productTags", product_Tag);
    formData.append("productShortDescription", productShortDescription);
    formData.append("productDescription", productDescription);
    formData.append("productSubCategory", product_SubCategory);
    formData.append("productStock", productStock);
    formData.append("productSkuCode", productSku);
    formData.append("featuredDeals", featured);
    formData.append("newCollection", newCollection);
    formData.append("dealsOfTheWeek", dealsOfWeek);
    formData.append("goldWeight", goldWeight);
    formData.append("goldCarat", goldKarat);
    formData.append("silverWeight", silverWeight);
    formData.append("diamondCarat", diamondKarat);
    formData.append("price", diamondPerKaratPrice);
    formData.append("labourCharges", laberCharge);
    // formData.append("productMainImage", productImages);
    productImages.forEach((img) => {
      formData.append("productMainImage", img);
    });
    const data = await axios
      .post(`${process.env.React_App_Base_Url + "addProduct"}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true), handleClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }

    allProductsHandle();
    setProductImagePrev([]);
    setProductImages([]);
    setGoldWeight();
    setGoldKarat();
    setSilver();
    setDimond();
    console.log(data?.status);
  };
  const editProducthandle = async (id) => {
    handleOpen1();
    const { data } = await axios
      .get(`${React_App_Base_Url + "getOneProduct/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    setProductTitle(data?.product.productTitle && data?.product.productTitle);
    // setProductImagePrev(data?.product.productTitle && data?.product.productMainImage);
    setProductShortDescription(
      data?.product.productShortDescription &&
        data?.product.productShortDescription
    );
    setProductDescription(
      data?.product.productDescription && data?.product.productDescription
    );
    setProductSku(data?.product.productSkuCode && data?.product.productSkuCode);
    setProductStock(data?.product.productStock && data?.product.productStock);
    setProductId(data?.product.productId && data?.product.productId);
    setProduct_Brand(data?.product.productId && data?.product.productBrand);
    setProduct_Category(
      data?.product.productId && data?.product.productCategory
    );
    setProduct_SubCategory(
      data?.product.productId && data?.product.productSubCategory
    );
    setGoldKarat(data?.product.productId && data?.product?.gold?.carat);
    setGoldWeight(data?.product.productId && data?.product?.gold.weight);
    setSilverWeight(data?.product.productId && data?.product?.Silver.weight);
    setDiamondKarat(data?.product.productId && data?.product?.diamond.carat);
    setDiamondPerKaratPrice(
      data?.product.productId && data?.product?.diamond.price
    );
    setLaberCharge(data?.product.productId && data?.product?.labourCharges);
    setFeatured(
      data?.product.productId && Boolean(data?.product?.featuredDeals)
    );
    setNewCollection(
      data?.product.productId && Boolean(data?.product?.newCollection)
    );
    setdealsOfWeek(
      data?.product.productId && Boolean(data?.product?.dealsOfTheWeek)
    );
    setProductImagePrev1(
      data?.product.productId && data?.product?.productMainImage
    );

    console.log(data.product, "product");
  };
  const updateProductHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("productCategory", product_Category);
    formData.append("productBrand", product_Brand);
    formData.append("productTags", product_Tag);
    formData.append("productShortDescription", productShortDescription);
    formData.append("productDescription", productDescription);
    formData.append("productSubCategory", product_SubCategory);
    formData.append("productStock", productStock);
    formData.append("productSkuCode", productSku);
    formData.append("featuredDeals", featured);
    formData.append("newCollection", newCollection);
    formData.append("dealsOfTheWeek", dealsOfWeek);
    formData.append("goldWeight", goldWeight);
    formData.append("goldCarat", goldKarat);
    formData.append("silverWeight", silverWeight);
    formData.append("diamondCarat", diamondKarat);
    formData.append("labourCharges", laberCharge);
    formData.append("price", diamondPerKaratPrice);
    productImages.forEach((img) => {
      formData.append("productMainImage", img);
    });
    const data = await axios
      .put(`${React_App_Base_Url + "updateProducts/" + productId}`, formData, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    allProductsHandle();
    handleClose1();
    setProductImagePrev([]);
    setProductImages([]);
    setGoldWeight();
    setGoldKarat();
    setSilver();
    setDimond();
    console.log(data, "updated");
  };
  const delterProductHandle = async (id) => {
    const data = await axios
      .delete(`${process.env.React_App_Base_Url + "deleteProduct/" + id}`, {
        headers: { "Content-type": "multipart/form-date" },
      })
      .then((response) => response, setIsLoading(true))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    if (data) {
      notify();
    }
    if (!data) {
      notify1();
    }
    allProductsHandle();
    handleClose2();
    console.log(data);
    // setTotalBlog(data && data);
  };
  const productPublishHandle = async (id) => {
    const data = await axios.post(
      process.env.React_App_Base_Url + "publishProduct/" + id
    );
    if (data) {
      allProductsHandle();
    }
    if (!data) {
      notify1();
    }
    console.log(data);
  };

  useEffect(() => {
    allBrandsHandle();
    allCategoryHandle();
    allSubCategoryHandle();
    allProductsHandle();
    console.log(React_App_Base_Url);
  }, []);
  useEffect(() => {
    filterSubCategoryHandle();
  }, [product_SubCategory, product_Category]);
  useEffect(() => {
    console.log(featured);
  }, [featured]);
  useEffect(() => {
    setCount(Math.ceil(allProduct?.length / 10).toFixed(0));
    console.log(Math.ceil(allProduct?.length / 10).toFixed(0), "number");
  }, [allProduct]);
  return (
    <div className="adminorderpage">
      <div className="adminorderpage_heading">
        <List className="adminsidebar_icon" style={{ fontSize: "35px" }} />
        <p>All Products </p>
      </div>
      <div className="adminorderpage_table">
        <div
          className="adminorderpage_table_head allbrand_table_head"
          style={{ justifyContent: "flex-end" }}
        >
          {/* <span>
            <p>#ID</p>
            <input type="text" placeholder="Search by Id" />
            <Search />
          </span> */}
          <button className="addbutton" onClick={handleOpen}>
            Add Product
          </button>
        </div>
        <div className="adminorderpage_table_table">
          <table>
            <thead>
              <tr>
                <th>S/L</th>
                <th style={{ width: "250px" }}>IMG</th>
                <th>Product Name</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allProduct
                ?.slice((page - 1) * 10, (page - 1) * 10 + 10)
                ?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ width: "250px" }}>
                      <img
                        src={`${
                          process.env.React_App_Base_Image_Url +
                          item?.productMainImage[0]
                        }`}
                        alt="brand"
                        style={{ width1: "100px", height: "50px" }}
                      />
                    </td>
                    <td>{item?.productTitle}</td>
                    <td>
                      <label class="switch">
                        <input
                          type="checkbox"
                          onClick={() => productPublishHandle(item?.productId)}
                          checked={item?.published === true ? true : false}
                        />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <Edit
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => editProducthandle(item?.productId)}
                      />
                      <Delete
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleClickOpen(setProductId(item?.productId))
                        }
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="adminorderpage_pagination">
        <CustomPagination count={count} setPage={setPage} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          overflow: "scroll",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Product Info
            </Typography>
            <form className="modal_form" onSubmit={addNewProductHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Product Name"
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </span>

              <p className="modal_form_para">Brand</p>
              <span>
                <select
                  name="brand"
                  onChange={(e) => setProduct_Brand(e.target.value)}
                  required
                >
                  <option>Select One Brand</option>,
                  {allBrands?.map((item) => (
                    <option value={item?.brandTitle}>{item?.brandTitle}</option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Category</p>
              <span>
                <select
                  name="category"
                  onChange={(e) => setProduct_Category(e.target.value)}
                >
                  <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option value={item?.catTitle}>{item?.catTitle}</option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Sub Category</p>
              <span>
                <select
                  onChange={(e) => setProduct_SubCategory(e.target.value)}
                >
                  <option>Select One SubCategory</option>,
                  {productSubCategoryFilter?.map((item, index) => (
                    <option key={index} value={item?.subCategoryTitle}>
                      {item?.subCategoryTitle}
                    </option>
                  ))}
                </select>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Tags"
                  onChange={(e) => setProduct_Tag(e.target.value)}
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Short Description
              </Typography>
              <span>
                <input
                  type="text"
                  placeholder=" Short Description"
                  onChange={(e) => setProductShortDescription(e.target.value)}
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                onChange={(newContent) => {
                  setProductDescription(newContent);
                }}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={imageHandle}
                accept="image/*"
                multiple
                required
              />
              <span className="preview">
                {productImagePrev?.map((item) => (
                  <img src={item} alt="preview" />
                ))}
              </span>
              <div className="modal_form_product_details">
                <div className="modal_form_product_details_heading">
                  <p>Weight,Karat,Sku & Stock</p>
                </div>
                <div className="modal_form_product_details_details">
                  <span>
                    <p> Gold Weight</p>
                    <input
                      type="text"
                      placeholder="Weight in Gram"
                      required
                      onChange={(e) => setGoldWeight(e.target.value)}
                    />
                  </span>

                  <span>
                    <p>Gold Karat</p>
                    <input
                      type="text"
                      placeholder="Karat"
                      required
                      onChange={(e) => setGoldKarat(e.target.value)}
                    />
                  </span>

                  <span>
                    <p>Silver Weight</p>
                    <input
                      type="text"
                      placeholder="Weight in Gram"
                      required
                      onChange={(e) => setSilverWeight(e.target.value)}
                    />
                  </span>

                  <span>
                    <p>Diamond Karat</p>
                    <input
                      type="text"
                      placeholder="Karat"
                      required
                      onChange={(e) => setDiamondKarat(e.target.value)}
                    />
                  </span>
                  <span>
                    <p>Diamond Per Karat Price</p>
                    <input
                      type="text"
                      placeholder="Karat"
                      required
                      onChange={(e) => setDiamondPerKaratPrice(e.target.value)}
                    />
                  </span>
                  <span>
                    <p>Laber Charge</p>
                    <input
                      type="text"
                      placeholder="Laber Charge"
                      required
                      onChange={(e) => setLaberCharge(e.target.value)}
                    />
                  </span>

                  <span>
                    <p>Stock</p>
                    <input
                      type="text"
                      placeholder="Stock"
                      onChange={(e) => setProductStock(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Sku Code</p>
                    <input
                      type="text"
                      placeholder="Sku Code"
                      onChange={(e) => setProductSku(e.target.value)}
                      required
                    />
                  </span>
                </div>
              </div>
              <div className="modal_form_product_category">
                <span>
                  <input
                    type="checkbox"
                    onChange={(e) => setFeatured(e.target.checked)}
                  />
                  <p>Featured Deals</p>
                </span>
                <span>
                  <input
                    type="checkbox"
                    onChange={(e) => setNewCollection(e.target.checked)}
                  />
                  <p>NEW COLLECTION</p>
                </span>
                <span>
                  <input
                    type="checkbox"
                    onChange={(e) => setdealsOfWeek(e.target.checked)}
                  />
                  <p>Deals of the Week</p>
                </span>
              </div>
              <button className="modal_form_buttom">Add Product</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Product Info
            </Typography>
            <form className="modal_form" onSubmit={updateProductHandle}>
              <span>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </span>
              <p className="modal_form_para">Brand</p>
              <span>
                <select
                  name="brand"
                  value={product_Brand}
                  onChange={(e) => setProduct_Brand(e.target.value)}
                  required
                >
                  <option>Select One Brand</option>,
                  {allBrands?.map((item) => (
                    <option value={item?.brandTitle}>{item?.brandTitle}</option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Category</p>
              <span>
                <select
                  name="category"
                  value={product_Category}
                  onChange={(e) => setProduct_Category(e.target.value)}
                >
                  <option>Select One Category</option>,
                  {allCategory?.map((item) => (
                    <option value={item?.catTitle}>{item?.catTitle}</option>
                  ))}
                </select>
              </span>
              <p className="modal_form_para">Sub Category</p>
              <span>
                <select
                  value={product_SubCategory}
                  onChange={(e) => setProduct_SubCategory(e.target.value)}
                >
                  <option>Select Sub Category</option>
                  {productSubCategoryFilter?.map((item, index) => (
                    <option key={index} value={item?.subCategoryTitle}>
                      {item?.subCategoryTitle}
                    </option>
                  ))}
                </select>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="Tags"
                  value={product_Tag}
                  onChange={(e) => setProduct_Tag(e.target.value)}
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Short Description
              </Typography>
              <span>
                <input
                  type="text"
                  placeholder=" Short Description"
                  value={productShortDescription}
                  onChange={(e) => setProductShortDescription(e.target.value)}
                />
              </span>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Description
              </Typography>
              <JoditEditor
                style={{ width: "100%" }}
                ref={editor}
                value={productDescription}
                onChange={(newContent) => {
                  setProductDescription(newContent);
                }}
              />

              <span></span>
              <p className="modal_form_para">Images</p>

              <input
                type="file"
                onChange={imageHandle}
                accept="image/*"
                multiple
              />
              <span className="preview">
                {productImages?.length === 0
                  ? productImagePrev1?.map((item) => (
                      <img
                        src={process.env.React_App_Base_Image_Url + item}
                        alt="preview"
                      />
                    ))
                  : productImages?.map((item) => (
                      <img src={URL.createObjectURL(item)} alt="preview" />
                    ))}
                {/* {productImagePrev1?.map((item) => (
                  <img
                    src={process.env.React_App_Base_Image_Url + item}
                    alt="preview"
                  />
                ))} */}
              </span>
              <div className="modal_form_product_details">
                <div className="modal_form_product_details_heading">
                  <p>Weight,Karat, Sku & Stock</p>
                </div>
                <div className="modal_form_product_details_details">
                  <span>
                    <p>Gold Weight</p>
                    <input
                      type="text"
                      placeholder="Weight in Gram"
                      value={goldWeight}
                      onChange={(e) => setGoldWeight(e.target.value)}
                      required
                    />
                  </span>

                  <span>
                    <p>Gold Karat</p>
                    <input
                      type="text"
                      placeholder="Karat"
                      value={goldKarat}
                      onChange={(e) => setGoldKarat(e.target.value)}
                      required
                    />
                  </span>

                  <span>
                    <p>Silver Weight</p>
                    <input
                      type="text"
                      placeholder="Weight in Gram"
                      value={silverWeight}
                      onChange={(e) => setSilverWeight(e.target.value)}
                      required
                    />
                  </span>

                  <span>
                    <p>Diamond Karat</p>
                    <input
                      type="text"
                      placeholder="Karat"
                      value={diamondKarat}
                      onChange={(e) => setDiamondKarat(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Diamond Per Karat Price</p>
                    <input
                      type="text"
                      placeholder="Karat"
                      value={diamondPerKaratPrice}
                      required
                      onChange={(e) => setDiamondPerKaratPrice(e.target.value)}
                    />
                  </span>
                  <span>
                    <p>Laber Charge</p>
                    <input
                      type="text"
                      placeholder="Laber Charge"
                      value={laberCharge}
                      required
                      onChange={(e) => setLaberCharge(e.target.value)}
                    />
                  </span>
                  <span>
                    <p>Stock</p>
                    <input
                      type="text"
                      placeholder="Stock"
                      value={productStock}
                      onChange={(e) => setProductStock(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <p>Sku Code</p>
                    <input
                      type="text"
                      placeholder="Sku Code"
                      value={productSku}
                      onChange={(e) => setProductSku(e.target.value)}
                      required
                    />
                  </span>
                </div>
              </div>
              <div className="modal_form_product_category">
                <span>
                  <input
                    type="checkbox"
                    onChange={(e) => setFeatured(e.target.checked)}
                    checked={featured === true ? true : false}
                  />
                  <p>Featured Deals</p>
                </span>
                <span>
                  <input
                    type="checkbox"
                    checked={newCollection === true ? true : false}
                    onChange={(e) => setNewCollection(e.target.checked)}
                  />
                  <p>NEW COLLECTION</p>
                </span>
                <span>
                  <input
                    type="checkbox"
                    checked={dealsOfWeek === true ? true : false}
                    onChange={(e) => setdealsOfWeek(e.target.checked)}
                  />
                  <p>Deals of the Week</p>
                </span>
              </div>
              <button className="modal_form_buttom">Update Product</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are You Sure?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={() => delterProductHandle(productId)}>Agree</Button>
        </DialogActions>
      </Dialog>
      {isLoading && (
        <Box sx={style1}>
          <CircularProgress />
        </Box>
      )}
      <Snackbar
        open={open3}
        autoHideDuration={4000}
        onClose={handleClose3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ zIndex: "1111" }}
      >
        <Alert
          onClose={handleClose3}
          severity="success"
          sx={{ width: "100%", zIndex: "1111" }}
        >
          Added Successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={open4}
        autoHideDuration={4000}
        onClose={handleClose4}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose4} severity="error" sx={{ width: "100%" }}>
          Something Went Wrong!
        </Alert>
      </Snackbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default AllProduct;
