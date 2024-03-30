

const CardLeft = () => {
    return (
        <section className='flex flex-col items-center gap-[56px] relative lg:flex-row lg:items-center lg:justify-center'>
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
                
                </div>
            </div>
        </section>
    )
}

export default CardLeft