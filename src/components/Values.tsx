

const Values = () => {

    
    return (
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
    )
}

export default Values
