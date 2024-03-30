import Button from "./Button";

type CardLeftPropsType = {
  status?: string;
}


const CardLeft = ({ status }: CardLeftPropsType) => {


  return (
    <div className="cardLeft  relative ">
      <img className='hidden absolute -z-30 top-0 left-[0] md:flex' src="/assets/Mask2.png" alt="" />
      <section className='cardLeft flex flex-col items-center gap-[56px] relative lg:flex-row lg:items-center lg:justify-center px-[32px] md:px-[12.63%] lg:px-[11.45%]'>
        <div className="flex flex-col items-center justify-center  relative  lg:flex-1">
          <img className='rounded-full md:w-[445px] md:h-[445px]'
            src={status === 'home' ? "/assets/images/near-you.jpg"
              : "/assets/images/better-living.jpg"}
            alt="" />
          <img className='absolute top-[33px] left-[-65px] md:top-[7px] md:left-[-163px] lg:flex lg:top-0 lg:left-[-145px] ' src="/assets/Group13.png" alt="" />
        </div>
        <div className='box_1 relative flex flex-col gap-[32px] text-center lg:flex-1 '>
          <div className="box_2 flex flex-col gap-[32px] text-center ">
            <h2 className='text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px] md:leading-[1] md:tracking-[-2.14px] lg:text-left '>
              {status === 'home' ? 'Coming to a city near you'
                : 'Better urban living'}
            </h2>
            <p className='text-[15px] leading-[1.66] font-medium font-deca text-[#939CAA] lg:text-left'>
              {status === 'home' ? 'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.'
                : " We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride. "
              }
            </p>
          </div>
          <div className='w-full flex items-center justify-center lg:justify-start'>
            <Button status={status} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardLeft