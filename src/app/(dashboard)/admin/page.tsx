import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-bg-primary p-4 lg:p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Dashboard Overview
          </h1>
          <p className="text-text-secondary">
            Welcome back! Here&apos;s what&apos;s happening at your school today.
          </p>
        </div>

        <div className="flex gap-6 flex-col xl:flex-row">
          {/* LEFT SECTION */}
          <div className="w-full xl:w-2/3 space-y-8">
            {/* USER CARDS */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Quick Stats
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <UserCard type="student" />
                <UserCard type="teacher" />
                <UserCard type="parent" />
                <UserCard type="staff" />
              </div>
            </section>

            {/* MIDDLE CHARTS */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Analytics
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* COUNT CHART */}
                <div className="lg:col-span-1">
                  <div className="bg-bg-card border border-border-color rounded-2xl p-6 h-[450px] shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-text-primary">
                        Student Distribution
                      </h3>
                      <button className="text-text-secondary hover:text-text-primary transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                    <div className="h-[370px]">
                      <CountChart />
                    </div>
                  </div>
                </div>

                {/* ATTENDANCE CHART */}
                <div className="lg:col-span-2">
                  <div className="bg-bg-card border border-border-color rounded-2xl p-6 h-[450px] shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-text-primary">
                        Attendance Overview
                      </h3>
                      <div className="flex items-center gap-2">
                        <select className="text-sm bg-bg-secondary border border-border-color rounded-lg px-3 py-1 text-text-primary focus:outline-none focus:ring-2 focus:ring-lamaPurple">
                          <option>This Week</option>
                          <option>This Month</option>
                          <option>This Year</option>
                        </select>
                      </div>
                    </div>
                    <div className="h-[370px]">
                      <AttendanceChart />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BOTTOM CHART */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Financial Overview
              </h2>
              <div className="bg-bg-card border border-border-color rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-text-primary">
                    Revenue & Expenses
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-lamaPurple rounded-full"></div>
                      <span className="text-text-secondary">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 bg-lamaYellow rounded-full"></div>
                      <span className="text-text-secondary">Expenses</span>
                    </div>
                  </div>
                </div>
                <div className="h-[400px]">
                  <FinanceChart />
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full xl:w-1/3 space-y-8">
            {/* EVENT CALENDAR */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Upcoming Events
              </h2>
              <div className="bg-bg-card border border-border-color rounded-2xl p-4 shadow-soft">
                <EventCalendar />
              </div>
            </section>

            {/* ANNOUNCEMENTS */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Announcements
              </h2>
              <div className="bg-bg-card border border-border-color rounded-2xl p-4 shadow-soft">
                <Announcements />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;