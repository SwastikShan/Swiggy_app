import { createContext } from "react";

const UserContext = createContext(
    {
        user:
        {
            name: "Ashutosh Kumar",
            email: "ashu@gmail.com",
        },
    }
);

export default UserContext;