import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { links } from "../data";

const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    toggleAboutDropdown,
    aboutDropdownOpen,
  } = useGlobalContext();

  return (
    <aside
      className={
        isSidebarOpen
          ? "fixed top-0 right-0 w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 transform translate-x-0 transition-transform duration-300"
          : "fixed top-0 right-0 w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 transform translate-x-full transition-transform duration-300"
      }>
      <div className="p-10 md:p-8 relative text-3xl uppercase">
        <button
          onClick={closeSidebar}
          className="text-3xl absolute top-4 right-4 cursor-pointer">
          <FaTimes />
        </button>
        <div className="mt-4">
          {links.map((item) => {
            const { pageId, page, sublinks, url } = item;
            if (sublinks.length > 0) {
              // Render about link with dropdown
              return (
                <div key={pageId} className="mb-3">
                  <button
                    className="flex items-center w-full focus:outline-none"
                    onClick={toggleAboutDropdown}>
                    <span className="mr-2 uppercase">{page}</span>
                    {aboutDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {aboutDropdownOpen && (
                    <div className="pl-6 ">
                      {sublinks.map((sublink) => {
                        const { id, label, url } = sublink;
                        return (
                          <div
                            className="mt-2 hover:pl-4 transition-all duration-300"
                            key={id}>
                            <a href={url}>{label}</a>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            } else {
              // Render regular link
              return (
                <div
                  key={pageId}
                  className="mb-3 hover:pl-4 transition-all duration-300">
                  <a href={url}>{page}</a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
