import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import Switcher from "./components/Swithcer";
import Card from './components/Card';
import { Card1 } from './components/Card';
import img1 from "./components/img/Img1.jpg";
import img2 from "./components/img/Img2.jpg";
import img3 from "./components/img/Img3.jpg";
import img4 from "./components/img/Img4.jpg";
import img5 from "./components/img/Img5.jpg";
import img6 from "./components/img/Img6.jpg";
import img7 from "./components/img/Img7.jpg";
import img8 from "./components/img/Img8.jpg";
import img9 from "./components/img/Img9.jpg";
import img10 from "./components/img/Img10.jpg";
import img11 from "./components/img/Img11.jpg";



const App = () => {
  const [Ing, setLng] = useState("en");
  const [t, i18n] = useTranslation();
  const changeLanguage = (Language) => {
    i18n.changeLanguage(Language);
  };

  return (
    <div className="dark:bg-[#0b0b24] dark:text-[#fff]">

      <header>
        <nav className="flex justify-around py-[20px] px-[10px]">
          <div>
            <h1 className='text-[20px] font-bold text-sky-600'>NYSMPL</h1>
          </div>
          <div>
            <ul className="sm:flex sm:justify-around sm:w-[700px] hidden sm:block sm:font-semibold">
              <li>{t("text")}</li>
              <li>{t("text1")}</li>
              <li>{t("text2")}</li>
              <li>{t("text3")}</li>
              <li>{t("text4")}</li>
            </ul>
          </div>
          <div>
            <select
              className="dark:bg-[#060614] dark:text-[#fff] line-none"
              name=""
              id=""
              value={Ing}
              onChange={(e) => {
                changeLanguage(e.target.value);
                setLng(e.target.value);
              }}
            >
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </div>
          <div>
            <Switcher />
          </div>
        </nav>

        <section>
          <div className="sm:flex sm:mb-[10px] sm:justify-around">
            <div className="flex justify-center pt-[10px]">
              <input
                type="text"
                placeholder=" Тип..."
                className="border-[1px] px-[10px] py-[5px] w-[250px] rounded-[5px] sm:w-[300px] dark:bg-[#0b0b24] sm:h-[40px]"
              />
            </div>
            <div className="flex flex-wrap sm:justify-evenly sm:w-[850px] mt-[10px] pb-[10px] ml-[25px]">
              <select className="px-[10px] py-[5px] bg-slate-200 rounded-[5px] sm:px-[15px] dark:bg-[#0b0b24]">
                <option value="">C</option>
              </select>
              <select className="px-[10px] py-[5px] bg-slate-200 rounded-[5px] sm:px-[15px] dark:bg-[#0b0b24] ml-[10px]">
                <option value="">До</option>
              </select>
              <select className="px-[10px] py-[5px] bg-slate-200 rounded-[5px] sm:px-[15px] dark:bg-[#0b0b24] ml-[10px]">
                <option value="">{t("text7")}</option>
              </select>
              <select className="px-[10px] py-[5px] bg-slate-200 rounded-[5px] sm:px-[15px] dark:bg-[#0b0b24] mt-[5px] sm:mt-[0px] sm:ml-[10px]">
                <option value="">{t("text8")}</option>
              </select>
              <div>
                <input
                  type="search"
                  placeholder=" Search..."
                  className="border-[1px] px-[10px] py-[5px] w-[250px] rounded-[5px] sm:w-[300px] mt-[5px] dark:bg-[#0b0b24]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[url('src/components/img/BMW1.jpg')] bg-no-repeat bg-cover h-[100vh]">
          <div className="bg-[#00000095] h-[100vh] w-[100%] sm:pt-[40px]">
            <div className="bg-[#00000095] h-[100vh] sm:w-[90%] sm:h-[90vh] border-[1px] rounded-[10px] sm:m-auto p-[20px]">
              <div className="sm:ml-[150px] sm:mt-[150px]">
                <h1 className="text-[25px] text-[#fff] font-bold text-center mt-[40px] sm:text-start sm:text-[50px] sm:w-[1000px]">
                  {t("text5")}
                </h1>
                <p className="text-[#fff] text-[14px] text-center mt-[40px] sm:text-start sm:text-[20px] sm:w-[500px] sm:mt-[10px]">
                  {t("text6")}
                </p>
                <div className="mt-[50px] text-center sm:text-start sm:ml-[0px] sm:mt-[10px]">
                  <button className="text-[#fff] px-[30px] py-[5px] rounded-[5px] border-[1px] border-sky-600 bg-sky-700 hover:bg-sky-500">
                    {t("button")}
                  </button>
                  <button className="text-[#fff] px-[30px] py-[5px] rounded-[5px] border-sky-600 border-[1px] mt-[15px] bg-[#00000013] hover:bg-[#0000006e] hover:border-[#0000006e] sm:ml-[15px]">
                    {t("text1")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section>
          <div className="all sm:flex sm:justify-between">
            <div className="left sm:w-[50%]">
              <Swiper
                Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-[10px] sm:h-[600px] sm:ml-[70px]"
              >
                <SwiperSlide>
                  <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img11} alt="" />
                </SwiperSlide>
              </Swiper>

              <div className="Card">
                <div className="one flex flex-wrap justify-between px-[20px] mt-[20px] sm:ml-[50px]">
                  <div>
                    <Card img={img11} />
                  </div>
                  <div>
                    <Card img={img2} />
                  </div>
                  <div>
                    <Card img={img3} />
                  </div>
                  <div>
                    <Card img={img4} />
                  </div>
                  <div>
                    <Card img={img5} />
                  </div>
                  <div>
                    <Card img={img6} />
                  </div>
                  <div>
                    <Card img={img7} />
                  </div>
                  <div>
                    <Card img={img8} />
                  </div>
                  <div>
                    <Card img={img9} />
                  </div>
                  <div>
                    <Card img={img10} />
                  </div>
                  <div>
                    <Card img={img1} />
                  </div>
                  <div>
                    <button className="bg-sky-600 text-[#fff] px-[30px] py-[8px] text-[12px] rounded-[5px] mt-[20px] sm:mt-[70px] hover:bg-sky-900">
                      {t("text9")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="right px-[20px] text-[11px] sm:text-[20px] sm:mt-[50px] sm:mr-[150px] rounded-[10px] bg-[#cbcbcb29]">
              <div>
                <h1 className="text-[20px] font-semibold text-center mt-[25px] sm:mt-[40px] sm:text-[25px] sm:mb-[25px]">
                  2021 Toyota Camry XSE V6
                </h1>
              </div>
              <div>
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">VIN :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">4T1KZ1AK6MU056958</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Lot :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">006752</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Seller :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">
                      Progressive Casualty Insurance
                    </p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Final bid :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">$9,850</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Loss :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Collision</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Primary Damage :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Front end</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Secondary Damage :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Unknown</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Odometer :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">32,871 miles</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Start Code :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Run & Drive</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Key :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Present</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Airbags :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Intact</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">VIN (Status) :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">4T1KZ1AK6MU056958 (OK)</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Vehicle :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Automobile</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Body Style :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">SEDAN</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Transmission :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Unknown</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Drive Line Type :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Front Wheel Drive</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Fuel Type :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Gasoline</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Manufactured In :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Japan</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Selling Branch :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">North Hollywood (CA)</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
                <div className="flex justify-between ">
                  <div>
                    <h2 className="font-light">Auction Date and Time: :</h2>
                  </div>
                  <div>
                    <p className="text-[gray]">Sat June 3, 1130am (CST)</p>
                  </div>
                </div>
                <hr className="mt-[8px] mb-[8px]" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-[25px] font-medium text-center mt-[100px] sm:mt-[150px]">
            {t("text10")}
          </h1>
          <hr className="mb-[10px] mt-[30px] sm:mt-[40px]" />

          <div className="all sm:flex sm:justify-between sm:ml-[205px] sm:flex-wrap sm:w-[1100px]">
            <div className="flex justify-center">
              <Card1
                img={img1}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img2}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img3}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img4}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img5}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img6}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img7}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img8}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img9}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img10}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
            <div className="flex justify-center">
              <Card1
                img={img11}
                h1={"2021 Land Rover"}
                p1={"Final bid"}
                h2={"$32.825.00"}
                button={"SALWS2RU3MA787413"}
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="bg-gray-200">
          <h1 className="text-[#334150] font-semibold text-[18px] text-center mt-[100px] pt-[80px]">
            {t("text11")}
          </h1>
          <ul className="flex flex-wrap mt-[15px] w-[300px] justify-around sm:w-[800px] sm:ml-[350px] pb-[50px]">
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[90px] text-center mt-[18px] rounded-[5px] ">
              {t("text12")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[90px] text-center mt-[18px] rounded-[5px] ">
              {t("text13")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[90px] text-center mt-[18px] rounded-[5px] ">
              {t("text14")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[50px] text-center mt-[18px] rounded-[5px] ">
              {t("text15")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[50px] text-center mt-[18px] rounded-[5px] ">
              {t("text16")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[50px] text-center mt-[18px] rounded-[5px] ">
              {t("text17")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[80px] text-center mt-[18px] rounded-[5px] ">
              {t("text18")}
            </li>
            <li className="px-[5px] py-[5px] bg-[#80808071] w-[100px] text-center mt-[18px] rounded-[5px] ">
              {t("text19")}
            </li>
          </ul>
        </section>

        <section className="bg-sky-600 pb-[40px]">
          <div>
            <h1 className="text-[20px] text-[#fff] font-bold pt-[50px] text-center pb-[30px]">
              {t("text20")}
            </h1>
          </div>
          <div className="flex justify-center">
            <button className="px-[10px] py-[6px] rounded-[5px] border-[1px] text-sky-600 bg-[#fff] hover:bg-sky-600 hover:text-[#fff]">
              {t("text21")}
            </button>
            <button className="px-[10px] py-[6px] rounded-[5px] border-[1px] text-[#fff] ml-[10px] border-gray-400 hover:border-[#fff]">
              {t("text22")}
            </button>
          </div>
        </section>
      </footer>
      
    </div>
  );
};
export default App;

