/* eslint-disable @typescript-eslint/no-explicit-any */
const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4 text-text-primary">
      <thead>
        <tr className="bg-bg-secondary dark:bg-secondary text-sm font-semibold text-text-secondary">
          {columns.map((col) => (
            <th
              key={col.accessor}
              className={`p-3 text-left ${col.className ?? ""}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
