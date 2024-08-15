import React from 'react'
import headerPng from '../assets/images/prdetails_header.png'
import wpl_prdetails from '../assets/images/wpl_prdetails.png'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import MilestoneCard from '../components/projectdetails/milestoneCard'
import { Clock } from 'lucide-react'
import MilestoneStatusCard from '../components/projectdetails/MilestoneStatusCard'
import USDCsvg from '../assets/svg/usdc.svg'



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
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.02695 4.18955L4.90495 1.93343C5.72392 1.29142 6.13341 0.970419 6.41375 1.00214C6.65641 1.0296 6.86993 1.18499 6.98224 1.41584C7.11199 1.68255 6.98041 2.20579 6.71727 3.25229L6.49679 4.12911C6.39144 4.54807 6.33877 4.75756 6.37504 4.93943C6.40696 5.0994 6.48557 5.24451 6.59963 5.35394C6.7293 5.47836 6.92589 5.53449 7.31905 5.64675L7.57415 5.71958C8.33023 5.93547 8.70827 6.04341 8.85941 6.26315C8.99082 6.45422 9.03295 6.69886 8.97375 6.9272C8.90567 7.1898 8.58821 7.43374 7.95332 7.92159L5.12744 10.093C4.31353 10.7184 3.90657 11.0311 3.62762 10.9976C3.38611 10.9685 3.17422 10.8127 3.06299 10.5825C2.9345 10.3165 3.06436 9.80005 3.32407 8.7672L3.52118 7.9833C3.62653 7.56434 3.67921 7.35486 3.64293 7.17299C3.61102 7.01301 3.5324 6.86791 3.41834 6.75847C3.28867 6.63406 3.09209 6.57793 2.69892 6.46567L2.41507 6.38462C1.66693 6.171 1.29285 6.06419 1.14182 5.84591C1.01047 5.65608 0.967457 5.41281 1.02497 5.18506C1.09111 4.92318 1.40306 4.67863 2.02695 4.18955Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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
            <div className='h-[1px] w-[60%] bg-primaryYellow'/>
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