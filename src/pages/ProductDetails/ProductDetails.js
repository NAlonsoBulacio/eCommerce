import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { FaDownload } from "react-icons/fa";
import BestSellers from "../../components/home/BestSellers/BestSellers";


const tabs = [
  {
    id: "Fiche Technique",
    label: "Fiche Technique",
  },
  {
    id: "Description",
    label: "Description",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    id: "Video",
    label: "Video",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/watch?v=6e0yIRDVPlA&list=RD6e0yIRDVPlA&start_radio=1"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    ),
  },
  // Add more tabs as needed
];

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo.ficheTech]);

  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  return (
    <>
      <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
        <div className="max-w-container mx-auto px-4">
          <div className="xl:-mt-10 -mt-7">
            <Breadcrumbs title="" prevLocation={prevLocation} />
          </div>
          <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-start">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={activeImg}
                alt=""
                className="w-full h-full aspect-square object-cover rounded-xl"
              />
              <div className="h-24 flex justify-between">
                <div className="flex flex-row justify-center space-x-6 h-24 overflow-hidden">
                  <img
                    src={images.img1}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img1)}
                  />
                  <img
                    src={images.img2}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img2)}
                  />
                  <img
                    src={images.img3}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img3)}
                  />
                  <img
                    src={images.img4}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images.img4)}
                  />
                </div>
              </div>
            </div>
            {/* <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center"> */}
            <ProductInfo productInfo={productInfo} />
            {/* </div> */}
          </div>
          <div>
            <div className=" space-x-4  pt-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${
                    activeTab === tab.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } py-2 px-4  focus:outline-none`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="my-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? "" : "hidden"}
                >
                  {tab.id === "Fiche Technique" && productInfo.ficheTech ? (
                    <div>
                      <table className="table-auto w-full">
                        <tbody>
                          {productInfo.ficheTech.map((row) => (
                            <tr key={row.label} className="bg-gray-100">
                              <td className="border px-4 py-2 font-semibold">
                                {row.label}
                              </td>
                              <td className="border px-4 py-2">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="my-4 flex justify-end">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 hover:bg-blue-600 text-white font-bodyFont">
                          <FaDownload className="h-5 w-5 mr-2 text-white" />
                          <a
                            href={productInfo.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                          >
                            Download PDF
                          </a>{" "}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p>{tab.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <BestSellers />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
