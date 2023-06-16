import { useGlobalContext } from "../../Context";
import { links } from "../../data";
import { useRef } from "react";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = links.find((item) => item.pageId === pageId);
  const subContainer = useRef(null);
  const handleMouseLeave = (e) => {
    const submenu = subContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={
        currentPage
          ? "md:block hidden fixed z-10 top-24 right-0 rounded-md  w-1/4 mr-4 h-38 bg-gradient-to-r bg-white"
          : "hidden -z-1"
      }
      onMouseLeave={handleMouseLeave}
      ref={subContainer}>
      <div>
        {currentPage?.sublinks?.map((link) => {
          const { id, label, url } = link;
          return (
            <a
              key={id}
              href={url}
              className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase">
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
