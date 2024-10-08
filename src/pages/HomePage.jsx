import HomeRightSection from '../components/home/HomeRightSection'
import HomeLeftSection from '../components/home/HomeLeftSection'

const HomePage = () => {
  const isLoggedIn = false;

  const userDetails = {
    name: "Jane",
    email: "jane@doe.com",
    username: "janedoe99",
    bio: "Hi, I am Jane Doe",
    wallet_address: "",
    kyc_status: false,
    social: [
      {"telegram": ""},
      {"discord": ""},
      {"email": ""}
    ],
    user_personal_projects: [
      {   
        img: "",
        title: "",
        description: "",
        skills: ["React", "Tailwind"],
        link: ""
      },  
    ],
    total_money_earned: "120.23",
    active_projects: [],
    upcoming_payments: [],
    reward_history: [],
    job_preference: [],
    submitted_proposals: [],
    submitted_projects: [],
    participated_projects_count: "69",
    projects_completed_count: "04",
    projects_ongoing_count: "02",
  }

  return (
    <div className='flex flex-row justify-between mt-4 mx-8'>
      <HomeLeftSection user={userDetails} isLoggedIn={isLoggedIn} />
      <HomeRightSection user={userDetails} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default HomePage