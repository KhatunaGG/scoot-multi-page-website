import Button from "../components/Button"


const Location = () => {
  return (
    <>
      <header className="careers flex items-center justify-center text-white ">
        <h1 className="text-[40px] leading-[1] tracking-[-1.79px] font-bold md:text-[56px] md:tracking-[-2.5px]
      md:flex-row md:w-full md:pl-[12.63%] lg:pl-[]
      ">Location</h1>
        <img className="hidden md:flex mr-[-35px] " src="/assets/patterns/white-circles.svg" alt="" />
      </header>


      <article className="careers-wrapper w-full px-[32px] md:px-[5.07%] lg:px-[11.45%] flex flex-col pb-[72px]  ">
        <div className="map mt-[72px] mb-[40px] w-full md:h-[337px] md:mt-[144px] lg:h-[543px] lg:mt-[120px] relative">

          <div className="hidden absolute left-[8%] top-[12%] lg:flex" >
            <div className="relative ">
              <img className="" src="/assets/location.png" alt="" />
              <span className="absolute top-[25%]  left-[30%]">New York</span>
            </div>
          </div>


          <div className="hidden absolute left-[34%] top-[3%] lg:flex" >
            <div className="relative ">
              <img className="" src="/assets/location.png" alt="" />
              <span className="absolute top-[25%]  left-[30%]">London</span>
            </div>
          </div>


          <div className="hidden absolute right-[-1%] top-[14%] lg:flex" >
            <div className="relative ">
              <img className="" src="/assets/location.png" alt="" />
              <span className="absolute top-[25%] left-[30%]">Yokohama</span>
            </div>
          </div>


          <div className="hidden absolute right-[7%] top-[46%] lg:flex" >
            <div className="relative ">
              <img className="" src="/assets/location.png" alt="" />
              <span className="absolute top-[25%] left-[30%]">Jakarta</span>
            </div>
          </div>



        </div>

        <div className="w-full flex flex-col items-center justify-center gap-[72px]">
          <div className="w-full flex flex-col gap-4 pt-8 md:hidden">
            <button className="w-full bg-[#FFF4DF] text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567 py-[22px] px-[100x]">New York</button>
            <button className="w-full bg-[#FFF4DF] text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567 py-[22px] px-[100x]">London</button>
            <button className="w-full bg-[#FFF4DF] text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567 py-[22px] px-[100x]">Jakarta</button>
            <button className="w-full bg-[#FFF4DF] text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567 py-[22px] px-[100x]">Yokohama</button>

          </div>

          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row ">
            <h3 className="text-[32px] leading-[1] tracking-[-1.43px] font-bold text-[#495567] text-center lg:text-[48px] lg:tracking-[-2.14px] ">Your City Not Listed?</h3>
            <p className="text-[15px] leading-[1.66] font-medium font-deca text-center text-[#939CAA]  md:w-[573px] lg:text-left">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
            <Button />
          </div>
        </div>





      </article>
    </>
  )
}

export default Location
