import { createContext } from "react";

const UserContext = createContext(
    {
        user:
        {
            name: "Shantanu_kumar",
            email: "Kumarshantanu4403@gmail.com",
        },
    }
);

UserContext.displayName = "This is the user context created in utils folder";

export default UserContext;