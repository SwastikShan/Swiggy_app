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

UserContext.displayName = "This is the user context created in utils folder";

export default UserContext;