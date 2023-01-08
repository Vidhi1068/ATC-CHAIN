import React, { useState ,useEffect} from "react";
import { useStateContext } from "./api/auth/Contexts/ContextProvider";
import { Tab } from "@headlessui/react";
import Image from "next/image";
export default function Industries() {
  const {
    ButtonDatas,
    showcontainer,
    setShowcontainer,
    filteredData,
    setFilteredData,
  } = useStateContext();
  console.log("ButtonDatas, ", ButtonDatas);

   const [clickedItem, setClickedItem] = useState(1)

  useEffect(() => {
    setFilteredData(ButtonDatas[0])
  },[])

  const handleClick = (item,id) => {
   setClickedItem(id)
    
    setShowcontainer(!showcontainer);
    setIsActive(true);
    
    setFilteredData(item);

    console.log("Filterdata===>", item);
  };

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center industry_heading p-5 w-[90%] sm:w-[92%] h-16 text-xl  border-btn-primary border-4 rounded-r-full border-l  font-bold  text-btn-primary ">
        <p className=""> INDUSTRIES</p>
        <Image
          src="/assets/images/globalelement3.svg"
          alt="globalelement3"
          className="w-16 "
          width={100}
          height={100}
        />
        {/* <img src="/assets/images/globalelement3.svg" className="w-16" /> */}
      </div>

      <div className="industry_section sm:flex sm:w-full">
        <div className="tabgroup_buttons ">
          <Tab.Group>
            <Tab.List className="grid grid-col-1 mt-10 justify-items-center sm:justify-start ">
              {ButtonDatas.map((datas, i) => (
                <Tab
                  key={i}
                 className={` h-28 ${
                    clickedItem === datas.id ? "industryactive" : "industry"
                  }`}
                  onClick={() => handleClick(datas, datas.id )}
                >
                  {datas.dataSection}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>

        <div
          className="Allcontent flex flex-col space-y-6 "
          style={{
            display: showcontainer ? "block" : "block",
          }}
        >
          <p>{filteredData.dataSection}</p>
          <br />

          <div className="productimg relative grid place-items-center">
            <Image
              src={filteredData.image}
              alt="product image"
              className="rounded-2xl w-4/5 "
              width={100}
              height={100}
            />

            <div className="productname  grid place-items-center productdetail  bg-gray-500 absolute w-4/5 sm:w-[80%] bottom-0 h-12 rounded-b-2xl text-center text-blue-900 font-semibold">
              <p className="text-sm">FRUIT & VEGETABLES</p>
            </div>

            <div className="hidden sm:block absolute bg-white w-56 h-64 rounded-2xl right-0 flex-col text-center">
              <p className="text-btn-primary font-bold py-6 text-sm">
                FOOD & BEVERAGES
              </p>
              <p className="text-[#626687] text-xs px-2">
                ATC chains offer a one stop solution for all your beverage
                necessities. We produce PET bottles, jars, containers and glass,
                bottle case, labeler and assemble so brands don’t have to bother
                about the labels & the process of white assembling. We deliver
                premium set of services that helps brand deliver premium
                products.
              </p>

              <button
                type="button"
                className="btn btn-lg btn-default bg-btn-secondary text-xs text-white w-4/5 rounded p-1"
              >
                More Details
              </button>
            </div>
          </div>

          <div className="hidden sm:block mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  PRODUCT INFORMATION
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  MATERIALS AND ENVIRONMRNT
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  PACKAGE DETAIL
                </button>
              </li>
            </ul>
          </div>
          <div className="myTabContent1 flex">
            <div>
              <div className="alldata flex-col p-4 text-[#3B4355] ">
                <p className="datatitle text-xs ">{filteredData.title1}</p>
              </div>
              <div className="space-y-6 py-6 px-6 ">
                <p className="discription1 text-xs text-gray-600 ">
                  {filteredData.discription1}
                </p>
                <p className="discription2 text-xs text-gray-600">
                  {filteredData.discription2}
                </p>
                <p className="discription3 text-xs text-gray-600">
                  {filteredData.discription3}
                </p>
                <p className="discription4 text-xs text-gray-600">
                  {filteredData.discription4}
                </p>
              </div>
            </div>

            <div className="hidden sm:block">
              <div>
                <div className="alldata flex-col p-4 text-[#3B4355] ">
                  <p className="datatitle text-xs ">{filteredData.title2}</p>
                </div>
                <div className="space-y-6 py-6 px-6 ">
                  <p className="discription1 text-xs text-gray-600 ">
                    {filteredData.inches}
                  </p>
                </div>
              </div>

              <div>
                <div className="alldata flex-col p-4 text-[#3B4355] ">
                  <p className="datatitle text-xs ">{filteredData.title3}</p>
                </div>
                <div className="space-y-6 py-6 px-6 ">
                  <p className="discription1 text-xs text-gray-600 ">
                    {filteredData.redressal}
                  </p>
                  <p className="discription2 text-xs text-gray-600">
                    {filteredData.contactus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// w-72 sm:w-[80%]
