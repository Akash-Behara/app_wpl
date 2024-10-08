import React from 'react'
import ExploreGigs from './ExploreGigs'
import SearchRoles from './SearchRoles'
import Statistics from './Statistics'

const HomeLeftSection = ({user, isLoggedIn}) => {
  return (
    <div className='flex flex-col px-[46px] mt-4 w-full '>
      <Statistics user={user} isLoggedIn={isLoggedIn} />
      <SearchRoles />
      <ExploreGigs />
    </div>
  )
}

export default HomeLeftSection