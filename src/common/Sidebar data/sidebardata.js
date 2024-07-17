import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHome, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sidebardata = [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: <FontAwesomeIcon icon={faHome} />
    },

    {
        id: 2,
        name: "Employee",
        icon: <FontAwesomeIcon icon={faUserTie} />,
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
                sub_icon: <FontAwesomeIcon icon={faEye} />
            }
        ]
    },

    {
        id: 3,
        name: "Customer",
        icon: <FontAwesomeIcon icon={faUserTie} />,
        subcategory: [
            {
                id: 3,
                subcategory_name: "Add Customer",
                sub_icon: <FontAwesomeIcon icon={faPlus} />
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
        icon: <FontAwesomeIcon icon={faUserTie} />,
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
        icon: <FontAwesomeIcon icon={faUserTie} />,
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
        icon: <FontAwesomeIcon icon={faUserTie} />,
        subcategory: [
            {
                id: 6,
                subcategory_name: "View Attendance",
                sub_icon: <FontAwesomeIcon icon={faEye} />
            }
        ]
    }
]