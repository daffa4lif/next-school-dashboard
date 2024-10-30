const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold my-4'>Announcement</h1>
        <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer" title="view all announcement">view all</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-mainSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">2024-10-20</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, soluta!</p>
        </div>
        <div className="bg-mainPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">2024-10-20</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, soluta!</p>
        </div>
        <div className="bg-mainYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">2024-10-20</span>
          </div>
          <p className="text-sm text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, soluta!</p>
        </div>
      </div>
    </div>
  )
}

export default Announcements