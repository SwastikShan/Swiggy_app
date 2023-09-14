import React,{useEffect} from "react";

const contacts = [
    {
        name: "Shantanu Kumar",
        phoneNumber: "+91-6201xxxxxx",
        email: "Kumarshantanu4403.com",
        address: "Hunasamaranhalli,yelanka,bangalore",
        profileImage:
            "https://i.postimg.cc/XY0qRQCB/RESUME-PIC-formal.png",
    },
    // Add more contacts here
];

const Contact = () => {
    useEffect( () => {
        document.body.style.overflowY = "hidden";
        return () => {
            // Enable vertical scrolling on unmount
            document.body.style.overflowY = "auto";
        };
    }, [] );
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-y-hidden">
            <div>
                {contacts.map( ( contact, index ) => (
                    <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg p-10">
                        {/* Profile Image */}
                        <img
                            src={contact.profileImage}
                            alt={contact.name}
                            className="w-64 h-64 rounded-full mb-4 object-cover"
                        />
                        {/* Name */}
                        <h2 className="text-2xl font-semibold">{contact.name}</h2>
                        {/* Details */}
                        <div className="text-center mt-2">
                            <p className="text-gray-600 ">
                                <strong>Phone:</strong> {contact.phoneNumber}
                            </p>
                            <p className="text-gray-600">
                                <strong>Email:</strong> {contact.email}
                            </p>
                            <p className="text-gray-600">
                                <strong>Address:</strong> {contact.address}
                            </p>
                        </div>
                    </div>
                ) )}
            </div>
            {/* Footer */}
            <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 text-center">
                &copy; 2023 Food Villa by Shantanu. All rights reserved.
            </footer>
        </div>
    );
};

export default Contact;
