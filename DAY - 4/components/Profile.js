import React from "react";

export const Profile = () => {
    const developerInfo = {
        name: "Ashutosh Kumar (CEO, Food Villa)",
        linkedin: "https://www.linkedin.com/in/ashusnapx/",
        github: "https://github.com/ashusnapx",
        about:
            "Hi there! I'm Ashutosh Kumar, a passionate web developer with a keen interest in building modern and user-friendly applications. I love working with cutting-edge technologies and have experience in front-end and back-end development using React, Node.js, and Express.",
    };

    return (
        <div className="profile-container">
            <div className="profile-image">
                <img
                    src="https://lh3.googleusercontent.com/pw/AIL4fc-_S73BmA7IxYRzG33j3byk045NNDjx8NreH1KrIwqYSncbLkQ508Ij61U2lhdofWe21Al8g2qUHKyVhhIYNqptUBS8vZ_30_EOnZbqBimxH8eIZj8LpDVtrVT2BjfxaIggapSlYaD8nhEVgPun9jG44jlZjcuiXP-ih8Q_EkLNNuS4aQZ38ft-Oeo1WZltINDCR-oPGDTcff3vLPtnETEGnsDarsdEc7oBc62Iqtl8-SLIzC0vzheIX3F08vCqOCbAMJvztSzvypH5RCNL1LIWLJ-Bw9OSJP6LtuQA8hNTmrdiw8bG0fZPun_muY58HcgdK3GkNHqXrR3oQXrpORgD4RQ923Bk0KlI4AGmUrMTn5AHqaHZiwItbp_uT3rCMSjdFINXak6ApFo21j6PgINTc0cV-DKXes4mjVSXSCiz4x7OD61e7ShN-Ue2UbiQRCwRIhvEBcmsVAq8YBh5kaLUno7Ku8w1qDrU-R6oPhd3IK5aEFYGwv6I2Rd5LXTCeMEE5d9PN70HeK6yWIqH5jdTCMqaNC8DyySIdtfvVboqkEsMv5aABcrvVbsEHnSSlHsnOjty2s3nu93OJPg_OcAz_ayXu7-G7Hv4l7Va7D0qhqt8ejvZMz8MgJPKocBBAcsGQIB1G6HBGhztx4LJqyEa7YSDZBg8TdeGDASfrWQZ5psbR2x-NesyRyE4P6vW-ZvSX53d7rZRzkgpnLnJGZLapdB3mBcQPoZi4XeRnU0LSz0nWZMJw7MoRqJ8A4Gsa8uy7oneHNzT0uPkJ29bBJiCXsMDjvQYV3FwzsWHSf3Z_al8kTFEFWjCAd3BuHn0Gy4jWHg845h4L_y1bQng9f1Gq9mAf8DNCjJhsEkeKD1uWtr5Lc-j93ysaQ8ibeOJydYFYyBTOsjW52ok6kvY5kSPBBbZ-HISl4huSpcyYxyU9RY0mBFcv4KX9B6uxFvQEEkVYmgt0mICPB-LQ3thu0WW0Nn0mhUnmECcBWw93JxwxHUeCWtTg7Dq9pYAY8PmhA-gMqhJDfQ5azYkP6MIKAXr-aolJ0e-6_R9dQFGru6I8nvXlAFq0XNGZtVustiH-Lbu1QDBQa6-=w1182-h1578-s-no?authuser=0"
                    alt="Ashutosh Kumar's Profile Picture"
                    width="331"
                    height="429"
                />
            </div>
            <div className="profile-details">
                <h2>{developerInfo.name}</h2>
                <p>
                    LinkedIn: <a href={developerInfo.linkedin} target="_blank">Ashutosh Kumar</a>
                </p>
                <p>
                    GitHub: <a href={developerInfo.github} target="_blank">Ashutosh Kumar</a>
                </p>
                <p>{developerInfo.about}</p>
            </div>
        </div>
    );
};
