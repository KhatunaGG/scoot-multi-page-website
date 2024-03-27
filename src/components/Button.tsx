
type ButtonPropsType = {
    status?: string;
}

const Button = ({status}: ButtonPropsType ) => {
  return (
    <div className='bg-[#FCB72B] text-[15px] text-bold leading-[1.66] py-[14px] px-[44px] text-white whitespace-nowrap '>
        {status === 'header' ? 'Get Scootin' : 'Learn More'}
    </div>
  )
}

export default Button