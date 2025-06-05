import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

// Class tokens
const ROW_CLASS =
  "border-b border-border-color dark:border-dark-border even:bg-bg-secondary dark:even:bg-dark-card text-sm hover:bg-lamaPurpleLight dark:hover:bg-lamaPurpleDark";
const TEXT_PRIMARY = "text-text-primary dark:text-dark-text";
const TEXT_SECONDARY = "text-text-secondary dark:text-dark-secondary";
const BUTTON_CLASS =
  "w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky dark:bg-lamaSkyDark dark:hover:bg-sky-500 transition-colors duration-200";

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
  { header: "Teacher ID", accessor: "teacherId", className: "hidden md:table-cell" },
  { header: "Subjects", accessor: "subjects", className: "hidden md:table-cell" },
  { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr key={item.id} className={ROW_CLASS}>
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className={`font-semibold ${TEXT_PRIMARY}`}>{item.name}</h3>
          <p className={`text-xs ${TEXT_SECONDARY}`}>{item.email}</p>
        </div>
      </td>
      <td className={`hidden md:table-cell ${TEXT_PRIMARY}`}>{item.teacherId}</td>
      <td className={`hidden md:table-cell ${TEXT_PRIMARY}`}>{item.subjects.join(", ")}</td>
      <td className={`hidden md:table-cell ${TEXT_PRIMARY}`}>{item.classes.join(", ")}</td>
      <td className={`hidden lg:table-cell ${TEXT_PRIMARY}`}>{item.phone}</td>
      <td className={`hidden lg:table-cell ${TEXT_PRIMARY}`}>{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button aria-label={`View ${item.name}`} className={BUTTON_CLASS}>
              <Image src="/view.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && <FormModal table="teacher" type="delete" id={item.id} />}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-bg-card dark:bg-dark-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-4">
        <h1 className={`hidden md:block text-lg font-semibold ${TEXT_PRIMARY}`}>All Teachers</h1>
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
  const className =
    "w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-lamaYellowDark dark:hover:bg-yellow-600 transition-colors duration-200";

  return (
    <>
      <button aria-label="Filter" className={className}>
        <Image src="/filter.png" alt="Filter" width={14} height={14} />
      </button>
      <button aria-label="Sort" className={className}>
        <Image src="/sort.png" alt="Sort" width={14} height={14} />
      </button>
    </>
  );
};

export default TeacherListPage;
