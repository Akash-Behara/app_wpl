import { AlignLeft, Info } from 'lucide-react'
import headerPng from '../assets/images/prdetails_header.png'
import wpllogo from '../assets/images/wpl_prdetails.png'
import { useEffect, useState } from 'react';

import checkTick from '../assets/images/check-tick.png'

const whitespaceRegex = /^\s*$/;
const usernameRegex = /^[a-zA-Z0-9][a-zA-Z0-9_\-]*[a-zA-Z0-9]$/;
const emailIdRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const addressRegex = /^(0x)[0-9a-fA-F]{40}$/;

const isValidUsername = (username) => usernameRegex.test(username);
const isValidEmailId = (emailId) => emailIdRegex.test(emailId);
const isValidAddress = (address) => addressRegex.test(address);

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
  const [formData, setFormData] = useState({
    username:'',
    emailId: '',
    appExp: '',
    ercAddress: '',
    gitTeammates: []
  })

  const [errorMsg, setErrorMsg] = useState({
    username:'',
    emailId: '',
    appExp: '',
    ercAddress: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name == 'gitTeammates') return;
    setFormData((prevdata) => ({...prevdata,[name]: value}))
    console.log(formData);
  }

  const setErrorMsgHelper = (key, value) => {
    setErrorMsg((prevState) => {
      return {
        ...prevState,
        [key]: value
      }
    })    
  }

  const validateForm = () => {
    
    const { username, emailId, appExp, ercAddress } = formData;
    setErrorMsg({
      username: '',
      emailId: '',
      appExp: '',
      ercAddress: ''
    });


    if(whitespaceRegex.test(username) || username == '') setErrorMsgHelper('username','Username is required');
    else if(!isValidUsername(username)) setErrorMsgHelper('username','Invalid Username')
    
    if(whitespaceRegex.test(emailId) || emailId == '') setErrorMsgHelper('emailId','Email is required');
    else if(!isValidEmailId(emailId)) setErrorMsgHelper('emailId','Invalid Email')

    if(whitespaceRegex.test(appExp) || appExp == '') setErrorMsgHelper('appExp','Field is required');
    
    if(whitespaceRegex.test(ercAddress) || ercAddress == '') setErrorMsgHelper('ercAddress','ERC-20 address is required');
    else if(!isValidAddress(ercAddress)) setErrorMsgHelper('ercAddress','Invalid Address')


    console.log('fomrdata',formData);
    if(errorMsg.username == "" && errorMsg.emailId =="" && errorMsg.appExp == "" && errorMsg.ercAddress == "") {
      setIsSubmitDone(true);
    } else {
      alert('Form has errors');
    }
  }

  useEffect(() => {
    setIsSubmitDone(false); 
    setFormData({
      username:'',
      emailId: '',
      appExp: '',
      ercAddress: '',
      gitTeammates: []
    })
    setErrorMsg({
      username:'',
      emailId: '',
      appExp: '',
      ercAddress: ''
    })
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
                                <input 
                                  className={`bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7 ${errorMsg.username && 'border border-errorMsgRedText'}`} 
                                  placeholder='Jhon Doe'
                                  name='username'
                                  onChange={handleChange}
                                />
                                {errorMsg.username && 
                                  <div className='text-errorMsgRedText flex gap-1'>
                                    <Info size={14}  className='' />
                                    <p className='font-inter font-medium text-[12px] leading-[14.4px]'>{errorMsg.username}</p>
                                  </div>
                                }
                            </div>
                            <div className='flex flex-col gap-1 w-44 md:w-full'>
                                <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Your Email</label>
                                <input 
                                  className={`bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7 ${errorMsg.emailId && 'border border-errorMsgRedText'}`}
                                  placeholder='Jhon@Doe.com'
                                  name='emailId'
                                  onChange={handleChange}
                                />
                                {errorMsg.emailId && 
                                  <div className='text-errorMsgRedText flex gap-1'>
                                    <Info size={14}  className='' />
                                    <p className='font-inter font-medium text-[12px] leading-[14.4px]'>{errorMsg.emailId}</p>
                                  </div>
                                }
                            </div>
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Do you have experience designing application?</label>
                            <textarea 
                              className={`bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7 ${errorMsg.appExp && 'border border-errorMsgRedText'}`}
                              placeholder='I am a preety fuckin cool dev'
                              rows={3}
                              name='appExp'
                              onChange={handleChange}
                            />
                            {errorMsg.appExp && 
                              <div className='text-errorMsgRedText flex gap-1'>
                                <Info size={14}  className='' />
                                <p className='font-inter font-medium text-[12px] leading-[14.4px]'>{errorMsg.appExp}</p>
                              </div>
                            }
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Enter your ERC-20 Address</label>
                            <input 
                              className={`bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7 ${errorMsg.ercAddress ? 'border border-errorMsgRedText text-errorMsgRedText' : 'text-white48'}`}
                              placeholder='Jhon'
                              name='ercAddress'
                              onChange={handleChange}
                            />
                            {errorMsg.ercAddress && 
                              <div className='text-errorMsgRedText flex gap-1'>
                                <Info size={14}  className='' />
                                <p className='font-inter font-medium text-[12px] leading-[14.4px]'>{errorMsg.ercAddress}</p>
                              </div>
                            }
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] leading-[15.6px] font-medium text-white32'>Add your teammates from Github</label>
                            <input 
                              className='bg-white7 rounded-[6px] text-white48 placeholder:text-white32 px-3 py-2 text-[14px] focus:outline-0 focus:bg-white7'
                              placeholder='Jhon'
                              name='gitTeammates'
                              onChange={handleChange}
                            />
                        </div>

                        <button 
                          className='w-full text-white48 text-[14px] leading-[20px] bg-cardBlueBg h-[43px] mb-56' 
                          onClick={validateForm}
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