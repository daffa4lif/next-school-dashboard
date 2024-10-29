import UserCard from "@/components/admin/UserCard"
import CountChart from "@/components/charts/dashboard/CountChart"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex flex-wrap gap-4 justify-between">
          <UserCard type={"student"} />
          <UserCard type={"teacher"} />
          <UserCard type={"parent"} />
          <UserCard type={"staff"} />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row h-[450px]">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3">
            <CountChart />
          </div>
          {/* ATTAND CHART */}
          <div className="w-full lg:w-2/3"></div>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full lg:w-1/3">R</div>
    </div>
  )
}

export default AdminPage