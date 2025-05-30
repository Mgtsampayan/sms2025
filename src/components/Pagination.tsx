const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500 dark:text-gray-400">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 dark:bg-gray-700 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-lamaSky dark:bg-dark-accent dark:text-white">1</button>
        <button className="px-2 rounded-sm dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700">2</button>
        <button className="px-2 rounded-sm dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700">3</button>
        ...
        <button className="px-2 rounded-sm dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 dark:bg-gray-700 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
