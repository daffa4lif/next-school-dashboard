import Image from "next/image"

const UserCard = ({type}: {type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-mainPurple even:bg-mainYellow p-4 flex-1'>
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <Image src={"/more.png"} alt={""} width={20} height={20} className="cursor-pointer"/>
      </div>
      <h2 className="text-2xl font-semibold my-4">1,200</h2>
      <h2 className="capitalize text-sm">{type + 's'}</h2>
    </div>
  )
}

export default UserCard