import { ArrowLeft, Plus, Upload } from 'lucide-react'
import React, { useState } from 'react'
import CustomModal from '../components/ui/CustomModal'

const EditProfilePage = () => {

    const [showAddProjectModal, setShowAddProjectModal] = useState(false)

    const handleCloseAddProjectModal = () => {
        setShowAddProjectModal(false)
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-full text-left text-white32 text-[13px] font-medium border-t border-b border-white7 flex items-center gap-1 py-2 px-20 mt-[1px]'><ArrowLeft size={14} className='text-white32'/> Back to your Profile</div>
        
        <div className='w-[340px] md:w-[480px] mt-2'>
            <div className='flex items-center gap-4'>
                <div className='bg-[#091044] size-[72px] rounded-[8px] border-[3px] border-[#16237F] flex justify-center items-center'>
                    <Upload size={16} className='text-white32'/>
                </div>
                <div className='text-[14px] font-inter'>
                    <p className='text-white88'>Choose or upload Media</p>
                    <p className='text-white32'>Maximum size 5mb</p>
                </div>
            </div>

            <div className='h-[1px] w-full bg-white7 my-4'/>

            <div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <p className="text-[14px] font-inter text-white88">Edit Basic Details</p>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] font-medium text-white32'>Your Name</label>
                            <input className='bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px]' 
                                placeholder='Jhon Doe'
                            />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] font-medium text-white32'>Your Email</label>
                            <input className='bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px]' 
                                placeholder='Jhon@Doe.com'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[13px] font-medium text-white32'>Write your Bio (max 240 characters)</label>
                        <textarea className='bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px]' 
                            placeholder='I am a preety fuckin cool dev'
                            rows={3}
                        />
                    </div>
                </div>

                <div className='h-[1px] w-full bg-white7 my-6'/>

                <div className='flex flex-col gap-4'>
                    <div>
                        <p className="text-[14px] font-inter text-white88">Add social Links</p>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] font-medium text-white32'>Discord Username</label>
                            <input className='bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px]' 
                                placeholder='Jhon Wick'
                            />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className='text-[13px] font-medium text-white32'>Telegram Username</label>
                            <input className='bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px]' 
                                placeholder='Jhon Wick'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                        <label className='text-[13px] font-medium text-white32'>Email</label>
                        <input className='bg-white7 rounded-[6px] placeholder:text-white32 px-3 py-2 text-[14px]'
                            placeholder='Jhon@Doe.com'
                        />
                    </div>
                </div>

                <div className='h-[1px] w-full bg-white7 my-6'/>

                <div className=''>
                    <p className="text-[14px] font-inter text-white88">Add a Project</p>
                    <div className='mt-4'>
                        <p className='text-[#FAF1B1E0] font-gridular leading-5'>Add something you’re proud of!</p>
                        <p className='text-[12px] text-white32 font-medium font-inter'>Adding PoW increases your chances of landing the gig!</p>
                    </div>
                    <button onClick={() => {console.log('modal'); setShowAddProjectModal(true)}} className='bg-white7 text-white88 rounded-[6px] h-[42px] flex justify-center items-center mt-4 w-full'>
                        <p className='flex items-center gap-1 text-[12px] font-medium font-inter'>Add a Project <Plus size={16} className='text-white32'/></p>
                    </button>
                </div>
            </div>
        </div>

        {showAddProjectModal &&  
            <CustomModal isOpen={showAddProjectModal} closeModal={handleCloseAddProjectModal}>
                <div>HI I AM MODAL</div>
            </CustomModal>
        }
    </div>
  )
}

export default EditProfilePage