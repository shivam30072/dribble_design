import React from 'react'

const Navbar = ({setNav, nav}) => {
  return (
   <>
   {nav && 
    <div className=' sm:w-[25%] lg:w-[15%] h-[100vh] flex-col w-[1500px] transition  delay-150 duration-700'>
    <div className='pt-6 pl-4 flex'>
       <img className='w-[40px]' src='https://cdn-icons-png.flaticon.com/512/4213/4213659.png'></img>
       <span className='pt-2 font-bold text-xl'> HiteddY!</span>
    </div>
     <div className='mt-4 flex border border-black w-[80%] ml-4 rounded-xl bg-slate-200 shadow-xl'>
        <img className='w-[25px] rounded-xl' src='https://cdn-icons-png.flaticon.com/512/1828/1828673.png' />
        <span className='pl-2 font-bold'>Dashboard</span>
     </div>
     <div className='list-none mt-8 w-[80%] ml-4 font-light'>
        <li className='flex pl-8'><img className='w-[20px] mr-2 lg:mr-4' src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' />Profile</li>
        <li className='flex pl-7 mt-4'><img className='w-[30px] lg:mr-3' src='https://cdn-icons-png.flaticon.com/512/2352/2352167.png' />members</li>
        <li className='flex pl-8 mt-4'><img className='w-[20px] mr-2 lg:mr-4' src='https://cdn-icons-png.flaticon.com/512/1548/1548914.png' />analytics</li>
        <li className='flex pl-8 mt-4'><img className='w-[20px] mr-1 lg:mr-4' src='https://cdn-icons-png.flaticon.com/512/2991/2991112.png' />document</li>
        <li  className='flex pl-8 mt-4'><img className='w-[20px] mr-1 lg:mr-4' src='https://cdn-icons-png.flaticon.com/512/2040/2040504.png' />setting</li>
     </div>
     <div className='lg:left-[3%] font-light absolute bottom-[5%] left-[6%]'>
        <li className='list-none flex'><img className='w-[20px] mr-2 lg:mr-4' src='https://cdn-icons-png.flaticon.com/512/992/992680.png' />Logout</li>
     </div>

    </div>
}
    </>
  )
}

export default Navbar