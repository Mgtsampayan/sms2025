import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const infoItems = [
  { icon: "/blood.png", label: "A+" },
  { icon: "/date.png", label: "January 2025" },
  { icon: "/mail.png", label: "user@gmail.com" },
  { icon: "/phone.png", label: "+1 234 567" },
];

const stats = [
  { icon: "/singleAttendance.png", value: "90%", label: "Attendance" },
  { icon: "/singleBranch.png", value: "2", label: "Branches" },
  { icon: "/singleLesson.png", value: "6", label: "Lessons" },
  { icon: "/singleClass.png", value: "6", label: "Classes" },
];

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <UserInfoCard />

          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {stats.map(({ icon, value, label }) => (
              <StatCard key={label} icon={icon} value={value} label={label} />
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-bg-card dark:bg-dark-card rounded-md p-4 h-[800px]">
          <h1 className="dark:text-dark-text mb-2">Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <ShortcutLinks />
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

const UserInfoCard = () => (
  <div className="bg-lamaSky dark:bg-dark-card py-6 px-4 rounded-md flex-1 flex gap-4">
    <div className="w-1/3">
      <Image
        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Teacher photo"
        width={144}
        height={144}
        className="w-36 h-36 rounded-full object-cover"
      />
    </div>
    <div className="w-2/3 flex flex-col justify-between gap-4">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold dark:text-dark-text">Leonard Snyder</h1>
        {role === "admin" && (
          <FormModal
            table="teacher"
            type="update"
            data={{
              id: 1,
              username: "deanguerrero",
              email: "deanguerrero@gmail.com",
              password: "password",
              firstName: "Dean",
              lastName: "Guerrero",
              phone: "+1 234 567 89",
              address: "1234 Main St, Anytown, USA",
              bloodType: "A+",
              dateOfBirth: "2000-01-01",
              sex: "male",
              img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
            }}
          />
        )}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium dark:text-gray-300">
        {infoItems.map(({ icon, label }) => (
          <div
            key={label}
            className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2"
          >
            <Image src={icon} alt="" width={14} height={14} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) => (
  <div className="bg-white dark:bg-dark-card p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
    <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
    <div>
      <h1 className="text-xl font-semibold dark:text-dark-text">{value}</h1>
      <span className="text-sm text-gray-400 dark:text-gray-500">{label}</span>
    </div>
  </div>
);

const ShortcutLinks = () => {
  const links = [
    { label: "Teacher's Classes", href: "/", bgColor: "bg-lamaSkyLight" },
    { label: "Teacher's Students", href: "/", bgColor: "bg-lamaPurpleLight" },
    { label: "Teacher's Lessons", href: "/", bgColor: "bg-lamaYellowLight" },
    { label: "Teacher's Exams", href: "/", bgColor: "bg-pink-50" },
    { label: "Teacher's Assignments", href: "/", bgColor: "bg-lamaSkyLight" },
  ];

  return (
    <div className="bg-white dark:bg-dark-card p-4 rounded-md">
      <h1 className="text-xl font-semibold dark:text-dark-text">Shortcuts</h1>
      <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500 dark:text-gray-400">
        {links.map(({ label, href, bgColor }) => (
          <Link
            key={label}
            href={href}
            className={`${bgColor} p-3 rounded-md dark:bg-gray-700 dark:text-gray-300`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleTeacherPage;
