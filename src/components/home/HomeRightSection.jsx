import React from 'react'
import KYC_Card from './KYC_Card'
import ProfileDetailsCard from './ProfileDetailsCard'
import BugFixCard from './BugFixCard'
import RecentActivityCard from './RecentActivityCard'

const HomeRightSection = () => {
  return (
    <div className='flex flex-col py-6 px-6 border border-y-0 border-r-0 border-l border-l-primaryYellow/20'>
			<KYC_Card />
			<ProfileDetailsCard />
			<BugFixCard />
			<RecentActivityCard />
    </div>
  )
}

export default HomeRightSection