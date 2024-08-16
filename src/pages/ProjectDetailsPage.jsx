import headerPng from '../assets/images/prdetails_header.png'
import wpl_prdetails from '../assets/images/wpl_prdetails.png'

import { Clock, Zap } from 'lucide-react'
import USDCsvg from '../assets/svg/usdc.svg'
import MilestoneCard from '../components/projectdetails/MilestoneCard'
import MilestoneStatusCard from '../components/projectdetails/MilestoneStatusCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"



const ProjectDetailsPage = () => {
  return (
    <div>
      <div>
        <img src={headerPng} alt='header' className='h-[200px] w-full'/>
      </div>
      <div className='flex justify-center gap-20 mx-44'>
        <div>
          <div className='translate-y-[-15px]'>
            <img src={wpl_prdetails} alt='wpl_prdetails' className='size-[72px]'/>
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <p className='text-[24px] text-primaryYellow font-gridular leading-7'>A follow along guide for shipping blinks</p>
              <div className='text-[12px] font-medium text-[#FCBF04] flex items-center gap-1 bg-[#FCBF041A] rounded-[4px] px-2 py-1 font-inter'>
                <Zap size={14} className='text-[#FCBF04]'/>
                <p>Bounty</p>
              </div>
            </div>
            <p className='text-[14px] text-white32 leading-5'>@Crediblefi</p>
            <div className='flex gap-2 leading-5 font-inter text-[14px] mt-2'>
              <p className='text-white88'>136 <span className='text-white32'>Interested</span></p>
              <p className='text-white88'>1.99k <span className='text-white32'>Submissions</span></p>
            </div>
          </div>

          <div className='mt-5'>
            <p className='font-inter text-white88 leading-[21px]'>Germany's Superteam is calling on all creative minds to design amazing merch! This is your opportunity to design exclusive t-shirts, stickers, and more that represent the essence of Superteam Germany and the Solana ecosystem.</p>
            <p className='font-inter text-white88 leading-[21px] mt-3'>Some of the winning designs will get turned into physical merch!</p>
          </div>
          <div className='h-[1px] w-full bg-white7 mt-10 mb-3'/>
          <div>
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1" className="border-white7">
                <AccordionTrigger className="text-white48 font-inter hover:no-underline">About</AccordionTrigger>
                <AccordionContent>
                <div className='font-inter text-white88 leading-[21px]'>
                  <p className=''>Germany's Superteam is calling on all creative minds to design amazing merch! This is your opportunity to design exclusive t-shirts, stickers, and more that represent the essence of Superteam Germany and the Solana ecosystem.</p>
                  <p className='mt-3'>Some of the winning designs will get turned into physical merch!</p>
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" defaultValue="item-0" collapsible>
              {dummyMilestones.map((milestone, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-white7">
                  <AccordionTrigger className="text-white48 font-inter hover:no-underline">{milestone?.milestoneNumber}</AccordionTrigger>
                  <AccordionContent>
                    <MilestoneCard data={milestone}/>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className='mt-[35px]'>
          <div className='w-[372px] h-[463px] bg-white4 rounded-[10px]'>
            <div className='flex items-center gap-2 mx-4 py-4'>
              <Clock size={14} className='text-white32'/>
              <p className='text-[14px] text-white32 leading-[20px] font-inter'>Project Deadline in <span className='text-white88 ml-1'>02d 16h 24m</span></p>
            </div>
            <div className='h-[1px] w-full'>
              <div className='h-[1px] w-[40%] bg-primaryYellow'/>
              <div className='h-[1px] translate-y-[-1px] w-full bg-white7'/>
            </div>
            <div className='flex flex-col justify-center items-center mt-8'>
              <p className='text-[14px] text-white32 leading-4 font-inter'>Total Prizes</p>
              <p className='text-[24px] text-white88 leading-[28px] font-gridular flex items-center gap-2'>
                <img src={USDCsvg} alt='usdc' className='size-[24px]'/>
                4000 <span className='text-white48'>USDC</span>
              </p>
            </div>

            <div className='bg-white7 border border-white4 rounded-[8px] px-3 mx-4 mt-4'>
              <Accordion type="single" defaultValue="item-0" collapsible>
                {dummycardmilstones.map((milestone, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-white7">
                    <AccordionTrigger className="text-white48 font-inter hover:no-underline">
                      <div className='flex justify-between items-center w-full text-[13px] font-medium text-white88'>
                        <p>{milestone?.milestoneNumber}</p>
                        <p className='flex items-center gap-1'><img src={USDCsvg} alt='usdc' className='size-[14px]'/>{milestone?.prize} <span className='text-white48'>{milestone?.currency}</span></p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="py-2 border-t border-dashed border-white12">
                      <MilestoneStatusCard data={milestone}/>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage



const dummyMilestones = [
  {milestoneNumber: "Milestone 1:", title: 'Getting started and finding bugs', description: 'Germany\'s Superteam is calling on all creative minds to design amazing merch! This is your opportunity to design exclusive t-shirts, stickers, and more that represent the essence of Superteam Germany and the Solana ecosystem.', subDescription: 'Some of the winning designs will get turned into physical merch!', deliveryTime: '2 weeks', metric: 'Another metric', prize: "1200", currency: "USDC"},
  {milestoneNumber: "Milestone 2:", title: 'Fixing bugs', description: 'Germany\'s Superteam is calling on all creative minds to design amazing merch! This is your opportunity to design exclusive t-shirts, stickers, and more that represent the essence of Superteam Germany and the Solana ecosystem.', subDescription: 'Some of the winning designs will get turned into physical merch!', deliveryTime: '2 weeks', metric: 'Another metric', prize: "1200", currency: "USDC"},
  {milestoneNumber: "Milestone 3:", title: 'Pushing to production', description: 'Germany\'s Superteam is calling on all creative minds to design amazing merch! This is your opportunity to design exclusive t-shirts, stickers, and more that represent the essence of Superteam Germany and the Solana ecosystem.', subDescription: 'Some of the winning designs will get turned into physical merch!', deliveryTime: '2 weeks', metric: 'Another metric', prize: "1200", currency: "USDC"},
]

const dummycardmilstones = [
  {milestoneNumber: "Milestone 1:", prize: "1600", currency: "USDC", milestone_status: "In Progress", starts_in: "21d 12m 45s", need_help: "Join Discord"},
  {milestoneNumber: "Milestone 2:", prize: "1200", currency: "USDC", milestone_status: "In Progress", starts_in: "21d 12m 45s", need_help: "Join Discord"},
  {milestoneNumber: "Milestone 3:", prize: "1200", currency: "USDC", milestone_status: "In Progress", starts_in: "21d 12m 45s", need_help: "Join Discord"},
]