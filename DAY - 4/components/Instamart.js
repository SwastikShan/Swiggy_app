import { useState, useEffect } from "react";

const Section = ( { title, description, visible, setIsVisible } ) => {
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <div className="border border-black m-2 p-4 rounded-md">
            <h3 className="font-bold text-xl">{title}</h3>
            {visible ? (
                <div>
                    <p>{description}</p>
                    <button
                        onClick={() => setIsVisible( false )}
                        className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded cursor-pointer"
                    >
                        Hide
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setIsVisible( true )}
                    className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded cursor-pointer"
                >
                    Show
                </button>
            )}
        </div>
    );
};

const Instamart = () => {
    const [ visibleSection, setVisibleSection ] = useState( "about" );

    return (
        <div className="flex flex-col items-center justify-start h-screen m-3">
            <h1 className="text-3xl font-bold">Welcome to InstaMart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 m-4">
                <Section
                    title={"About Us"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, felis nec volutpat iaculis, massa tellus dignissim velit, eget pharetra lorem urna id nunc."
                    }
                    visible={visibleSection === "about"}
                    setIsVisible={() => setVisibleSection( "about" )}
                />
                <Section
                    title={"Teams"}
                    description={
                        "Sed ac neque eu nulla fermentum vestibulum in ut arcu. Ut et est nec erat dictum efficitur a a tellus. Etiam vitae quam nec urna vulputate tempus eget a metus."
                    }
                    visible={visibleSection === "teams"}
                    setIsVisible={() => setVisibleSection( "teams" )}
                />
                <Section
                    title={"Contacts"}
                    description={
                        "Vestibulum suscipit nisl quis velit facilisis lacinia. Vivamus eu nunc nec urna tristique accumsan. In ullamcorper justo non purus sollicitudin luctus. "
                    }
                    visible={visibleSection === "contacts"}
                    setIsVisible={() => setVisibleSection( "contacts" )}
                />
            </div>
        </div>
    );
};

export default Instamart;
