// import CardLeft from "../components/CardLeft"
// import CardRight from "../components/CardRight"

import FaqSection from "../components/FaqSection"



const About = () => {
  return (
    <>
      <header className="about flex items-center justify-center text-white">
        <h1 className="text-[40px] leading-[1] tracking-[-1.79px] font-bold md:text-[56px] md:tracking-[-2.5px]
      md:flex-row md:w-full md:pl-[97px] lg:pl-[165px]
      ">About</h1>
        <img className="hidden md:flex mr-[-35px] " src="/assets/patterns/white-circles.svg" alt="" />

      </header>



      <section className="container w-full  flex flex-col items-center justify-center
              pt-[72px] md:pt-[144px] lg:pt-[120px] gap-[120px] mb-[120px] lg:mb-[160px]
              ">


        <article className="wrapper gap-[120px] flex flex-col items-center justify-center ">
          <div className="cardRight  relative ">
            <img className='hidden absolute -z-30 top-0 right-[0px] md:flex' src="/assets/Mask.png" alt="" />
            <div className='flex flex-col items-center gap-[56px] lg:flex-row lg:items-center lg:justify-center
              px-[32px] md:px-[12.63%] lg:px-[11.45%]
              '>
              <div className="flex flex-col items-center justify-center  relative lg:order-2 lg:flex-1">
                <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/digital-era.jpg" alt="" />

                {/* {status === 'isThirdCard' ? (
                  <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/payments.jpg" alt="" />
                ) : (
                  <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/telemetry.jpg" alt="" />
                )} */}
                <img className='absolute top-[130px] right-[-68px] md:hidden' src="/assets/section_2.png" alt="" />
                <img className='hidden absolute bottom-[50px] right-[-200px] md:flex lg:hidden' src="/assets/patterns/left-downward-arrow.svg" alt="" />
                <img className='hidden absolute bottom-[30px] right-[-410px] lg:flex lg:bottom-[45px] lg:right-[-145px]' src="/assets/Group32.svg" alt="" />
              </div>
              <div className='box_1 relative flex flex-col gap-[32px] text-center lg:order-1 lg:flex-1 '>
                <div className="box_2 flex flex-col gap-[32px] text-center ">
                  <h2 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Mobility for the digital era</h2>
                  <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                </div>
                <div className='w-full flex items-center justify-center lg:justify-start'>
                </div>
              </div>
            </div>
          </div>




          <div className="cardLeft  relative ">
            <img className='hidden absolute -z-30 top-0 left-[0] md:flex' src="/assets/Mask2.png" alt="" />
            <section className='cardLeft flex flex-col items-center gap-[56px] relative lg:flex-row lg:items-center lg:justify-center px-[32px] md:px-[12.63%] lg:px-[11.45%]'>
              <div className="flex flex-col items-center justify-center  relative  lg:flex-1">
                <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/better-living.jpg" alt="" />
                <img className='absolute top-[33px] left-[-65px] md:top-[7px] md:left-[-163px] lg:flex lg:top-0 lg:left-[-145px] ' src="/assets/Group13.png" alt="" />
              </div>
              <div className='box_1 relative flex flex-col gap-[32px] text-center lg:flex-1 '>
                <div className="box_2 flex flex-col gap-[32px] text-center ">
                  <h2 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Better urban living</h2>
                  <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                </div>
                <div className='w-full flex items-center justify-center lg:justify-start'>
                </div>
              </div>
            </section>
          </div>

        </article>


        <article className="wrapper">
          <div className="wrapper-inner px-[32px] md:px-[20.18%] lg:px-[11.45%]  flex flex-col items-center justify-center gap-[103px]
          lg:flex-col lg:justify-between
          ">
            <h2 className="text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px]  md:tracking-[-2.14px] text-center ">Our values</h2>

            <div className="w-full flex flex-col  gap-[56px] justify-center items-center lg:flex-row lg:justify-between lg:items-center">
              <div className="relative  flex flex-col gap-[45px] items-center justify-center text-[#495567 ">
                <div className="flex flex-col gap-[105px] items-center justify-center ">
                  <img className="w-[240px] h-[240px] rounded-full" src="/assets/images/our-tech.jpg" alt="" />
                  <div className="absolute top-[181px] left-[110px] w-[96px] h-[96px] rounded-full bg-[#FCB72B] 
                flex items-center justify-center text-[24px] leading-[1.16] tracking-[-1.07px] font-bold 
                 text-[#495567] md:left-[181px] lg:left-[105px]">01</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[27px] text-center">
                  <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Our tech</h3>
                  <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca lg:text-center">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </div>
              </div>



              <div className="relative  flex flex-col gap-[45px] items-center justify-center text-[#495567 ">
                <div className="flex flex-col gap-[105px] items-center justify-center ">
                  <img className="w-[240px] h-[240px] rounded-full" src="/assets/images/our-integrity.jpg" alt="" />
                  <div className="absolute top-[181px] left-[110px] w-[96px] h-[96px] rounded-full bg-[#FCB72B] 
                flex items-center justify-center text-[24px] leading-[1.16] tracking-[-1.07px] font-bold
                   text-[#495567] md:left-[181px] lg:left-[92px]">02</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[27px] text-center">
                  <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Our integrity</h3>
                  <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca lg:text-center">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </div>
              </div>


              <div className="relative  flex flex-col gap-[45px] items-center justify-center text-[#495567 ">
                <div className="flex flex-col gap-[105px] items-center justify-center ">
                  <img className="w-[240px] h-[240px] rounded-full" src="/assets/images/our-community.jpg" alt="" />
                  <div className="absolute top-[181px] left-[110px] w-[96px] h-[96px] rounded-full bg-[#FCB72B] 
                flex items-center justify-center text-[24px] leading-[1.16] tracking-[-1.07px] font-bold 
                text-[#495567] md:left-[181px] lg:left-[100px]">03</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[27px] text-center">
                  <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Our community</h3>
                  <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca lg:text-center">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </div>
              </div>


            </div>
          </div>
        </article>

        <FaqSection />
      </section>
    </>
  )
}

export default About