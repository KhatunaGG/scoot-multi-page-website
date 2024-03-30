
type ButtonPropsType = {
  status?: string;
}

const Button = ({ status }: ButtonPropsType) => {
  return (
    <>
      {status !== 'about' && (
        <div className='bg-[#FCB72B] text-[15px] text-bold leading-[1.66] py-[14px] px-[44px] text-white whitespace-nowrap hover:bg-[#939CAA] '>
          {status === 'header' ? 'Get Scootin'
            : status === 'home' ? 'Learn More'
              : status === 'location' ? 'Message Us'
                : status === 'home_2' ? 'Learn More'
                  : status === 'careers-2' ? 'Apply'
                    : 'Say Hello'}
        </div>
      )}
    </>

  )
}

export default Button