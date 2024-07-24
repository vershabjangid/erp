import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHome, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";


export const sidebardata = [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: <IoHomeOutline className='fs-4 ms-1' />
    },

    {
        id: 2,
        name: "Employee",
        icon: <FontAwesomeIcon icon={faUserTie} className="fs-4 ms-1" />,
        subcategory: [
            {
                id: 2,
                subcategory_name: "Add Employee",
                sub_icon: <FontAwesomeIcon icon={faPlus} />,
                path:"/add-employee"
            },
            {
                id: 2,
                subcategory_name: "View Employee",
                sub_icon: <FontAwesomeIcon icon={faEye} />,
                path:"/view-employee"
            }
        ]
    },

    {
        id: 3,
        name: "Customer",
        icon: <MdOutlineShoppingBag className="fs-4 ms-1" />,
        subcategory: [
            {
                id: 3,
                subcategory_name: "Add Customer",
                sub_icon: <FontAwesomeIcon icon={faPlus} />,
                path:"/add-customer"
            },
            {
                id: 3,
                subcategory_name: "View Customer",
                sub_icon: <FontAwesomeIcon icon={faEye} />
            }
        ]
    },


    {
        id: 4,
        name: "Project",
        icon: <IoIosConstruct className="fs-4 ms-1" />,
        subcategory: [
            {
                id: 4,
                subcategory_name: "Add Project",
                sub_icon: <FontAwesomeIcon icon={faPlus} />
            },
            {
                id: 4,
                subcategory_name: "View Project",
                sub_icon: <FontAwesomeIcon icon={faEye} />
            }
        ]
    },


    {
        id: 5,
        name: "Task",
        icon: <FaTasks className="fs-4 ms-1" />,
        subcategory: [
            {
                id: 5,
                subcategory_name: "Add Task",
                sub_icon: <FontAwesomeIcon icon={faPlus} />
            },
            {
                id: 5,
                subcategory_name: "View Task",
                sub_icon: <FontAwesomeIcon icon={faEye} />
            }
        ]
    },


    {
        id: 6,
        name: "Attendance",
        icon: <BiTask className="fs-4 ms-1" />,
        subcategory: [
            {
                id: 6,
                subcategory_name: "View Attendance",
                sub_icon: <FontAwesomeIcon icon={faEye} />
            }
        ]
    }
]