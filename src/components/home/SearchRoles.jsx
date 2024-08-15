import { ChevronDown, X } from 'lucide-react'
import ethereumIcon from '../../assets/images/ethereum-icon.png'

const SearchRoles = () => {
  return (
    <div className="bg-[#050e52] h-[97px] border border-white/10 rounded-lg mb-8">
        <p className="font-gridular text-primaryYellow text-[14px] leading-[16.8px] px-5 my-4">Search for the roles</p>
        <div className="flex flex-row justify-evenly">
            <div className="w-[320px] h-[32px] bg-cardBlueBg2 rounded-md p-2 flex flex-row justify-between">
                <p className="text-white opacity-[88%] font-gridular text-[14px] leading-[16.8px]">Product Designer</p>
                <X className='text-white48' size={14}/>
            </div>
            <div className="w-[320px] h-[32px] bg-cardBlueBg2 rounded-md p-2 flex flex-row justify-between">
                <p className="text-white88 font-gridular text-[14px] leading-[16.8px]">Professional</p>
                <ChevronDown className='text-white48' size={14}/>
            </div>
            <div className="w-[320px] h-[32px] bg-cardBlueBg2 rounded-md p-2 flex flex-row justify-between">
                <div className='flex flex-row'>
                    <img src={ethereumIcon} alt="Ethereum icon"/>
                    <p className="text-white opacity-[88%] font-gridular text-[14px] leading-[16.8px] ml-2">Ethereum</p>
                </div>
                <ChevronDown className='text-white48' size={14}/>
            </div>
        </div>
    </div>
  )
}

export default SearchRoles