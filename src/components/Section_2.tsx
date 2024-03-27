
import Button from './Button'
import CardLeft from './CardLeft'
import CardRight from './CardRight'

const Section_2 = () => {
    return (


        <div className='section_2 px-[32px]  flex flex-col items-center justify-center gap-[120px] pb-[120px]'>

            <CardRight />
            {/* <div className='flex flex-col items-center gap-[56px] relative lg:flex-row lg:items-center lg:justify-center '>
                <img className='hidden absolute -z-30 top-0 right-[-129px] md:flex' src="/assets/Mask.png" alt="" />
                <div className="flex flex-col items-center justify-center  relative lg:order-2 lg:flex-1">
                    <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/telemetry.jpg" alt="" />
                    <img className='absolute top-[130px] right-[-68px] md:hidden' src="/assets/section_2.png" alt="" />
                    <img className='hidden absolute bottom-[50px] right-[-200px] md:flex lg:hidden' src="/assets/patterns/left-downward-arrow.svg" alt="" />
                    <img className='hidden absolute bottom-[30px] right-[-410px] lg:flex lg:bottom-[45px] lg:right-[-130px]' src="/assets/Group32.svg" alt="" />
                </div>
                <div className='box_1 relative flex flex-col gap-[32px] text-center lg:order-1 lg:flex-1 '>
                    <div className="box_2 flex flex-col gap-[32px] text-center ">
                        <h1 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Easy to use riding telemetry</h1>
                        <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                    </div>
                    <div className='w-full flex items-center justify-center lg:justify-start'>
                       <Button /> 
                    </div>
                </div>
            </div> */}




            <CardLeft />
            {/* <div className='flex flex-col items-center gap-[56px] relative lg:flex-row lg:items-center lg:justify-center'>
                <img className='hidden absolute -z-30 top-0 left-[-129px] md:flex' src="/assets/Mask2.png" alt="" />
                <div className="flex flex-col items-center justify-center  relative  lg:flex-1">
                    <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/near-you.jpg" alt="" />
                    <img className='absolute top-[33px] left-[-65px] md:top-[7px] md:left-[-163px] lg:flex lg:top-0 lg:left-[-130px] ' src="/assets/Group13.png" alt="" />
                </div>
                <div className='box_1 relative flex flex-col gap-[32px] text-center lg:flex-1 '>
                    <div className="box_2 flex flex-col gap-[32px] text-center ">
                        <h1 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Coming to a city near you</h1>
                        <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                    </div>
                    <div className='w-full flex items-center justify-center lg:justify-start'>
                       <Button /> 
                    </div>
                </div>
            </div> */}


            <CardRight
            status='isThirdCard'
            /> 



            {/* <div className='flex flex-col items-center gap-[56px] relative lg:flex-row lg:items-center lg:justify-center '>
                <img className='hidden absolute -z-30 top-0 right-[-129px] md:flex' src="/assets/Mask.png" alt="" />
                <div className="flex flex-col items-center justify-center  relative lg:order-2 lg:flex-1">
                    <img className='rounded-full md:w-[445px] md:h-[445px]' src="/assets/images/payments.jpg" alt="" />
                    <img className='absolute top-[130px] right-[-68px] md:hidden' src="/assets/section_2.png" alt="" />


                    <img className='HHHH hidden absolute top-0 right-[0px] md:right-[-162px] md:flex lg:hidden z-40' src="/assets/Group17.png" alt="" />


                    <img className='hidden absolute bottom-[30px] right-[-410px] lg:flex lg:bottom-[45px] lg:right-[-130px]' src="/assets/Group32.svg" alt="" />
                </div>
                <div className='box_1 relative flex flex-col gap-[32px] text-center lg:order-1 lg:flex-1 '>
                    <div className="box_2 flex flex-col gap-[32px] text-center ">
                        <h1 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>Zero hassle payments</h1>
                        <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                    </div>
                    <div className='w-full flex items-center justify-center lg:justify-start'>
                        <Button />
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export default Section_2