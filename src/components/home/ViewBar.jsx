import { LayoutGrid, ListFilter, TableProperties } from 'lucide-react'

const ViewBar = () => {
  return (
    <div className="flex flex-row border border-white/10 rounded-lg justify-between mb-8">
        <div className="flex flex-row  text-primaryYellow font-gridular text-[14px] leading-[16.8px]">
            <p className="w-[109px] h-[56px] py-4 bg-[#050e52] text-center border-b-white">Open Gigs</p>
            <p className="w-[110px] h-[56px] py-4 bg-[#050e52] text-center border-b-white">In Review</p>
            <p className="w-[112px] h-[56px] py-4 bg-[#050e52] text-center border-b-white">Completed</p>
        </div>
        <div className="flex flex-row items-center w-[200px] justify-evenly  text-white48">
            <div className="flex flex-row justify-evenly items-center border border-white/10 rounded-lg w-[56px] h-[32px]">
                <LayoutGrid size={12}/>
                <div className='h-full border border-r border-white/10'></div>
                <TableProperties className='text-primaryYellow' size={12} rotate={90}/>
                {/* <img className='h-[12px]' src={gridTableIcon} alt="Grid Table Icon" /> */}
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row justify-evenly items-center border border-white/10 rounded-lg w-[89px] h-[32px]">
                    <ListFilter size={12}/>
                    <p className='font-gridular text-[14px] leading-[16.8px]'>Filter</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBar