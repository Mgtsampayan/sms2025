import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow dark:odd:bg-purple-700 dark:even:bg-yellow-700 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-green-600 dark:text-green-400">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-gray-800 dark:text-dark-text">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-700 dark:text-gray-300">{type}s</h2>
    </div>
  );
};

export default UserCard;
