import CardRight from "../components/CardRight"



const About = () => {
  return (
    <>
      <div className="about flex items-center justify-center text-white">
        <h1 className="text-[40px] leading-[1] tracking-[-1.79px] font-bold md:text-[56px] md:tracking-[-2.5px]
      md:flex-row md:w-full md:pl-[97px] lg:pl-[165px]
      ">About</h1>
        <img className="hidden md:flex mr-[-35px] " src="/assets/patterns/white-circles.svg" alt="" />

      </div>



      <div className="container w-full  flex flex-col items-center justify-center
      pt-[72px] md:pt-[144px] lg:pt-[120px]
      ">




        <div className="wrapper mb-[120px]  relative ">

          <section className='card flex flex-col items-center gap-[56px] lg:flex-row lg:items-center lg:justify-center
          px-[32px] md:px-[12.63%] lg:px-[11.45%]
          '>
            <img className='hidden absolute -z-30 top-0 right-[0px] md:flex' src="/assets/Mask.png" alt="" />
            <div className="flex flex-col items-center justify-center  relative lg:order-2 lg:flex-1">
              {status === 'isThirdCard' ? (
                <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/payments.jpg" alt="" />
              ) : (
                <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/telemetry.jpg" alt="" />
              )}
              <img className='absolute top-[130px] right-[-68px] md:hidden' src="/assets/section_2.png" alt="" />
              <img className='hidden absolute bottom-[50px] right-[-200px] md:flex lg:hidden' src="/assets/patterns/left-downward-arrow.svg" alt="" />
              <img className='hidden absolute bottom-[30px] right-[-410px] lg:flex lg:bottom-[45px] lg:right-[-145px]' src="/assets/Group32.svg" alt="" />
            </div>
            <div className='box_1 relative flex flex-col gap-[32px] text-center lg:order-1 lg:flex-1 '>
              <div className="box_2 flex flex-col gap-[32px] text-center ">
                <h1 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Easy to use riding telemetry</h1>
                <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
              </div>
              <div className='w-full flex items-center justify-center lg:justify-start'>
     
              </div>
            </div>
          </section>

        </div>









      </div>



    </>
  )
}

export default About