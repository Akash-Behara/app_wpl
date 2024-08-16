import React from 'react'
import Statistics from '../components/home/Statistics'
import SearchRoles from '../components/home/SearchRoles'
import ExploreGigs from '../components/home/ExploreGigs'
import { useSelector } from 'react-redux'

const HomePage = () => {

  return (
    <div className='flex flex-row px-8 mt-4'>
      {/* Left side */}
      <div className='flex flex-col px-12 mt-4'>
        <Statistics />
        <SearchRoles />
        <ExploreGigs />
      </div>

      {/* right side */}
      <div>

      </div>
    </div>
  )
}

export default HomePage