import { useContext } from 'react'
import { GlobalState } from '../App';
import { pages } from '../data';
import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion'



const listVariants2 = {
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 }
    }),
    hidden: { opacity: 0, y: 100 }
}




const Overlay = () => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { setOpen } = context



    return (
        <div className="w-full h-[650px]  md:hidden lg:hidden absolute top-[99.67%] left-0 z-50 flex flex-row ">
            <div className="overlay w-[68.26%] bg-[#495567] h-[650px] left-0 z-50 px-8 ">
                <ul
                    className="w-full pl-8 pt-[64px] flex flex-col gap-6 mb-[339px]">
                    {pages.map((item, i) => (
                        <Link to={`/${item}`} key={i}  >
                            <motion.li
                                variants={listVariants2}
                                initial={'hidden'}
                                animate={'visible'}
                                custom={i}
                                whileHover={{ color: '#FCB72B' }}
                                onClick={() => setOpen(false)}
                                className="text-white font-bold tex-[18px] leading-[1.38] capitalize hover:text-[#FCB72B]">{item}</motion.li>
                        </Link>
                    ))}
                </ul>
                <Button />
            </div>
            <div className="w-[31.73%] bg-[black] opacity-80"></div>
        </div>
    )
}

export default Overlay