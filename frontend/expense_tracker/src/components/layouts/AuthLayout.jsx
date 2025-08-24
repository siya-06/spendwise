import React from 'react'
import newimg from "../../assets/images/new.png"
import {LuTrendingUpDown} from "react-icons/lu"

const AuthLayout = ({children}) => {
  return (
    <div>
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>
            EXPENSE TRACKER
        </h2>
        {children}
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative '>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>

        <div className='grid grid-cols-1 z-20'>
            <StatsInfoCard
            icon={<LuTrendingUpDown/>}
            label="track your income & expenses"
            value="430,000"
            color="bg-primary"
            />
        </div>

        <img
        src={newimg}
        alt="expense tracker"
        className='w-28 h-28 object-cover rounded-lg '
        />
      </div>
    </div>
  )
}

export default AuthLayout

const StatsInfoCard = ({icon,label,value,color}) =>{
    return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10'>
        <div className={`w-12 h-12 flex items-center justify-centertext-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
            {icon}
        </div> 
        <div>
            <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
            <span className="text-[20px]">${value}</span>
        </div>
    </div>
}
