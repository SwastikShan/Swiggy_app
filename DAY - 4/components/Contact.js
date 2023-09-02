import React,{useEffect} from "react";

const contacts = [
    {
        name: "Ashutosh Kumar",
        phoneNumber: "+91-9352478931",
        email: "ashu.kumarexam@gmail.com",
        address: "Near Ranjhi Police Station, Jabalpur",
        profileImage:
            "https://i.postimg.cc/WzmPpbs0/Profile-picture-5.png",
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
                &copy; 2023 Food Villa by Ashutosh. All rights reserved.
            </footer>
        </div>
    );
};

export default Contact;
