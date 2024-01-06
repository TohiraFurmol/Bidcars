function Card({ img }) {
  return (
    <div>
      <img src={img} className="w-[120px] mt-[20px]" alt="" />
    </div>
  );
}
export default Card;

function Card1({ img, h1, p1, h2, button }) {
  return (
    <div className="mt-[80px] sm:mt-[25px] hover:bg-[#0f0f30] p-[5px] rounded-[5px]">
      <img src={img} className=" sm:w-[200px] rounded-[10px]" alt="" />
      <h1 className="text-sky-500 mt-[15px] mb-[5px] text-[20px]">{h1}</h1>
      <p1 className="text-[gray]">{p1}</p1>
      <h2 className="font-extralight text-[16px] mt-[10px] mb-[5px] text-[#1d1d1d]">
        {h2}
      </h2>
      <div className="flex justify-center">
        <button className="text-sky-500 bg-[#80808038] px-[25px] py-[5px] text-center rounded-[5px]">
          {button}
        </button>
      </div>
    </div>
  );
}
export { Card1 };
