import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

// Class tokens
const ROW_CLASS =
  "border-b border-border-color dark:border-dark-border even:bg-bg-secondary dark:even:bg-dark-card text-sm hover:bg-lamaPurpleLight dark:hover:bg-lamaPurpleDark";
const TEXT_PRIMARY = "text-text-primary dark:text-dark-text";
const TEXT_SECONDARY = "text-text-secondary dark:text-dark-secondary";
const BUTTON_CLASS =
  "w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky dark:bg-lamaSkyDark dark:hover:bg-sky-500 transition-colors duration-200";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Student ID", accessor: "studentId", className: "hidden md:table-cell" },
  { header: "Grade", accessor: "grade", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr key={item.id} className={ROW_CLASS}>
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className={`font-semibold ${TEXT_PRIMARY}`}>{item.name}</h3>
          <p className={`text-xs ${TEXT_SECONDARY}`}>{item.class}</p>
        </div>
      </td>
      <td className={`hidden md:table-cell ${TEXT_SECONDARY}`}>{item.studentId}</td>
      <td className={`hidden md:table-cell ${TEXT_SECONDARY}`}>{item.grade}</td>
      <td className={`hidden lg:table-cell ${TEXT_SECONDARY}`}>{item.phone}</td>
      <td className={`hidden lg:table-cell ${TEXT_SECONDARY}`}>{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button aria-label={`View ${item.name}`} className={BUTTON_CLASS}>
              <Image src="/view.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && <FormModal table="student" type="delete" id={item.id} />}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-bg-card dark:bg-dark-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className={`hidden md:block text-lg font-semibold ${TEXT_PRIMARY}`}>All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button
              aria-label="Filter"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-lamaYellowDark dark:hover:bg-yellow-600 transition-colors duration-200"
            >
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button
              aria-label="Sort"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-lamaYellowDark dark:hover:bg-yellow-600 transition-colors duration-200"
            >
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={studentsData} />

      <Pagination />
    </div>
  );
};

export default StudentListPage;
