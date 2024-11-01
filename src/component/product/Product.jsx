import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlusSquare, FaStar } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import { ToastContainer, toast, Flip, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading/Loading";
const BASE__URL = "https://dummyjson.com";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE__URL}/products`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(product);
  const productLIst = product?.map((pro) => {
    // console.log(pro);
    // productStart
    const number = Math.floor(pro.rating);
    const rows = [];
    const emptyRow = [];
    // product start rating
    for (let i = 0; i < number; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<FaStar key={i} />);
    }
    const productStar = rows?.map((item) => {
      return item;
    });
    // product empty star
    for (let i = 0; i < 5 - number; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      emptyRow.push(<ImStarEmpty key={i} />);
    }
    const productEmptyStar = emptyRow?.map((item) => item);

    return (
      <div
        className="w-80 p-2 border border-slate-600 rounded-tl-lg rounded-br-lg flex flex-col justify-between"
        key={pro.id}
      >
        <img
          onClick={() =>
            toast.info(`${pro.description}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
            })
          }
          src={pro.images[0]}
          className="w-full h-64 rounded-tl-2lg rounded-br-2lg "
          alt={pro.description}
        />
        <div className="flex justify-between items-center">
          <h4 className="font-serif font-semibold text-xl">{pro.title}</h4>
          <strong className="text-red-600 text-xl"> {pro.price}$ </strong>
        </div>
        <p className="p-3">
          There are many things are needed to start the Fast Food Business.
        </p>
        <div className="flex justify-between pb-2 text-red-600">
          <button
            onClick={() =>
              toast.success("Savatga Qoshildi!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              })
            }
            className=" text-3xl"
          >
            <FaPlusSquare />
          </button>
          <div className="text-2xl flex gap-1">
            {productStar}
            {productEmptyStar}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container1 flex flex-col gap-4 justify-center items-center pt-11">
      <p className="text-base text-red-600 font-medium">MENU</p>
      <h3 className="font-semibold text-4xl">Food Full of treaty Love</h3>
      <p className="font-light text-base text-center w-[700px]">
        There are many things are needed to start the Fast Food Business. You
        need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers,{" "}
      </p>
      {loading && <Loading />}
      <div className="flex flex-wrap gap-5 justify-center">{productLIst}</div>
      <ToastContainer />
    </div>
  );
};

export default Product;
