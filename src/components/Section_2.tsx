import Button from './Button'



const Section_2 = () => {


    return (
        <article className="faq-wrapper w-full px-[32px] md:px-[5.07%] lg:px-[11.45%] flex flex-col gap-4 ">
            <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
                <div className="flex flex-col items-startgap-1">
                    <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">General Manager</h3>
                    <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">Jakarta, Indonesia</p>
                </div>
                <div className=" px-[17px] bg-[#FCB72B] text-white hover:bg-[#939CAA] ">
                    <Button status="careers-2" />
                </div>
            </div>


            <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
                <div className="flex flex-col items-startgap-1">
                    <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">UI/UX Designer</h3>
                    <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">Yokohama, Japan</p>
                </div>
                <div className=" px-[17px] bg-[#FCB72B] text-white hover:bg-[#939CAA] ">
                    <Button status="careers-2" />
                </div>
            </div>

            <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
                <div className="flex flex-col items-startgap-1">
                    <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Blog Content Copywriter</h3>
                    <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">New York, United States</p>
                </div>
                <div className=" px-[17px] bg-[#FCB72B] text-white hover:bg-[#939CAA] ">
                    <Button status="careers-2" />
                </div>
            </div>

            <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
                <div className="flex flex-col items-startgap-1">
                    <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Graphic Designer</h3>
                    <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">New York, United States</p>
                </div>
                <div className=" px-[17px] bg-[#FCB72B] text-white hover:bg-[#939CAA] ">
                    <Button status="careers-2" />
                </div>
            </div>

            <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
                <div className="flex flex-col items-startgap-1">
                    <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">Fleet Supervisor</h3>
                    <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">Jakarta, Indonesia</p>
                </div>
                <div className=" px-[17px] bg-[#FCB72B] text-white hover:bg-[#939CAA] ">
                    <Button status="careers-2" />
                </div>
            </div>

            <div className="item w-full flex flex-col items-center justify-center gap-4 pt-[36px] px-8 pb-8 bg-[#F2F5F9]  md:flex-row md:items-center md:justify-between ">
                <div className="flex flex-col items-startgap-1">
                    <h3 className="text-[24px] leading-[1.16] tracking-[-1.07px] font-bold text-[#495567]">UX Analyst</h3>
                    <p className="text-[#939CAA] 'text-[15px] leading-[1.66] font-medium font-deca text-center md:text-left">London, United Kingdom</p>
                </div>
                <div className=" px-[17px] bg-[#FCB72B] text-white hover:bg-[#939CAA] ">
                    <Button status="careers-2" />
                </div>
            </div>
        </article>
    )
}

export default Section_2