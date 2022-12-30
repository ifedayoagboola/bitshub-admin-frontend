import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./new.css";
import { productDetails, updateProduct } from "../../redux/slices/productSlice";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { signin } from "../../redux/slices/userSlice";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [availability, setAvailability] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [brief, setBrief] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [config, setConfig] = useState("");
  const [quantityInStock, setQuantityInStock] = useState("");

  const [file, setFile] = useState("");

  const details = useSelector((state) => state?.singleProduct);
  const { loading, error, product } = details;

  const update = useSelector((state) => state?.productUpdate);
  const {} = update;

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id,
        name,
        availability,
        brand,
        category,
        sku,
        price,
        brief,
        size,
        color,
        description,
        config,
        quantityInStock,
      })
    );
  };
  const email = "admin@email.com";
  const password = "1234";

  useEffect(() => {
    dispatch(signin({ email, password }));
    if (product && product?.product?._id === id) {
      setName(product?.product?.name);
      setAvailability(product?.product?.availability);
      setBrand(product?.product?.brand);
      setCategory(product?.product?.category);
      setSku(product?.product?.model);
      setPrice(product?.product?.price);
      setBrief(product?.product?.brief);
      setSize(product?.product?.size);
      setColor(product?.product?.color);
      setDescription(product?.product?.desc);
      setConfig(product?.product?.config);
      setQuantityInStock(product?.product?.quantityInStock);
    } else if (id && product?.product?._id !== id) {
      dispatch(productDetails(id));
    } else {
      return;
    }
  }, [dispatch, id, product]);

  return (
    <div className="">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">
            <span className="text-xl">
              {!id ? "Add New Product" : "Edit Product: "}
            </span>
            <span className="text-base">{product?.product?._id}</span>
          </p>
          <p
            onClick={() => {
              navigate("/products/new");
            }}
            className="border border-green-700 rounded-md text-green-700 p-2 cursor-pointer"
          >
            New Product
          </p>
        </div>

        <div className="">
          {/* <div className="">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="mt-8">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              <form onSubmit={submitHandler}>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="text-gray-600 block">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      value=""
                      onChange={(e) => setFile(e.target.files[0])}
                      // style={{ display: "none" }}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="name" className="text-gray-600 mb-2 block">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter product name"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="availability"
                      className="text-gray-600 mb-2 block"
                    >
                      Availability <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      placeholder="Enter product Availability"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="brand" className="text-gray-600 mb-2 block">
                      Brand <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Enter brand name"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Enter Category"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="sku" className="text-gray-600 mb-2 block">
                      SKU <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="sku"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                      placeholder="Stock keeping Unit(Model number)"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="price" className="text-gray-600 mb-2 block">
                      Price <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter price"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="brief" className="text-gray-600 mb-2 block">
                      brief <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      type="text"
                      id="brief"
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Slug (Brief description)"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="w-full">
                    <label htmlFor="size" className="text-gray-600 mb-2 block">
                      Size <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      placeholder="Enter size"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="color" className="text-gray-600 mb-2 block">
                      Colour <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      placeholder="Enter colour"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="description"
                      className="text-gray-600 mb-2 block"
                    >
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      type="text"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter Description"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="config"
                      className="text-gray-600 mb-2 block"
                    >
                      Config <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      type="text"
                      id="config"
                      value={config}
                      onChange={(e) => setConfig(e.target.value)}
                      placeholder="Enter Configuration"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-4 mb-4">
                  <div className="w-full">
                    <label
                      htmlFor="quantityInStock"
                      className="text-gray-600 mb-2 block"
                    >
                      Quantity in Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="quantityInStock"
                      value={quantityInStock}
                      onChange={(e) => setQuantityInStock(e.target.value)}
                      placeholder="Quantity in stock"
                      className="input-box focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>
                <div className="w-[200px]">
                  <Button type="submit" primary className="w-full p-2">
                    Send
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
