import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const ActionButton = ({
  children,
  bgColor,
  ariaLabel,
  onClick,
  as: Component = "button",
}: {
  children: React.ReactNode;
  bgColor: string;
  ariaLabel?: string;
  onClick?: () => void;
  as?: React.ElementType;
}) => (
  <Component
    aria-label={ariaLabel}
    onClick={onClick}
    className={`w-7 h-7 flex items-center justify-center rounded-full ${bgColor} transition-colors duration-200 hover:brightness-90`}
  >
    {children}
  </Component>
);

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 dark:border-dark-border even:bg-slate-50 dark:even:bg-gray-800 text-sm hover:bg-lamaPurpleLight dark:hover:bg-gray-700"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        // maybe add loading="lazy" here for performance if many images
        />
        <div className="flex flex-col">
          <h3 className="font-semibold dark:text-dark-text">{item.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell dark:text-dark-text">{item.teacherId}</td>
      <td className="hidden md:table-cell dark:text-dark-text">{item.subjects.join(", ")}</td>
      <td className="hidden md:table-cell dark:text-dark-text">{item.classes.join(", ")}</td>
      <td className="hidden md:table-cell dark:text-dark-text">{item.phone}</td>
      <td className="hidden md:table-cell dark:text-dark-text">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <ActionButton
              // as="a"
              bgColor="bg-lamaSky"
              ariaLabel={`View details of ${item.name}`}
            >
              <Image src="/view.png" alt="View" width={16} height={16} />
            </ActionButton>
          </Link>
          {role === "admin" && <FormModal table="teacher" type="delete" id={item.id} />}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white dark:bg-dark-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-4">
        <h1 className="hidden md:block text-lg font-semibold dark:text-dark-text">
          All Teachers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FilterSortButtons />
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={teachersData} />

      <Pagination />
    </div>
  );
};

const FilterSortButtons = () => {
  const btnClass =
    "w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-yellow-700 dark:hover:bg-yellow-600 transition-colors duration-200";

  return (
    <>
      <button aria-label="Filter" className={btnClass}>
        <Image src="/filter.png" alt="Filter" width={14} height={14} />
      </button>
      <button aria-label="Sort" className={btnClass}>
        <Image src="/sort.png" alt="Sort" width={14} height={14} />
      </button>
    </>
  );
};

export default TeacherListPage;
