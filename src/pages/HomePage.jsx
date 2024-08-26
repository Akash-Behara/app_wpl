import React from 'react'
import Statistics from '../components/home/Statistics'
import SearchRoles from '../components/home/SearchRoles'
import ExploreGigs from '../components/home/ExploreGigs'
import KYC_Card from '../components/home/KYC_Card'
import ProfileDetailsCard from '../components/home/ProfileDetailsCard'
import BugFixCard from '../components/home/BugFixCard'
import RecentActivityCard from '../components/home/RecentActivityCard'

const HomePage = () => {

  return (
    <div className='flex flex-row justify-between pl-4 mt-4'>
      {/* Left side */}
      <div className='flex flex-col md:px-10 lg:px-[62px] mt-4'>
        <Statistics />
        <SearchRoles />
        <ExploreGigs />
      </div>

      {/* right side */}
      <div className='flex flex-col py-6 px-6 border border-y-0 border-r-0 border-l border-l-primaryYellow/20'>
        <KYC_Card />
        <ProfileDetailsCard />
        <BugFixCard />
        <RecentActivityCard />
      </div>
    </div>
  )
}

export default HomePage