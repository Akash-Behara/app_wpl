import { AlignLeft, Plus, X } from 'lucide-react'
import headerPng from '../assets/images/prdetails_header.png'
import wpllogo from '../assets/images/wpl_prdetails.png'
import { useEffect, useState } from 'react';

import checkTick from '../assets/images/check-tick.png'

const FormPage = () => {

  const submittedDetails = () => {
    return(
      <div className='flex flex-col justify-evenly gap-4 h-[230px] items-center'>
        <div className='h-[1px] w-full bg-white7'/>
        <img width={60} src={checkTick} alt="" />
        <div className='flex flex-col items-center gap-1'>
          <p className='font-inter text-[16px] leading-[22px] text-white'>Submitted details</p>
          <p className='text-[13px] leading-[15.6px] font-medium text-white32'>Explore other bounties/projects that you can help.</p>
        </div>
        <button className='w-full text-white48 font-gridular text-[14px] leading-[20px] bg-cardBlueBg h-[43px]'
          onClick={() => setIsSubmitDone(false)}
        >
          Explore Projects
        </button>
      </div>
    )
  }

  const [isSubmitDone, setIsSubmitDone] = useState(false);

  useEffect(() => {
    setIsSubmitDone(false)
  }, []);

  return (
    <div className='overflow-x-hidden flex flex-col'>
      <div>
        <img src={headerPng} alt='header' className='h-[200px] w-full'/>
      </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='w-[360px] md:w-[496px]'>
            <div className='-translate-y-8'>
              <img src={wpllogo} alt="WPL Logo" className='size-[72px]'/>
            </div>

            <div>
              <p className='font-gridular text-[24px] leading-[28.8px] text-primaryYellow mb-2'>A follow along guide for shipping blinks</p>
              <p className='font-inter text-[14px] leading-[20px] text-white32 mb-3'>@Crediblefi</p>
              <div className='flex flex-row gap-2 font-inter text-[14px] leading-[20px] text-white32'>
                <p><span className='text-white88'>136</span> Interested</p>
                <p><span className='text-white88'>1.99k</span> Submissions</p>
              </div>
            </div>  


            {
              isSubmitDone ?
              submittedDetails() :
              <div className='mt-2'>
                <div>
                    <div className='flex flex-col gap-4 font-inter'>
                        <div className='mt-8 flex flex-row items-center gap-1 text-primaryYellow'>
                          <AlignLeft size={14} />
                          <p className="text-[14px] leading-[20px]">Fill the Information</p>
                        </div>
                        <div className='h-[1px] w-full bg-primaryYellow'/>
                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col gap-1 w-40 md:w-full'>
                                <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Your Name</label>
                                <input className='bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7' 
                                    placeholder='Jhon Doe'
                                />
                            </div>
                            <div className='flex flex-col gap-1 w-44 md:w-full'>
                                <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Your Email</label>
                                <input className='bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7' 
                                    placeholder='Jhon@Doe.com'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Do you have experience designing application?</label>
                            <textarea className='bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7' 
                                placeholder='I am a preety fuckin cool dev'
                                rows={3}
                            />
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Enter your ERC-20 Address</label>
                            <input className='bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7'
                                placeholder='Jhon'
                            />
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Add your teammates from Github</label>
                            <input className='bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7'
                                placeholder='Jhon'
                            />
                        </div>

                        {/* <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Add your teammates from Github</label> */}
                        <button className='w-full text-white48 text-[14px] leading-[20px] bg-cardBlueBg h-[43px] mb-56' onClick={() => setIsSubmitDone(true)}
                        >
                          Submit
                        </button>

                    </div>

                </div>
              </div>
            }
          </div>
        </div>

      
    </div>
  )
}

export default FormPage