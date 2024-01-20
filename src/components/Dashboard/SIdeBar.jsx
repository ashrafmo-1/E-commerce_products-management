import "./sidebar.css";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import { BiSitemap } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "../Dashboard/Showuser.css";
import { FaDiagramProject } from "react-icons/fa6";

const SIdeBar = (props) => {
  return (
    <div className={"sideBar"}>
      <div className={"sticky-top"}>
        <Link to={"/dashboard"} className={"sideBar-link gap-2"}>
          <AiFillHome /> Home
        </Link>
        <Link
          to={"/dashboard/ProductsManagement"}
          className={"sideBar-link gap-2"}
        >
          <BiSitemap /> management products
        </Link>
        <Link
          to={"/dashboard/add-new-product"}
          className={"sideBar-link gap-2"}
        >
          <FaDiagramProject /> add new product
        </Link>
        <Link to={"/dashboard/showuser"} className={"sideBar-link gap-2"}>
          <FaUsers /> show users & manage
        </Link>
        <Link to={"/"} className={"sideBar-link gap-2"}>
          <AiOutlineUserAdd /> add user
        </Link>
        <Link to={"/"} className={"sideBar-link gap-2"}>
          <MdOutlineAdminPanelSettings /> workers
        </Link>
      </div>
    </div>
  );
};

export default SIdeBar;
