import Button from "../components/Button"


const Careers = () => {
  return (
    <>

      <header className="careers flex items-center justify-center ">
        <h1 className="text-[40px] leading-[1] tracking-[-1.79px] font-bold md:text-[56px] md:tracking-[-2.5px]
      md:flex-row md:w-full md:pl-[97px] lg:pl-[165px] text-white
      ">Careers</h1>
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
                <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/join-us.jpg" alt="" />

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
                  <h2 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Care to join our mission?</h2>
                  <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                </div>


                <div className='w-full flex items-center justify-center lg:justify-start'>
                  <Button />

                </div>
              </div>
            </div>
          </div>



        </article>

        <article className="wrapper">
          <div className="wrapper-inner px-[32px] md:px-[20.18%] lg:px-[11.45%]  flex flex-col items-center justify-center gap-[103px]
          lg:flex-col lg:justify-between
          ">
            <h2 className="text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px]  md:tracking-[-2.14px] text-center ">Why join us?</h2>

            <div className="w-full flex flex-col  gap-[56px] justify-center items-center lg:flex-row lg:justify-between lg:items-center">
              <div className="relative  flex flex-col gap-[45px] items-center justify-center text-[#495567 ">
                <div className="flex flex-col gap-[105px] items-center justify-center ">
                  <img className="w-[240px] h-[240px] rounded-full" src="/assets/images/our-tech.jpg" alt="" />
                  <div className="absolute top-[181px] left-[110px] w-[96px] h-[96px] rounded-full bg-[#FCB72B] 
                flex items-center justify-center text-[24px] leading-[1.16] tracking-[-1.07px] font-bold 
                 text-[#495567] md:left-[184px] lg:left-[105px]">01</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[27px] text-center">
                  <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Our tech</h3>
                  <p className="text-[#939CAA] text-[15px] leading-[1.66] font-medium font-deca lg:text-center">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </div>
              </div>



              <div className="relative  flex flex-col gap-[45px] items-center justify-center text-[#495567 ">
                <div className="flex flex-col gap-[105px] items-center justify-center ">
                  <img className="w-[240px] h-[240px] rounded-full" src="/assets/images/our-integrity.jpg" alt="" />
                  <div className="absolute top-[181px] left-[110px] w-[96px] h-[96px] rounded-full bg-[#FCB72B] 
                flex items-center justify-center text-[24px] leading-[1.16] tracking-[-1.07px] font-bold
                   text-[#495567] md:left-[184px] lg:left-[92px]">02</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[27px] text-center">
                  <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Our integrity</h3>
                  <p className="text-[#939CAA] text-[15px] leading-[1.66] font-medium font-deca lg:text-center">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </div>
              </div>


              <div className="relative  flex flex-col gap-[45px] items-center justify-center text-[#495567 ">
                <div className="flex flex-col gap-[105px] items-center justify-center ">
                  <img className="w-[240px] h-[240px] rounded-full" src="/assets/images/our-community.jpg" alt="" />
                  <div className="absolute top-[181px] left-[110px] w-[96px] h-[96px] rounded-full bg-[#FCB72B] 
                flex items-center justify-center text-[24px] leading-[1.16] tracking-[-1.07px] font-bold 
                text-[#495567] md:left-[184px] lg:left-[100px]">03</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[27px] text-center">
                  <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Our community</h3>
                  <p className="text-[#939CAA] text-[15px] leading-[1.66] font-medium font-deca lg:text-center">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </div>
              </div>


            </div>
          </div>
        </article>


        <article className="faq-wrapper w-full px-[32px] md:px-[5.07%] lg:px-[11.45%] flex flex-col gap-4 ">

          <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col items-startgap-1">
              <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">General Manager</h3>
              <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">Jakarta, Indonesia</p>
            </div>
            <div className="">
              <button className="py-[14px] w-full px-[61px] bg-[#FCB72B]">Apply</button>
            </div>
          </div>



          <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col items-startgap-1">
              <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">UI/UX Designer</h3>
              <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">Yokohama, Japan</p>
            </div>
            <div className="">
              <button className="py-[14px] w-full px-[61px] bg-[#FCB72B]">Apply</button>
            </div>
          </div>


          <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col items-startgap-1">
              <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Blog Content Copywriter</h3>
              <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">New York, United States</p>
            </div>
            <div className="">
              <button className="py-[14px] w-full px-[61px] bg-[#FCB72B]">Apply</button>
            </div>
          </div>


          <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col items-startgap-1">
              <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Graphic Designer</h3>
              <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">New York, United States</p>
            </div>
            <div className="">
              <button className="py-[14px] w-full px-[61px] bg-[#FCB72B]">Apply</button>
            </div>
          </div>


          <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col items-startgap-1">
              <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Fleet Supervisor</h3>
              <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">Jakarta, Indonesia</p>
            </div>
            <div className="">
              <button className="py-[14px] w-full px-[61px] bg-[#FCB72B]">Apply</button>
            </div>
          </div>


          <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
            <div className="flex flex-col items-startgap-1">
              <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">UX Analyst</h3>
              <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">London, United Kingdom</p>
            </div>
            <div className="">
              <button className="py-[14px] w-full px-[61px] bg-[#FCB72B]">Apply</button>
            </div>
          </div>









        </article>














      </section>


    </>
  )
}

export default Careers