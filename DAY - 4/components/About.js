import React,{useContext} from "react";
import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
    const { user } = useContext( UserContext );
    return (
        <div className="m-5">
            <h2 className="text-3xl text-center font-bold text-orange-600 mb-5">
                Welcome to Food Villa - {user.name}
            </h2>
            <Profile />
            <Outlet />
            <div className="mt-8">
                <p>
                    Food Villa is your one-stop destination for delicious and delightful
                    food. We are passionate about serving you the best food experience,
                    right at your doorstep. With a wide range of cuisines and a team of
                    talented chefs, we aim to satisfy your taste buds and make every meal a
                    memorable one.
                </p>
                <h3 className="mt-6 text-xl font-semibold">Our Speciality</h3>
                <p>
                    At Food Villa, we take pride in offering a diverse and delectable menu
                    that caters to all your cravings. From mouthwatering appetizers to
                    wholesome main courses and delectable desserts, we have something for
                    everyone. Our dishes are prepared with the freshest ingredients and a
                    dash of love, ensuring that you enjoy the authentic flavors in every
                    bite.
                </p>
                <h3 className="mt-6 text-xl font-semibold">Why Choose Food Villa?</h3>
                <ul className="list-disc pl-8">
                    <li>
                        Wide Range of Cuisines: We bring you a variety of cuisines from
                        around the world, giving you the freedom to explore and savor
                        different flavors without stepping out of your home.
                    </li>
                    <li>
                        Quick and Reliable Delivery: Our efficient delivery team ensures
                        that your order reaches you promptly, so you can enjoy your food
                        while it's still hot and fresh.
                    </li>
                    <li>
                        Customizable Options: We understand that every palate is unique.
                        That's why we offer customizable options, so you can tailor your
                        order to suit your preferences.
                    </li>
                    <li>
                        Quality and Hygiene: Your health and safety are our top priorities.
                        We follow strict quality and hygiene standards to provide you with
                        delicious, safe, and hygienic food.
                    </li>
                    <li>
                        Great Value for Money: Enjoy the best quality food at affordable
                        prices, making every meal an excellent value for your money.
                    </li>
                    <li>
                        24/7 Customer Support: Our dedicated customer support team is
                        always ready to assist you with any queries or concerns, ensuring a
                        seamless food ordering experience.
                    </li>
                </ul>
                <h3 className="mt-6 text-xl font-semibold">Our Mission and Vision</h3>
                <p>
                    Our mission is to spread happiness through food. We believe that good
                    food has the power to bring people together, create memories, and make
                    every occasion special. Our vision is to be the best food delivery
                    app, connecting food lovers with their favorite dishes and delivering
                    satisfaction with every bite.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
