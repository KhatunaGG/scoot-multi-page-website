


const Footer = () => {
  return (
    <footer className="footer w-full relative text-white">
                <div className='futter-wrapper px-8 py-[88px] flex flex-col items-center justify-center text-center gap-10 lg:flex-row 
                lg:px-[165px] lg:py-[102px] lg:justify-between lg:text-left lg:tracking-[-2.14px]'>
                    <h2 className='text-[32px] font-bold leading-[1] tracking-[-1.43px] lg:w-[415px] lg:text-[47px]'>Sign up and Scoot off today</h2>
                    <div className='flex flex-row gap-[12.86px]'>
                        <a href="">
                            <img className='w-[113.57px] h-10 lg:w-[156px] lg:h-[56px]' src="assets/icons/app-store.svg" alt="" />
                        </a>
                        <a href="">
                            <img className='w-[130px] h-10 lg:w-[182px] lg:h-[56px]' src="assets/icons/google-play.svg" alt="" />
                        </a>
                    </div>
                </div>


                <div className='div absolute bottom-[-438px]  left-0  w-full bg-[#333A44] h-[438px] pt-[64px] px-[133px] md:h-[96px] md:px-8 md:py-8 md:bottom-[-95px] lg:px-[165px]'>
                    <div className='flex flex-col gap-[85px] items-center justify-center text-center md:flex-row md:justify-between'>
                        <div className='box-2 flex flex-col items-center justify-center gap-[41.44px]  md:justify-between md:flex-row'>
                            <div>
                                <img src="/assets/logo.svg" alt="" />
                            </div>
                            <div className='flex flex-col gap-4 text-[#939CAA] font-bold text-[15px] leading-[1.66] md:flex-row text-center'>
                                <a href="">About</a>
                                <a href="">Location</a>
                                <a href="">Careers</a>
                            </div>
                        </div>

                        <div className='box-2 flex flex-row gap-6 items-center justify-center'>
                            <a href="">
                                <img src="assets/icons/facebook.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="assets/icons/twitter.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="assets/icons/instagram.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
  )
}

export default Footer