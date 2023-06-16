import { links } from "../data";
import { useGlobalContext } from "../Context";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links font-medium self-stretch hidden md:flex uppercase">
      {links.map((item) => {
        const { pageId, page, sublinks, url } = item;

        if (sublinks.length > 0) {
          return (
            <button
              key={pageId}
              className="nav-link uppercase "
              onMouseEnter={() => setPageId(pageId)}>
              {page}
            </button>
          );
        }

        // Render about link with dropdown
        else {
          // Render regular link
          return (
            <button
              key={pageId}
              className="nav-link  mr-2 uppercase hover:text-yellow-700 transition-all duration-300">
              <a href={url}>{page}</a>
            </button>
          );
        }
      })}
    </div>
  );
};

export default NavLinks;
