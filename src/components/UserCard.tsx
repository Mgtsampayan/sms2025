import Image from "next/image";

interface UserCardProps {
  type: "student" | "teacher" | "parent" | "staff";
}

// Mock data - replace with actual data from your API
const mockData = {
  student: { count: 1234, icon: "/student.png" },
  teacher: { count: 89, icon: "/teacher.png" },
  parent: { count: 567, icon: "/parent.png" },
  staff: { count: 45, icon: "/staff.png" },
};

const cardConfig = {
  student: {
    title: "Students",
    bgColor: "bg-success-light",
    textColor: "text-success",
    borderColor: "border-success/20",
    iconBg: "bg-success/10",
  },
  teacher: {
    title: "Teachers", 
    bgColor: "bg-lamaPurpleLight",
    textColor: "text-lamaPurple",
    borderColor: "border-lamaPurple/20",
    iconBg: "bg-lamaPurple/10",
  },
  parent: {
    title: "Parents",
    bgColor: "bg-lamaYellowLight", 
    textColor: "text-lamaYellow",
    borderColor: "border-lamaYellow/20",
    iconBg: "bg-lamaYellow/10",
  },
  staff: {
    title: "Staff",
    bgColor: "bg-lamaSkyLight",
    textColor: "text-lamaSky", 
    borderColor: "border-lamaSky/20",
    iconBg: "bg-lamaSky/10",
  },
};

const UserCard: React.FC<UserCardProps> = ({ type }) => {
  const config = cardConfig[type];
  const data = mockData[type];

  return (
    <div className={`
      ${config.bgColor} ${config.borderColor} ${config.textColor}
      rounded-2xl p-6 flex-1 min-w-[200px] max-w-[300px]
      border transition-all duration-300 
      hover:shadow-soft hover:-translate-y-1
      group cursor-pointer
      animate-fade-in
    `}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className={`
              ${config.iconBg} p-3 rounded-xl
              group-hover:scale-110 transition-transform duration-200
            `}>
              <Image
                src={data.icon}
                alt={`${type} icon`}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <h3 className="text-sm font-medium opacity-75">
              {config.title}
            </h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-3xl font-bold leading-none">
              {data.count.toLocaleString()}
            </p>
            <div className="flex items-center gap-2 text-xs opacity-75">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                +{Math.floor(Math.random() * 20)}% from last month
              </span>
            </div>
          </div>
        </div>
        
        <div className="ml-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-6 h-6 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;