const Statistics = ({user,isLoggedIn}) => {

  return (
    <div className="mb-8">
        {isLoggedIn ?
        <>
            <p className="font-gridular text-primaryYellow text-[20px] leading-[24px] mb-8">Hey {user.name}, Here's your Earnings!</p>
            <div className="flex flex-row text-primaryBlue">
                <div className="mr-3 w-2/4 h-[101px] py-5 px-5 bg-cover bg-[url('assets/images/total_earned_bg.png')] rounded-md">
                    <p className='font-inter font-bold text-[12px] leading-[14.4px] mb-1'>Total Earned</p>
                    <p className='font-gridular text-[42px] leading-[50.4px]'>${user.total_money_earned}</p>
                </div>
                <div className='w-1/6 h-[101px] bg-primaryGreen py-6 px-3 rounded-lg mr-3'>
                    <p className='font-inter font-medium text-[12px] leading-[14.4px] mb-1'>Participate</p>
                    <p className='font-gridular text-[42px] leading-[42px]'>{user.participated_projects_count}</p>
                </div>
                <div className='w-1/6 h-[101px] bg-primaryGreen py-6 px-3 rounded-lg mr-3'>
                    <p className='font-inter font-medium text-[12px] leading-[14.4px] mb-1'>Completed</p>
                    <p className='font-gridular text-[42px] leading-[42px]'>{user.projects_completed_count}</p>
                </div>
                <div className='w-1/6 h-[101px] bg-primaryGreen py-6 px-3 rounded-lg'>
                    <p className='font-inter font-medium text-[12px] leading-[14.4px] mb-1'>Ongoing</p>
                    <p className='font-gridular text-[42px] leading-[42px]'>{user.projects_ongoing_count}</p>
                </div>
            </div>
        </>
        : 
        <div className="flex flex-col justify-center px-3 h-[101px] w-full bg-cover bg-no-repeat bg-[url('assets/images/total_earned_not_logged_in_bg.png')] rounded-md">
            <p className="font-gridular text-[23px] leading-[27.6px]">Start contributing Onchain</p>
            <p className="font-inter text-[13px] font-medium leading-[15.6px]">Earn in crypto by contributing to your fav projects</p>
        </div>
        }
    </div>
  )
}

export default Statistics