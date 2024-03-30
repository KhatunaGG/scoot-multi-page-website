import Button from "../components/Button";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Section_1 from "../components/Section_1";





const Home = () => {


  return (
    <>
      <div className="home w-full pt-[115px]  text-white  relative h-[650px] overflow-hidden lg:pt-[153px] lg:text-left lg:flex lg:flex-col lg:items-start ">
        <div className="px-[32px] md:px-[12.63%] lg:px-[11.45%]">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-[40px] leading-[1] tracking-[-1.79px] text-center 
        mb-6 md:w-[573px] md:text-[56px] md:tracking-[-2.5px] lg:text-left lg:mb-10 hover:text-[#FCB72B]">Scooter sharing made simple</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-[34px] lg:w-[500px] lg:text-left lg:ml-[92px] lg:justify-start lg:items-start ">
            <p className="text-[15px] font-light leading-[1.66] font-deca md:w-[573px] lg:w-[405px]">Scoot takes the hassle out of urban mobility.
              Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike,
              unlock it with a tap, and you’re away!</p>
            <div className="flex items-start">
              <Button
                status="header"
              />
            </div>
          </div>
        </div>
        <img className="absolute left-0 md:hidden" src="/assets/arrow-small.png" alt="" />
        <svg className="hidden absolute left-0 bottom-[39px] md:flex lg:hidden" xmlns="http://www.w3.org/2000/svg" width="452" height="151">
          <g fill="none" fill-rule="evenodd" stroke="#FCB72B" stroke-linejoin="bevel" stroke-width="15">
            <path d="M407.952 145.444l38.426-38.426-38.426-38.426" /><path d="M0 8h270.115v99.369h176.263" /></g></svg>
        <svg className="hidden md:hidden lg:flex absolute left-[0px] bottom-[300px]" xmlns="http://www.w3.org/2000/svg" width="203" height="15"><path fill="none" stroke="#FCB72B" stroke-width="15" d="M203 7.5H.5" /></svg>
        <svg className="hidden md:hidden lg:flex absolute left-[640px] bottom-[165px] " xmlns="http://www.w3.org/2000/svg" width="452" height="151"><g fill="none" fill-rule="evenodd" stroke="#FCB72B" stroke-linejoin="bevel" stroke-width="15"><path d="M407.952 145.444l38.426-38.426-38.426-38.426" /><path d="M0 8h270.115v99.369h176.263" /></g></svg>
        <img className="hidden md:visible md:absolute md:right-[-30px] md:bottom-[51px] md:flex lg:bottom-[176.5px]" src="/assets/patterns/white-circles.svg" alt="" />
      </div>
      <main className="pt-[72px] mb-[120px] md:pt-[144px] lg:pt-[160px] md:mb-[104px] lg:mb-[200px] ">
        <div className="container w-full  flex flex-col items-center justify-center ">
          <div className="wrapper flex flex-col items-center justify-center px-[32px] mb-[120px] md:px-[12.63%] lg:px-[11.45%] md:mb-[145px] lg:mb-[200px] ">
            <Section_1 />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[120px] lg:gap-[160px]">
            <CardRight status='home' />
            <CardLeft status='home' />
            <CardRight
              status='home_2'
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home



