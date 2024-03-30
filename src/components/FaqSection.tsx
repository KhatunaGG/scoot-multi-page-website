import { useState } from "react"


const FaqSection = () => {
    const [number, setNumber] = useState(0)


    return (
        <article className="faq-wrapper px-[32px] md:px-[5.07%] lg:px-[11.45%]">
            <h2 className="text-center mb-[64px] text-[32px] font-bold leading-[1] tracking-[-1.43px]" >FAQs</h2>
            <div className="wrapper-inner flex flex-col items-center justify-center gap-[48px]">
                <div className="work flex flex-col items-center justify-center  lg:flex-row lg:justify-between lg:items-start ">
                    <h3 className="text-2xl leading-[1.16] tracking-[-1.07px] text-[#495567] font-bold lg:whitespace-nowrap lg:w-[230px] lg:text-[40x] ">How it works</h3>
                    <div className="box flex flex-col gap-6 md:w-[689px]  lg:w-[730px]">
                        <div className="q1 w-full bg-[#F2F5F9] p-8 flex flex-col gap-6 hover:bg-[#FFF4DF]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-lg leading-[1.33] tracking-[-0.8px] text-[#495567] font-bold">How do I download the app?</h4>
                                <img
                                    onClick={() => setNumber(1)}
                                    style={{ rotate: number === 1 ? '180deg' : '0deg', transition: number === 1 ? '.5s' : '0' }}
                                    className="w-4 h-2" src="/assets/icons/chevron.svg" alt="" />
                            </div>
                            <div
                                style={{ display: number === 1 ? 'flex' : 'none' }}
                                className="font-thin text-[15px] leading-[1.66] ">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</div>
                        </div>

                        <div className="q1 w-full bg-[#F2F5F9] p-8 flex flex-col gap-6 hover:bg-[#FFF4DF]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-lg leading-[1.33] tracking-[-0.8px] text-[#495567] font-bold">Can I find a nearby Scoots?</h4>
                                <img
                                    onClick={() => setNumber(2)}
                                    style={{ rotate: number === 2 ? '180deg' : '0deg', transition: number === 2 ? '.5s' : '0' }}
                                    className="w-4 h-2" src="/assets/icons/chevron.svg" alt="" />
                            </div>
                            <div
                                style={{ display: number === 2 ? 'flex' : 'none' }}
                                className="hidden font-thin text-[15px] leading-[1.66] ">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</div>
                        </div>


                        <div className="q1 w-full bg-[#F2F5F9] p-8 flex flex-col gap-6 hover:bg-[#FFF4DF]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-lg leading-[1.33] tracking-[-0.8px] text-[#495567] font-bold">Do I need a license to ride?</h4>
                                <img
                                    onClick={() => setNumber(3)}
                                    style={{ rotate: number === 3 ? '180deg' : '0deg', transition: number === 3 ? '.5s' : '0' }}
                                    className="w-4 h-2" src="/assets/icons/chevron.svg" alt="" />
                            </div>
                            <div
                                style={{ display: number === 3 ? 'flex' : 'none' }}
                                className="hidden font-thin text-[15px] leading-[1.66] ">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</div>
                        </div>
                    </div>
                </div>

                <div className="driving flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start">
                    <h3 className="text-2xl leading-[1.16] tracking-[-1.07px] text-[#495567] font-bold lg:whitespace-nowrap lg:w-[230px]">Safe driving</h3>
                    <div className="box flex flex-col gap-6 md:w-[689px]  lg:w-[730px]">
                        <div className="q1 w-full bg-[#F2F5F9] p-8 flex flex-col gap-6 hover:bg-[#FFF4DF]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-lg leading-[1.33] tracking-[-0.8px] text-[#495567] font-bold">Should I wear a helmet?</h4>
                                <img
                                    onClick={() => setNumber(4)}
                                    style={{ rotate: number === 4 ? '180deg' : '0deg', transition: number === 4 ? '.5s' : '0' }}
                                    className="w-4 h-2" src="/assets/icons/chevron.svg" alt="" />
                            </div>
                            <div
                                style={{ display: number === 4 ? 'flex' : 'none' }}
                                className="font-thin text-[15px] leading-[1.66] ">Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.</div>
                        </div>

                        <div className="q1 w-full bg-[#F2F5F9] p-8 flex flex-col gap-6 hover:bg-[#FFF4DF]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-lg leading-[1.33] tracking-[-0.8px] text-[#495567] font-bold">How about the rules & regulations?</h4>
                                <img
                                    onClick={() => setNumber(5)}
                                    style={{ rotate: number === 5 ? '180deg' : '0deg', transition: number === 5 ? '.5s' : '0' }}
                                    className="w-4 h-2" src="/assets/icons/chevron.svg" alt="" />
                            </div>
                            <div
                                style={{ display: number === 5 ? 'flex' : 'none' }}
                                className="hidden font-thin text-[15px] leading-[1.66] ">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</div>
                        </div>

                        <div className="q1 w-full bg-[#F2F5F9] p-8 flex flex-col gap-6 hover:bg-[#FFF4DF]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-lg leading-[1.33] tracking-[-0.8px] text-[#495567] font-bold">What if I damage my Scoot?</h4>
                                <img
                                    onClick={() => setNumber(6)}
                                    style={{ rotate: number === 6 ? '180deg' : '0deg', transition: number === 6 ? '.5s' : '0' }}
                                    className="w-4 h-2" src="/assets/icons/chevron.svg" alt="" />
                            </div>
                            <div
                                style={{ display: number === 6 ? 'flex' : 'none' }}
                                className="hidden font-thin text-[15px] leading-[1.66] ">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default FaqSection