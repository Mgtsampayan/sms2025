import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky dark:bg-dark-card py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Student photo"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-dark-text">
                Cameron Moran
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>

          {/* STATS CARDS */}
          <div className="flex-1 flex gap-4 flex-wrap justify-between">
            {[
              { icon: "/singleAttendance.png", label: "Attendance", value: "90%" },
              { icon: "/singleBranch.png", label: "Grade", value: "6th" },
              { icon: "/singleLesson.png", label: "Lessons", value: "18" },
              { icon: "/singleClass.png", label: "Class", value: "6A" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-dark-card p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
              >
                <Image src={item.icon} alt="" width={24} height={24} className="w-6 h-6" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-dark-text">
                    {item.value}
                  </h1>
                  <span className="text-sm text-gray-400 dark:text-gray-500">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCHEDULE */}
        <div className="mt-4 bg-white dark:bg-dark-card rounded-md p-4 h-[800px]">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">
            Student&apos;s Schedule
          </h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* SHORTCUTS */}
        <div className="bg-white dark:bg-dark-card p-4 rounded-md">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">
            Shortcuts
          </h1>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-700 dark:text-gray-300">
            {[
              { label: "Student's Lessons", href: "/", bg: "bg-lamaSkyLight" },
              { label: "Student's Teachers", href: "/", bg: "bg-lamaPurpleLight" },
              { label: "Student's Exams", href: "/", bg: "bg-pink-50" },
              { label: "Student's Assignments", href: "/", bg: "bg-lamaSkyLight" },
              { label: "Student's Results", href: "/", bg: "bg-lamaYellowLight" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`${item.bg} p-3 rounded-md dark:bg-gray-700 dark:text-gray-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* PERFORMANCE & ANNOUNCEMENTS */}
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
