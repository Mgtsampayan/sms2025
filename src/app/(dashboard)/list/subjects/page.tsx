import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Teachers", accessor: "teachers", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const SubjectListPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="
        border-b border-border-color
        dark:border-dark-border
        even:bg-bg-secondary
        dark:even:bg-dark-card
        text-sm
        hover:bg-lamaPurpleLight
        dark:hover:bg-lamaPurpleDark
        dark:text-text-primary
      "
    >
      <td className="p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-bg-card dark:bg-dark-card p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold dark:text-dark-text hidden md:block">
          All Subjects
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-lamaYellowDark dark:hover:bg-yellow-600">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-lamaYellowDark dark:hover:bg-yellow-600">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="subject" type="create" />}
          </div>
        </div>
      </div>

      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      <Pagination />
    </div>
  );
};

export default SubjectListPage;
