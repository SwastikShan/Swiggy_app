import { createContext } from "react";

const UserContext = createContext(
    {
        user:
        {
            name: "",
            email: "",
        },
    }
);

UserContext.displayName = "This is the user context created in utils folder";

export default UserContext;