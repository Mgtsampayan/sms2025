import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role } from "@/lib/data";
import Image from "next/image";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

// Define reusable class strings with semantic tokens and brand colors
const ROW_CLASS =
  "border-b border-border-color dark:border-dark-border even:bg-bg-secondary dark:even:bg-dark-card text-sm hover:bg-lamaPurpleLight dark:hover:bg-lamaPurpleDark";

const TEXT_PRIMARY = "text-text-primary dark:text-dark-text";
const TEXT_SECONDARY = "text-text-secondary dark:text-dark-secondary";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ParentListPage = () => {
  const renderRow = (item: Parent) => (
    <tr key={item.id} className={ROW_CLASS}>
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className={`font-semibold ${TEXT_PRIMARY}`}>{item.name}</h3>
          <p className={`text-xs ${TEXT_SECONDARY}`}>{item.email}</p>
        </div>
      </td>
      <td className={`hidden md:table-cell ${TEXT_SECONDARY}`}>
        {item.students.join(", ")}
      </td>
      <td className={`hidden lg:table-cell ${TEXT_SECONDARY}`}>{item.phone}</td>
      <td className={`hidden lg:table-cell ${TEXT_SECONDARY}`}>{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-bg-card dark:bg-dark-card p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className={`hidden md:block text-lg font-semibold ${TEXT_PRIMARY}`}>
          All Parents
        </h1>
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
            {role === "admin" && <FormModal table="parent" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentListPage;
