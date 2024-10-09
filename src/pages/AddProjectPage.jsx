import { ArrowLeft, Check, CheckCheckIcon, CheckCircle2, ChevronDown, Menu, Plus, Trash, Trophy, Upload, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import USDCsvg from '../assets/svg/usdc.svg'
import DiscordSvg from '../assets/svg/discord.svg'


const AddProjectPage = () => {

    const fileInputRef = useRef(null);


    const [title, setTitle] = useState('')
    const [organisationHandle, setOrganisationHandle] = useState('');
    const [description, setDescription] = useState('');
    const [discordLink, setDiscordLink] = useState('');
    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState('');
    const [errors, setErrors] = useState({}); // State for validation errors

    const [milestones, setMilestones] = useState([]);

    const [submitted, setSubmitted] = useState(false);

    const validateFields = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!organisationHandle) newErrors.organisationHandle = 'Organisation handle is required';
        if (!description) newErrors.description = 'Description is required';
        if (!discordLink) newErrors.discordLink = 'Discord link is required';
        if (!logo) newErrors.logo = 'Logo is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    }

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleMilestoneChange = (index, field, value) => {
        const updatedMilestones = [...milestones];
        updatedMilestones[index] = { ...updatedMilestones[index], [field]: value };
        setMilestones(updatedMilestones);
    };

    const handleAddMilestone = () => {
        const newMilestoneIndex = milestones.length + 1; // Calculate the new milestone index
        setMilestones([...milestones, { title: `Milestone ${newMilestoneIndex}`, description: '', prize: '', currency: 'USDC', deliveryTime: '', timeUnit: 'Weeks' }]);
    };

    const handleSubmit = () => {
        if (validateFields()) {
            // Proceed with form submission
            console.log('Form submitted');
            setSubmitted(true);
        }
    };

    console.log('Milestones:', milestones);

  return (
    <div className='pb-40'>
        <div className='flex items-center gap-1 pl-20 border-b border-white12 py-2'>
            <ArrowLeft size={14} stroke='#ffffff65'/>
            <p className='text-white32 font-inter text-[14px]'>Go back</p>
        </div>

        {!submitted 
            ?  <div className='flex justify-center items-center mt-4'>
                    <div className='max-w-[469px] w-full'>
                        <Accordion type="single" defaultValue="item-1" collapsible>
                            <AccordionItem value={`item-${1}`} key={1} className="border-none">
                                <AccordionTrigger className="text-white48 font-inter hover:no-underline border-b border-primaryYellow">
                                    <div className='flex items-center gap-1'>
                                        <Menu size={14} className='text-primaryYellow'/>
                                        <div className='text-primaryYellow font-inter text-[14px]'>Basic Details</div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="py-2 border-t border-dashed border-white12">
                                    <div>
                                    <div className='flex justify-between items-center mt-4'>
                                            <div className='flex items-center gap-4'>
                                                {logoPreview ? 
                                                    <div className='relative'>
                                                        <img src={logoPreview} alt='dummy' className='size-[72px] aspect-square rounded-md'/>
                                                        <div onClick={() => {setLogoPreview(null)}} className='absolute -top-1 -right-1 bg-white32 rounded-full size-4 flex justify-center items-center cursor-pointer hover:bg-white48'><X size={14} className='text-black/60'/></div>
                                                    </div>
                                                :   <>
                                                        <div onClick={handleUploadClick} className='bg-[#091044] size-[72px] rounded-[8px] border-[3px] border-[#16237F] flex justify-center items-center cursor-pointer'>
                                                            <Upload size={16} className='text-white32'/>
                                                            <input
                                                                name='img'
                                                                type="file"
                                                                ref={fileInputRef}
                                                                onChange={handleLogoChange}
                                                                style={{ display: 'none' }}
                                                            />                           
                                                        </div>
                                                        <div className='text-[14px] font-inter'>
                                                            <p className='text-white88'>Add your logo</p>
                                                            <p className='text-white32'>Recommended 1:1 aspect ratio</p>
                                                            {errors.logo && <p className='text-red-500 font-medium text-[10px]'>{errors.logo}</p>} {/* Error message for logo */}
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            {logoPreview &&
                                                <div onClick={() => {setLogoPreview(null)}} className='flex items-center gap-1 cursor-pointer'><Trash stroke='#E38070' size={15}/> <span className='text-[#E38070] text-[14px] font-inter'>Delete</span></div>
                                            }
                                        </div>

                                        <div className='mt-3'>
                                            <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Title of the project</p>
                                            <div className='bg-white7 rounded-md px-3 py-2'>
                                                <input 
                                                    type='text' 
                                                    className='bg-transparent text-white88 placeholder:text-white64 outline-none border-none w-full' 
                                                    value={title} 
                                                    onChange={(e) => setTitle(e.target.value)} 
                                                />
                                            </div>
                                            {errors.title && <p className='text-red-500 font-medium text-[10px]'>{errors.title}</p>} {/* Error message */}
                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Organisation handle</p>
                                            <div className='bg-white7 rounded-md px-3 py-2'>
                                                <input 
                                                    type='text' 
                                                    className='bg-transparent text-white88 placeholder:text-white64 outline-none border-none w-full' 
                                                    value={organisationHandle} 
                                                    onChange={(e) => setOrganisationHandle(e.target.value)} 
                                                />
                                            </div>
                                            {errors.organisationHandle && <p className='text-red-500 font-medium text-[10px]'>{errors.organisationHandle}</p>} {/* Error message */}
                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Add description (240 character)</p>
                                            <div className='bg-white7 rounded-md px-3 py-2'>
                                                <textarea 
                                                    type='text' 
                                                    className='bg-transparent text-white88 placeholder:text-white64 outline-none border-none w-full' 
                                                    rows={4} 
                                                    value={description} 
                                                    onChange={(e) => setDescription(e.target.value)} 
                                                />
                                            </div>
                                            {errors.description && <p className='text-red-500 font-medium text-[10px]'>{errors.description}</p>} {/* Error message */}
                                        </div>

                                        <div className='mt-3'>
                                            <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Discord Link</p>
                                            <div className='bg-white7 rounded-md px-3 py-2 flex items-center gap-2'>
                                                <img src={DiscordSvg} alt='discord' className='size-[20px]'/>
                                                <input 
                                                    type='text' 
                                                    placeholder='discord.gg' 
                                                    className='bg-transparent text-white88 placeholder:text-white32 outline-none border-none w-full' 
                                                    value={discordLink} 
                                                    onChange={(e) => setDiscordLink(e.target.value)} 
                                                />
                                            </div>
                                            {errors.discordLink && <p className='text-red-500 font-medium text-[10px]'>{errors.discordLink}</p>} {/* Error message */}
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <div className='border border-dashed border-white12 my-4'/>
                        
                        <Accordion type="single" defaultValue="item-2" collapsible>
                            <AccordionItem value={`item-${2}`} key={2} className="border-none">
                                <AccordionTrigger className="text-white48 font-inter hover:no-underline border-b border-primaryYellow">
                                    <div className='flex items-center gap-1'>
                                        <Menu size={14} className='text-primaryYellow'/>
                                        <div className='text-primaryYellow font-inter text-[14px]'>Project Details</div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="py-2">
                                    <div>
                                        <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>What's the project about? (240 character)</p>
                                        <div className='bg-white7 rounded-md px-3 py-2'>
                                            <textarea type='text' className='bg-transparent text-white88 placeholder:text-white64 outline-none border-none w-full' rows={4}/>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <div className='border border-dashed border-white12 my-4'/>

                        <div>
                            {milestones.map((milestone, index) => (
                                <Accordion key={index} type="single" defaultValue={`item-${index}`} collapsible>
                                    <AccordionItem value={`item-${index}`} key={index} className="border-none">
                                        <AccordionTrigger className="text-white48 font-inter hover:no-underline border-b border-primaryYellow">
                                            <div className='flex items-center gap-1'>
                                                <Trophy size={14} className='text-primaryYellow'/>
                                                <div className='text-primaryYellow font-inter text-[14px]'>{milestone.title}</div> {/* Display milestone title */}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="py-2">
                                            <div>
                                                <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Add Milestone goals</p>
                                                <div className='bg-white7 rounded-md px-3 py-2'>
                                                    <textarea 
                                                        type='text' 
                                                        className='bg-transparent text-white88 placeholder:text-white64 outline-none border-none w-full' 
                                                        rows={4}
                                                        value={milestone.description} 
                                                        onChange={(e) => handleMilestoneChange(index, 'description', e.target.value)} 
                                                    />
                                                </div>
                                                <div className='mt-3'>
                                                    <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Milestone budget</p>
                                                    <div className='flex items-center gap-2 w-full'>
                                                        <div className='bg-[#091044] rounded-md py-2 w-[90px] flex justify-center items-center gap-1'>
                                                            <img src={USDCsvg} alt='usdc' className='size-[14px] rounded-sm'/>
                                                            <p className='text-white88 font-semibold font-inter text-[12px]'>{milestone.currency}</p>
                                                        </div>
                                                        <div className='w-full'>
                                                            <div className='bg-white7 rounded-md px-3 py-2'>
                                                                <input 
                                                                    type='text' 
                                                                    placeholder='1200' 
                                                                    className='bg-transparent text-white88 placeholder:text-white32 outline-none border-none w-full'
                                                                    value={milestone.prize} 
                                                                    onChange={(e) => handleMilestoneChange(index, 'prize', e.target.value)} 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3'>
                                                    <p className='text-[13px] font-semibold text-white32 font-inter mb-[6px]'>Delivery Time</p>
                                                    <div className='flex items-center gap-2 w-full mt-2'>
                                                        <div className='bg-[#091044] rounded-md py-2 w-[90px] flex justify-center items-center gap-1'>
                                                            <select 
                                                                className='bg-transparent text-white88 outline-none border-none w-full'
                                                                value={milestone.timeUnit}
                                                                onChange={(e) => handleMilestoneChange(index, 'timeUnit', e.target.value)}
                                                            >
                                                                <option value="Days">Days</option>
                                                                <option value="Weeks">Weeks</option>
                                                                <option value="Months">Months</option>
                                                            </select>
                                                        </div>
                                                        <div className='w-full'>
                                                            <div className='bg-white7 rounded-md px-3 py-2'>
                                                                <input 
                                                                    type='number' 
                                                                    placeholder='Enter delivery time' 
                                                                    className='bg-transparent text-white88 placeholder:text-white32 outline-none border-none w-full'
                                                                    value={milestone.deliveryTime} 
                                                                    onChange={(e) => handleMilestoneChange(index, 'deliveryTime', e.target.value)} 
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </div>

                        <div className='mt-4'>
                            <button className='flex justify-center items-center w-full border border-primaryYellow h-[43px]' onClick={handleAddMilestone}>
                                <Plus size={14} className='text-primaryYellow'/>
                                <p className='text-primaryYellow font-gridular text-[14px]'>Add milestone</p>
                            </button>
                        </div>                      
                    </div>
                </div>
            :   <div className='flex justify-center items-center mt-4'>
                    <div className='max-w-[469px] w-full'>
                        <div className='flex gap-4 border border-dashed border-[#FFFFFF1F] bg-[#FCBF041A] rounded-md px-4 py-3'>
                            <div>
                                <img src={logoPreview} alt='dummy' className='size-[72px] aspect-square rounded-md'/>
                            </div>
                            <div>
                                <p className='text-white88 font-gridular text-[20px] leading-[24px]'>{title}</p>
                                <p className='text-white88 font-semibold text-[13px] font-inter'>@credbii</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-8'>
                            <div><CheckCircle2 fill='#FBF1B8' strokeWidth={1} size={54}/></div>
                            <div className='text-white font-inter'>Added Project</div>
                            <p className='text-white32 text-[13px] font-semibold font-inter'>You can now view updated details of the project overview</p>
                        </div>

                        <div className='mt-4'>
                            <button className='flex justify-center items-center py-3 px-4 border border-primaryYellow text-primaryYellow w-full font-gridular'>View Project</button>
                        </div>
                    </div>
                </div>
        }

            <div className='bg-[#091044] px-20 py-4 fixed bottom-0 left-0 w-full flex justify-between items-center'>
                    
                    <div className='flex items-center gap-2'>
                        <p className='text-white88 font-semibold font-inter text-[13px]'>Project Total Sum</p>
                        <div className='bg-white4 rounded-md flex items-center gap-1 h-8 px-3'>
                            <img src={USDCsvg} alt='usdc' className='size-[14px]'/>
                            <p className='text-white88 text-[12px] font-semibold font-inter'>1200</p>
                            <p className='text-white32 font-semibold font-inter text-[12px]'>USDC</p>
                        </div>
                    </div>
                    <div>
                        <button disabled={submitted} className={`bg-primaryYellow px-6 py-2 rounded-md text-[14px] font-inter flex justify-center items-center gap-1 ${submitted ? "opacity-25" : ""}`} onClick={handleSubmit}><CheckCheckIcon size={20}/> Save</button>
                    </div>
            </div>
    </div>
  )
}

export default AddProjectPage