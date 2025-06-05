import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import { userCard } from "@/variants/userCard"; // Import the variant function

// --- Consolidated SVG Icon Components Definition ---
const iconComponents: Record<string, React.ElementType> = {
  students: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
  ),
  teachers: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
  ),
  parents: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 9c-3.309 0-6 2.691-6 6v1h12v-1c0-3.309-2.691-6-6-6zm0 2c2.206 0 4 1.794 4 4H8c0-2.206 1.794-4 4-4zM19 2c-1.488 0-2.804.804-3.465 2H14a5.002 5.002 0 0 0-4 0H8.465C7.804 2.804 6.488 2 5 2c-1.979 0-3.66 1.283-4.392 3.04A1.003 1.003 0 0 0 0 6v2a1 1 0 0 0 .883.993A5.004 5.004 0 0 0 5 11c1.488 0 2.804-.804 3.465-2H10a3 3 0 1 1 4 0h1.535c.661 1.196 1.977 2 3.465 2 2.206 0 4-1.794 4-4V6c0-1.347-.735-2.521-1.804-3.248A4.954 4.954 0 0 0 19 2zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
  ),
  staff: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/></svg>
  ),
  trendingUp: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props} >
      <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.56l-2.47 2.47a.75.75 0 01-1.06-1.06l3.75-3.75a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L10.75 5.56v10.69a.75.75 0 01-.75.75z" clipRule="evenodd" />
    </svg>
  ),
  trendingDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.69l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0L6.22 13.03a.75.75 0 011.06-1.06l2.47 2.47V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
    </svg>
  ),
  smallChart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 13.3355V19.9999H9V13.3355H3ZM10.5 8.00274V19.9999H16.5V8.00274H10.5ZM18 3V19.9999H24V3H18Z"></path>
    </svg>
  ),
};
// --- End of Consolidated SVG Icon Components Definition ---

interface StatInfo {
  type: "student" | "teacher" | "parent" | "staff";
  iconKey: keyof typeof iconComponents; // Use a key to reference icons
  title: string;
  count: number;
  percentageChange: number;
  iconBgClass: string;
  smallChartBgClass: string;
}

// Simulate an API call or direct data fetching (e.g., from a database)
// For a page component in Next.js App Router, it can be async
async function getDashboardStats(): Promise<StatInfo[]> {
  // In a real app, this would be an actual fetch operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          type: "student", iconKey: "students", title: "Students", count: 1234, percentageChange: 14,
          iconBgClass: "p-2 rounded-lg bg-gray-100 dark:bg-bg-secondary",
          smallChartBgClass: "p-1.5 rounded-full bg-gray-200 dark:bg-bg-secondary"
        },
        {
          type: "teacher", iconKey: "teachers", title: "Teachers", count: 89, percentageChange: 1,
          iconBgClass: "p-2 rounded-lg bg-lamaPurple/10 dark:bg-lamaPurpleDark/20",
          smallChartBgClass: "p-1.5 rounded-full bg-lamaPurple/20 dark:bg-lamaPurpleDark/30"
        },
        {
          type: "parent", iconKey: "parents", title: "Parents", count: 567, percentageChange: -19,
          iconBgClass: "p-2 rounded-lg bg-lamaYellow/10 dark:bg-lamaYellowDark/20",
          smallChartBgClass: "p-1.5 rounded-full bg-lamaYellow/20 dark:bg-lamaYellowDark/30"
        },
        {
          type: "staff", iconKey: "staff", title: "Staff", count: 45, percentageChange: 17,
          iconBgClass: "p-2 rounded-lg bg-lamaSky/10 dark:bg-lamaSkyDark/20",
          smallChartBgClass: "p-1.5 rounded-full bg-lamaSky/20 dark:bg-lamaSkyDark/30"
        },
      ]);
    }, 50); // Simulate network delay
  });
}


export default async function AdminPage() {
  const statsData = await getDashboardStats();

  const TrendingUpIcon = iconComponents.trendingUp;
  const TrendingDownIcon = iconComponents.trendingDown;
  const SmallChartIcon = iconComponents.smallChart;

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
            {/* QUICK STATS CARDS */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Quick Stats
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {statsData.map((stat) => {
                  const MainIconComponent = iconComponents[stat.iconKey];
                  const isPositive = stat.percentageChange >= 0;
                  const percentageColorClass = isPositive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400";

                  return (
                    <div key={stat.title} className={userCard({ type: stat.type })}>
                      {/* Top section: Icon and Title */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={stat.iconBgClass}>
                          <MainIconComponent className="w-5 h-5 text-currentColor" />
                        </div>
                        <span className="font-medium text-sm text-currentColor">{stat.title}</span>
                      </div>

                      {/* Main content: Count and Percentage */}
                      <div className="flex items-end justify-between mt-auto">
                        <div>
                          <p className="text-3xl font-bold text-text-primary">
                            {stat.count.toLocaleString()}
                          </p>
                          <p className={`text-xs mt-1 flex items-center ${percentageColorClass}`}>
                            {isPositive ? (
                              <TrendingUpIcon className="mr-1 w-3.5 h-3.5" />
                            ) : (
                              <TrendingDownIcon className="mr-1 w-3.5 h-3.5" />
                            )}
                            {Math.abs(stat.percentageChange)}%
                            <span className="ml-1 text-text-secondary/90">from last month</span>
                          </p>
                        </div>
                        <div className={stat.smallChartBgClass}>
                          <SmallChartIcon className="w-5 h-5 text-text-secondary/80" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* MIDDLE CHARTS (rest of the page remains the same) */}
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
                      <button 
                        aria-label="More options for Student Distribution" 
                        className="text-text-secondary hover:text-text-primary transition-colors"
                      >
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

          {/* RIGHT SECTION (remains the same) */}
          <div className="w-full xl:w-1/3 space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Upcoming Events
              </h2>
              <div className="bg-bg-card border border-border-color rounded-2xl p-4 shadow-soft">
                <EventCalendar />
              </div>
            </section>

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