

const Section_1 = () => {
  return (
    <div className="box-1 flex flex-col items-center justify-center text-center 
    gap-[45px] md:flex md:relative lg:flex-row lg:items-baseline  relative">

      {/* <div className="md:h-[973px] lg:w-[10px] lg:bg-[red] absolute -z-20 "></div> */}


    <img className="hidden absolute top-[-121px] left-0 -z-20 ml-[42px] md:flex lg:hidden" src="/assets/vLine.png" alt="" />
      <div className="lg:h-[14px] w-[973px] bg-[#D8D8D8] absolute -z-20 top-[40px] left-[-150px]"></div>

      <div className="item flex flex-col items-center justify-center text-center gap-6 md:flex-row md:gap-[79px] lg:flex-col lg:items-start">
        <img className="w-[56px] h-[56px] md:w-[96px] md:h-[96px]" src="/assets/icons/locate.svg" alt="" />

        <div className="item flex flex-col items-center justify-center text-center gap-6 md:items-start">
          <h2 className="text-[25px] font-medium leading-[1.66] font-deca">Locate with app</h2>
          <p className="text-[15px] leading-[1.66] font-deca md:text-left text-[#939CAA]">Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
        </div>
      </div>



      <div className="item flex flex-col items-center justify-center text-center gap-6 md:flex-row md:gap-[79px] lg:flex-col lg:items-start">
        <img className="w-[56px] h-[56px] md:w-[96px] md:h-[96px]" src="/assets/icons/scooter.svg" alt="" />

        <div className="item flex flex-col items-center justify-center text-center gap-6 md:items-start">
          <h2 className="text-[25px] font-medium leading-[1.66] font-deca">Pick your scooter</h2>
          <p className="text-[15px] leading-[1.66] font-deca md:text-left text-[#939CAA]">We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
        </div>
      </div>



      <div className="item flex flex-col items-center justify-center text-center gap-6 md:flex-row md:gap-[79px] lg:flex-col lg:items-start">
        <img className="w-[56px] h-[56px] md:w-[96px] md:h-[96px]" src="/assets/icons/ride.svg" alt="" />

        <div className="item flex flex-col items-center justify-center text-center gap-6 md:items-start">
          <h2 className="text-[25px] font-medium leading-[1.66] font-deca">Enjoy the ride</h2>
          <p className="text-[15px] leading-[1.66] font-deca md:text-left text-[#939CAA]">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
        </div>
      </div>


    </div>
  )
}

export default Section_1