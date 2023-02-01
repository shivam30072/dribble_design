import React from 'react'

const Hero = ({setNav, nav}) => {
  return (
    <div className='sm:w-[75%] bg-slate-100 lg:w-full'>
        <div className='flex justify-between w-full'>
            <div className='flex flex-col sm:ml-4 lg:ml-10'>
            <h1 className='font-semibold text-2xl'>Welcome back, John</h1>
            <p className='font-light sm:text-left'>Here are your activities today</p>
            </div>
            <div className='cursor-pointer  mr-2 mt-2 '>
            <img onClick={() => {setNav(!nav)}} className='w-[30px] h-[30px]' src='https://cdn-icons-png.flaticon.com/512/2976/2976215.png' />
            </div>
            </div>
        <div className='w-full mt-2 sm:flex sm:justify-center'>
            <div className='sm:w-[30%] lg:w-[20%] mt-4 mb-4 ml-3 shadow-xl'>
                <img className='w-[40px] sm:ml-12 lg:ml-16 ' src='https://cdn-icons-png.flaticon.com/512/2991/2991108.png' />
                <div className='flex bg-white justify-between rounded-lg p-2'>
                    <div>
                    <p className='text-sm'>568</p>
                    <p className='font-light text-sm'>New activities</p>
                    </div>
                    <div>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/5198/5198491.png' />
                        <p className='text-green-400'>+ 156%</p>
                    </div>
                </div>
            </div>
            <div className='sm:w-[30%] lg:w-[20%] mt-4 mb-4 ml-4 shadow-xl'>
                <img className='w-[40px] sm:ml-12 lg:ml-16 ' src='https://cdn-icons-png.flaticon.com/512/1011/1011528.png' />
                <div className='flex bg-white justify-between rounded-lg p-2'>
                    <div>
                    <p className='text-sm'>2.72k</p>
                    <p className='font-light text-sm'>Tot. activities</p>
                    </div>
                    <div>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/5198/5198491.png' />
                        <p className='text-green-400'>+ 26%</p>
                    </div>
                </div>
            </div>
            <div className='sm:w-[30%] lg:w-[20%] mt-4 mb-4 ml-4 shadow-xl'>
                <img className='w-[40px] sm:ml-12 lg:ml-16 ' src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' />
                <div className='flex bg-white justify-between rounded-lg p-2'>
                    <div>
                    <p className='text-sm'>251</p>
                    <p className='font-light text-sm'>Act. members</p>
                    </div>
                    <div>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/5198/5198491.png' />
                        <p className='text-green-400'>+ 46%</p>
                    </div>
                </div>
            </div>
            <div className='sm:w-[30%] lg:w-[20%] mt-4 mb-4 ml-4 shadow-xl'>
                <img className='w-[40px] sm:ml-12 lg:ml-16 ' src='https://cdn-icons-png.flaticon.com/512/681/681494.png' />
                <div className='flex bg-white justify-between rounded-lg p-2'>
                    <div>
                    <p className='text-sm'>168</p>
                    <p className='font-light text-sm'>New members</p>
                    </div>
                    <div>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/5198/5198491.png' />
                        <p className='text-green-400'>+ 16%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='sm:w-full lg:w-[90%]   mt-4 lg:ml-10 bg-white shadow-2xl rounded-xl'>
            <div className='flex pl-4'>
                <img className='w-[50px] rounded-full' src='https://cdn-icons-png.flaticon.com/512/3048/3048122.png' />
                <div>
                    <span className='font-bold'>John cena</span>
                    <p className='font-light'>5 min ago</p>
                </div>
            </div>
            <div className='ml-16'>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum assumenda, iusto sit corrupti obcaecati quod ratione voluptates quia architecto sed.</p>
                <div className='list-none flex mt-2 p-2'>
                <li className='flex mr-4'><img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/1077/1077035.png' />40 Likes</li>
                <li className='flex'><img className='w-[25px]' src='https://cdn-icons-png.flaticon.com/512/4249/4249907.png' />24 comments</li>
                </div>
            </div>
            <div className='flex justify-center w-[80%] ml-10 mt-6 mb-4 lg:ml-1'>
                <div className='border border-slate-400 w-[80%] rounded-2xl'>
                    <input className='p-2 rounded-2xl w-full bg-slate-200' type='text' placeholder='comment here'/>
                </div>
                <div className='mt-1 ml-2'>
                    <button className=''><img className='w-[30px]' src='https://cdn-icons-png.flaticon.com/512/5297/5297461.png' /></button>
                </div>
            </div>
            <span className='font-light ml-16 lg:ml-20 '>see all comments</span>
        </div>
        <div  className='sm:w-full lg:w-[90%]   mt-4 lg:ml-10 bg-white'>
        <div className='flex pl-4'>
                <img className='w-[50px] rounded-full' src='https://cdn-icons-png.flaticon.com/512/4140/4140048.png' />
                <div>
                    <span className='font-bold'>Randy ortan</span>
                    <p className='font-light'>15 min ago</p>
                </div>
            </div>
            <div className='ml-16'>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='list-none flex mt-2 p-2'>
                <li className='flex mr-4'><img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/1077/1077035.png' />90 Likes</li>
                <li className='flex'><img className='w-[25px]' src='https://cdn-icons-png.flaticon.com/512/4249/4249907.png' />35 comments</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero