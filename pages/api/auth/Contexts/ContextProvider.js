import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const ButtonDatas = [
    {
      id: 1,
      dataSection: "Bakery & Bevarages",
      image: "/assets/images/Food&Beverages.svg",
      title1: "PRODUCT INFORMATION",
      title2: "PRODUCT DIMENSIONS(INCHES)",
      title3: "CUSTOMER REDRESSAL",
      inches: `Lamp Full Height: Adjustable Upto 30"
      Lamp Base Height: 1"
      Lamp Base Breadth: 5"
      Lamp Base Length: 8"
      Cable Length: 43"`,
      redressal: `At White Teak, we are committed to 
      highest levels of customer experie
      For queries related to your purcha
      or product, `,
      contactus: `contact us at: 
      help@ol_ds.com or call us on  
      (303) 985-0105`,
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 2,
      dataSection: "Meat & Food Induatry",
      image: "/assets/images/Food&Beverages.svg",
      title1: "PRODUCT INFORMATION",
      title2: "PRODUCT DIMENSIONS(INCHES)",
      title3: "CUSTOMER REDRESSAL",
      inches: `Lamp Full Height: Adjustable Upto 30"
      Lamp Base Height: 1"
      Lamp Base Breadth: 5"
      Lamp Base Length: 8"
      Cable Length: 43"`,
      redressal: `At White Teak, we are committed to 
      highest levels of customer experie
      For queries related to your purcha
      or product, `,
      contactus: `contact us at: 
      help@ol_ds.com or call us on  
      (303) 985-0105`,
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 3,
      dataSection: "Bottling Industry",
      image: "/assets/images/Food&Beverages.svg",
      title1: "PRODUCT INFORMATION",
      title2: "PRODUCT DIMENSIONS(INCHES)",
      title3: "CUSTOMER REDRESSAL",
      inches: `Lamp Full Height: Adjustable Upto 30"
      Lamp Base Height: 1"
      Lamp Base Breadth: 5"
      Lamp Base Length: 8"
      Cable Length: 43"`,
      redressal: `At White Teak, we are committed to 
      highest levels of customer experie
      For queries related to your purcha
      or product, `,
      contactus: `contact us at: 
      help@ol_ds.com or call us on  
      (303) 985-0105`,
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 4,
      dataSection: "Automotive",
      image: "/assets/images/Food&Beverages.svg",
      title1: "PRODUCT INFORMATION",
      title2: "PRODUCT DIMENSIONS(INCHES)",
      title3: "CUSTOMER REDRESSAL",
      inches: `Lamp Full Height: Adjustable Upto 30"
      Lamp Base Height: 1"
      Lamp Base Breadth: 5"
      Lamp Base Length: 8"
      Cable Length: 43"`,
      redressal: `At White Teak, we are committed to 
      highest levels of customer experie
      For queries related to your purcha
      or product, `,
      contactus: `contact us at: 
      help@ol_ds.com or call us on  
      (303) 985-0105`,
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 5,
      dataSection: "Printing",
      image: "/assets/images/Food&Beverages.svg",
      title1: "PRODUCT INFORMATION",
      title2: "PRODUCT DIMENSIONS(INCHES)",
      title3: "CUSTOMER REDRESSAL",
      inches: `Lamp Full Height: Adjustable Upto 30"
      Lamp Base Height: 1"
      Lamp Base Breadth: 5"
      Lamp Base Length: 8"
      Cable Length: 43"`,
      redressal: `At White Teak, we are committed to 
      highest levels of customer experie
      For queries related to your purcha
      or product, `,
      contactus: `contact us at: 
      help@ol_ds.com or call us on  
      (303) 985-0105`,
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
    {
      id: 6,
      dataSection: "Others",
      image: "/assets/images/Food&Beverages.svg",
      title1: "PRODUCT INFORMATION",
      title2: "PRODUCT DIMENSIONS(INCHES)",
      title3: "CUSTOMER REDRESSAL",
      inches: `Lamp Full Height: Adjustable Upto 30"
      Lamp Base Height: 1"
      Lamp Base Breadth: 5"
      Lamp Base Length: 8"
      Cable Length: 43"`,
      redressal: `At White Teak, we are committed to 
      highest levels of customer experie
      For queries related to your purcha
      or product, `,
      contactus: `contact us at: 
      help@ol_ds.com or call us on  
      (303) 985-0105`,
      discription1: `HOLDER & PLUG TYPE: E-27. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription2: `RECOMMENDED BULB: LED, CFL or Incandescent Bulbs can be used. Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription3: `NO. OF BULB HOLDERS: 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
      discription4: `BULB PROVIDED: Not Provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et labore et dolore magna aliqua. `,
    },
  ];
  const [filteredData, setFilteredData] = useState({});
  const [showcontainer, setShowcontainer] = useState(false);
  return (
    <>
      <StateContext.Provider
        value={{
          ButtonDatas,
          showcontainer,
          setShowcontainer,
          filteredData,
          setFilteredData,
        }}
      >
        {children}
      </StateContext.Provider>
    </>
  );
};

export const useStateContext = () => useContext(StateContext);
