import ExploreGigsCard from "./ExploreGigsCard"
import ViewBar from "./ViewBar"

const ExploreGigs = () => {
  return (
    <div>
        <p className="font-gridular text-primaryYellow text-[20px] leading-[24px] mb-6">Explore Gigs</p>
        <ViewBar />
        <div>
            <ExploreGigsCard />
            <ExploreGigsCard />
            <ExploreGigsCard />
            <ExploreGigsCard />
        </div>
    </div>
  )
}

export default ExploreGigs