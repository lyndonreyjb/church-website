import "./App.css";
import { useGlobalContext } from "./Context";
import Header from "./header/header.component";
import Navbar from "./navbar/navbar.component";
import Submenu from "./navbar/submenu/submenu.component";
import Sidebar from "./sidebar/sidebar.component";
function App() {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Header />
      <Sidebar />
      <Submenu />
    </>
  );
}

export default App;
