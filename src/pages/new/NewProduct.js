import { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./new.css";
import { createProduct } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import CenterModal from "../../components/modals/CenterModal";

const NewProduct = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const BASE_URL = "http://localhost:4000";

  const [name, setName] = useState("");
  const [availability, setAvailability] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [brief, setBrief] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [config, setConfig] = useState("");
  const [quantityInStock, setQuantityInStock] = useState("");

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const create = useSelector((state) => state?.createProduct);
  const { loading: createLoading, error: createError, postSuccess } = create;

  const customId = "custom-id-yes";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (postSuccess) {
      navigate("/products");
    }
  }, [dispatch, postSuccess, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        availability,
        brand,
        image,
        category,
        model: sku,
        price,
        brief,
        size,
        color,
        desc: description,
        config,
        quantityInStock,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post(
        `${BASE_URL}/api/upload`,
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setImage(data?.secure_url);
      setLoadingUpload(false);
      toast.success("Image uploaded successfully", {
        toastId: customId,
      });
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setErrorUpload(err);
      setLoadingUpload(false);
      toast.error(err, {
        toastId: customId,
      });
    }
  };

  return (
    <div className="">
      <div className="p-8">
        <p className="text-gray-500">
          <span className="text-xl">Add New Product</span>
        </p>

        <div>
          <div className="mt-8">
            {createLoading && (
              <CenterModal className="bg-transparent text-white">
                <LoadingBox />
              </CenterModal>
            )}
            {createError && (
              <MessageBox variant="danger">{createError}</MessageBox>
            )}

            <form onSubmit={submitHandler}>
              <div className="flex md:flex-row flex-col gap-4 mb-4">
                <div className="text-gray-600 block text-sm">
                  <label htmlFor="image">Images</label>
                  {loadingUpload ? (
                    <div>
                      <i className="fa fa-spinner fa-spin"></i>Loading...
                    </div>
                  ) : (
                    <div className="w-[200px] h-[200px]">
                      <img className="w-full" src={image} alt="productImage" />
                    </div>
                  )}

                  <div>
                    <label htmlFor="file">Upload Image</label>
                    <input type="file" id="file" onChange={uploadFileHandler} />
                  </div>
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
                    id="availability"
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
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Enter brand name"
                    className="input-box focus:border-primary focus:ring-0"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 mb-4">
                <div className="w-full">
                  <label
                    htmlFor="category"
                    className="text-gray-600 mb-2 block"
                  >
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
                  <label htmlFor="config" className="text-gray-600 mb-2 block">
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
                <Button
                  disabled={createLoading}
                  type="submit"
                  primary
                  className="w-full p-2"
                >
                  {createLoading
                    ? '<i className="fa fa-spinner fa-spin"></i>'
                    : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
