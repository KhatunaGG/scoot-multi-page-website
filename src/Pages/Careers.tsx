import CardRight from "../components/CardRight"
import Section_2 from "../components/Section_2"
import Values from "../components/Values"


const Careers = () => {
  return (
    <>

      <header className="careers flex items-center justify-center ">
        <h1 className="text-[40px] leading-[1] tracking-[-1.79px] font-bold md:text-[56px] md:tracking-[-2.5px] md:flex-row md:w-full md:pl-[97px] lg:pl-[165px] text-white">Careers</h1>
        <img className="hidden md:flex mr-[-35px] " src="/assets/patterns/white-circles.svg" alt="" />
      </header>

      <section className="container w-full  flex flex-col items-center justify-center pt-[72px] md:pt-[144px] lg:pt-[120px] gap-[120px] mb-[120px] lg:mb-[160px]">
        <article className="wrapper gap-[120px] flex flex-col items-center justify-center ">
          <CardRight />
        </article>

        <article className="wrapper">
          <div className="wrapper-inner px-[32px] md:px-[20.18%] lg:px-[11.45%]  flex flex-col items-center justify-center gap-[103px] lg:flex-col lg:justify-between ">
            <h2 className="text-[27px] leading-[1] tracking-[-1.43px] font-bold md:text-[48px]  md:tracking-[-2.14px] text-center ">Why join us?</h2>
            <Values />
          </div>
        </article>

        <Section_2 />
      </section>
    </>
  )
}

export default Careers