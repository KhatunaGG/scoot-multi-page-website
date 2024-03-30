import Button from "./Button"

type CardRigthPropsType = {
  status?: string;

}


const CardRight = ({ status }: CardRigthPropsType) => {


  return (
    <div className="cardRight  relative ">
      <img className='hidden absolute -z-30 top-0 right-[0px] md:flex' src="/assets/Mask.png" alt="" />
      <div className='flex flex-col items-center gap-[56px] lg:flex-row lg:items-center lg:justify-center
          px-[32px] md:px-[12.63%] lg:px-[11.45%]
          '>
        <div className="flex flex-col items-center justify-center  relative lg:order-2 lg:flex-1">
          <img className='rounded-full md:w-[445px] md:h-[445px]'
            src={
              status === 'about' ? "/assets/images/digital-era.jpg"
                : status === 'home' ? "/assets/images/telemetry.jpg"
                  : status === 'home_2' ? "/assets/images/payments.jpg"
                    : "/assets/images/join-us.jpg"}
            alt="" />
          <img className='absolute top-[130px] right-[-68px] md:hidden' src="/assets/section_2.png" alt="" />
          <img className='hidden absolute bottom-[50px] right-[-200px] md:flex lg:hidden' src="/assets/patterns/left-downward-arrow.svg" alt="" />
          <img className='hidden absolute bottom-[30px] right-[-410px] lg:flex lg:bottom-[45px] lg:right-[-145px]' src="/assets/Group32.svg" alt="" />
        </div>
        <div className='box_1 relative flex flex-col gap-[32px] text-center lg:order-1 lg:flex-1 '>
          <div className="box_2 flex flex-col gap-[32px] text-center ">
            <h2 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>
              {status === 'home' ? "Easy to use riding telemetry"
                : status === 'about' ? 'Mobility for the digital era'
                  : status === 'home_2' ? 'Zero hassle payments'
                    : 'Care to join our mission?'}
            </h2>
            <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>
              {status === 'home'
                ? "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                : status === 'about'
                  ? "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
                  : status === 'home_2' ? 'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.'
                    : 'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!'
              }
            </p>
          </div>
          <div className='w-full flex items-center justify-center lg:justify-start'>
            <Button
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRight




