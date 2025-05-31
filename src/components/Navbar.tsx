import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      aria-label="Primary Navigation"
      className="flex items-center justify-between p-4 bg-bg-card border-b border-border-color"
    >
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-border-color px-2">
        <Image src="/search.png" alt="Search icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none text-text-primary placeholder:text-text-secondary"
          aria-label="Search"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* Message Icon */}
        <button
          type="button"
          aria-label="View messages"
          className="bg-bg-secondary rounded-full w-7 h-7 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-lamaPurple"
        >
          <Image src="/message.png" alt="" width={20} height={20} />
        </button>

        {/* Announcement Icon with Badge */}
        <button
          type="button"
          aria-label="View announcements, 1 new announcement"
          className="relative bg-bg-secondary rounded-full w-7 h-7 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-lamaPurple"
        >
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <span
            aria-live="polite"
            className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs"
          >
            1
          </span>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Info */}
        <div className="flex flex-col text-right select-none">
          <span className="text-xs leading-3 font-medium text-text-primary">
            John Doe
          </span>
          <span className="text-[10px] text-text-secondary">Admin</span>
        </div>

        {/* User Avatar */}
        <Image
          src="/avatar.png"
          alt="User avatar"
          width={36}
          height={36}
          className="rounded-full"
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
