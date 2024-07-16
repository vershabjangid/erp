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
                sub_icon: <FontAwesomeIcon icon={faPlus} />
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
    }
]