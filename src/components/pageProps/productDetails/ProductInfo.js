import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import talles from "../../../assets/images/sitio/talles.jpeg";
const ProductInfo = ({ productInfo }) => {
  const highlightStyle = {
    color: "#d0121a", // Change this to the desired color
    fontWeight: "bold", // Change this to the desired font weight
  };

  const renderDescription = () => {
    if (!productInfo.des) {
      return null; // or handle accordingly if product.des is not defined
    }

    const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
      return (
        <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
          {part}
        </span>
      );
    });

    return <>{description}</>;
  };
  const dispatch = useDispatch();



  const [amount, setAmount] = useState(1);
  return (
    <>
      {/* <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center"> */}
        <div className="flex flex-col items-start gap-4 lg:w-2/4">
          <div>
            <span className=" text-[#fc148c] font-semibold">
              Fútbol
            </span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
            <h6 className="text-xl font-semibold">$ 199.00</h6>
          </div>
          <p className="text-gray-700">
            Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
            chilometri, Invincible 3 offre un livello di comfort elevatissimo
            sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
            Questo modello incredibilmente elastico e sostenitivo, è pensato per
            dare il massimo lungo il tuo percorso preferito e fare ritorno a
            casa carico di energia, in attesa della prossima corsa.
          </p>
          <img className="w-[400px]" src={talles} alt="talles" />
          <div className="flex flex-row items-center gap-12">
            {/* <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div> */}
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: productInfo.id,
                    name: productInfo.productName,
                    quantity: 1,
                    image: productInfo.img,
                    badge: productInfo.badge,
                    price: productInfo.price,
                    colors: productInfo.color,
                  })
                )
              }
              className="bg-[#fc148c] text-white font-semibold py-3 px-4 lg:px-16 rounded-sm w-auto h-auto lg:h-full text-xl"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      {/* </div> */}
      {/* <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
        <p className="text-2xl font-semibold">
          {productInfo.price} Dt
          <span className="text-xl font-semibold line-through ml-2">540</span>
          <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">
            Save 100
          </span>
        </p>
        <hr />
        <p className="text-base text-gray-600">{renderDescription()}</p>

        <div className="flex items-center">
          <p className="text-sm mr-2"> leave a review </p>

          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>

        <p className="text-base text-green-600 font-medium">En Stock</p>
        <p className="font-medium text-lg">
          <span className="font-normal">Colors:</span> {productInfo.color}
        </p>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                _id: productInfo.id,
                name: productInfo.productName,
                quantity: 1,
                image: productInfo.img,
                badge: productInfo.badge,
                price: productInfo.price,
                colors: productInfo.color,
              })
            )
          }
          className="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
        >
          Add to Cart
        </button>
        <p className="font-normal text-sm">
          <span className="text-base font-medium"> Categories:</span> Spring
          collection, Streetwear, Women Tags: featured SKU: N/A
        </p>
      </div> */}
    </>
  );
};

export default ProductInfo;
