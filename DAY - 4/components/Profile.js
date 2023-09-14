import React,{useEffect} from "react";

export const Profile = () => {
    const developerInfo = {
        name: "Shantanu Kumar Kumar (CEO, Food Villa)",
        linkedin: "https://www.linkedin.com/in/shantanu-kumar-3b642a211/",
        github: "https://github.com/SwastikShan",
        about:
            "Hi there! I'm Shantanu Kumar, a passionate web developer with a keen interest in building modern and user-friendly applications. I love working with cutting-edge technologies and have experience in front-end and back-end development using React, Node.js, and Express.",
    };

    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );

    return (
        <div className="flex flex-col lg:flex-row m-2">
            <div className="lg:w-1/3 m-2">
                <img
                    src="https://i.postimg.cc/XY0qRQCB/RESUME-PIC-formal.png"
                    alt="Shantanu Kumar's Profile Picture"
                    className="rounded-full w-48 h-48 lg:w-auto lg:h-auto"
                />
            </div>
            <div className="lg:w-2/3 text-lg flex flex-col items-center lg:items-start justify-center">
                <h2 className="text-3xl font-bold">{developerInfo.name}</h2>
                <p className="mt-2">
                    LinkedIn:{" "}
                    <a
                        href={developerInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-1 px-4 rounded-md"
                    >
                        @shantanu_kumar
                    </a>
                </p>
                <p className="mt-2">
                    GitHub:{" "}
                    <a
                        href={developerInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white py-1 px-4 rounded-md"
                    >
                        @Shantanu_kumar
                    </a>
                </p>
                <p className="mt-4">{developerInfo.about}</p>
            </div>
        </div>
    );
};

