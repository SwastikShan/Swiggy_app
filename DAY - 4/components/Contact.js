import React from "react";

const Contact = () => {
    const name = "Ashutosh Kumar";
    const phoneNumber = "+91-9352478931";
    const email = "ashu.kumarexam@gmail.com";
    const address = "Near Ranjhi Police Station, Jabalpur";
    const profileImage = "https://lh3.googleusercontent.com/pw/AIL4fc-_S73BmA7IxYRzG33j3byk045NNDjx8NreH1KrIwqYSncbLkQ508Ij61U2lhdofWe21Al8g2qUHKyVhhIYNqptUBS8vZ_30_EOnZbqBimxH8eIZj8LpDVtrVT2BjfxaIggapSlYaD8nhEVgPun9jG44jlZjcuiXP-ih8Q_EkLNNuS4aQZ38ft-Oeo1WZltINDCR-oPGDTcff3vLPtnETEGnsDarsdEc7oBc62Iqtl8-SLIzC0vzheIX3F08vCqOCbAMJvztSzvypH5RCNL1LIWLJ-Bw9OSJP6LtuQA8hNTmrdiw8bG0fZPun_muY58HcgdK3GkNHqXrR3oQXrpORgD4RQ923Bk0KlI4AGmUrMTn5AHqaHZiwItbp_uT3rCMSjdFINXak6ApFo21j6PgINTc0cV-DKXes4mjVSXSCiz4x7OD61e7ShN-Ue2UbiQRCwRIhvEBcmsVAq8YBh5kaLUno7Ku8w1qDrU-R6oPhd3IK5aEFYGwv6I2Rd5LXTCeMEE5d9PN70HeK6yWIqH5jdTCMqaNC8DyySIdtfvVboqkEsMv5aABcrvVbsEHnSSlHsnOjty2s3nu93OJPg_OcAz_ayXu7-G7Hv4l7Va7D0qhqt8ejvZMz8MgJPKocBBAcsGQIB1G6HBGhztx4LJqyEa7YSDZBg8TdeGDASfrWQZ5psbR2x-NesyRyE4P6vW-ZvSX53d7rZRzkgpnLnJGZLapdB3mBcQPoZi4XeRnU0LSz0nWZMJw7MoRqJ8A4Gsa8uy7oneHNzT0uPkJ29bBJiCXsMDjvQYV3FwzsWHSf3Z_al8kTFEFWjCAd3BuHn0Gy4jWHg845h4L_y1bQng9f1Gq9mAf8DNCjJhsEkeKD1uWtr5Lc-j93ysaQ8ibeOJydYFYyBTOsjW52ok6kvY5kSPBBbZ-HISl4huSpcyYxyU9RY0mBFcv4KX9B6uxFvQEEkVYmgt0mICPB-LQ3thu0WW0Nn0mhUnmECcBWw93JxwxHUeCWtTg7Dq9pYAY8PmhA-gMqhJDfQ5azYkP6MIKAXr-aolJ0e-6_R9dQFGru6I8nvXlAFq0XNGZtVustiH-Lbu1QDBQa6-=w1182-h1578-s-no?authuser=0";

    return (
        <>
        <div className="contact">
            <div className="profile">
                <img src={profileImage} alt={name} />
                <h2>{name}</h2>
            </div>
            <div className="details">
                <p><strong>Phone:</strong> {phoneNumber}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address}</p>
            </div>
            </div>
        <div className="contact">
            <div className="profile">
                    <img src={"https://lh3.googleusercontent.com/pw/AIL4fc9IgQBOx0fxSCUGezY2BZrY9FIltI3NOOWEbEci_jEIBorGSjV-54Oh7l9udEmz99Bg71n2uCvmLzFgiQVFILveEjTWb9OzB_iD16u6GvbPZIjGOJgg4ZtXEYn7Nw5Wf-L3NLAWpMThnUQcyC4W3cAPO_RfaxlCQh9zOHM8Mew4g1g_a6csCGgA-G8VKl6KxKOOT1yflZI5M35YYqaEvfIIwddrBsetjsSvJeXMQqxuRjUzZMTExYrVUKxXWBIe62_c34W3R_CQYu0JX2zc7Z40IPL_O603TYRMlVlLBAH-6ZeZUbyt_6uLJy4lR221EeuR_reXa30UxI5xONRoWWPm35HoC85CV7aHVxnmlfgUd6Cu814S7hso_5YdjmYkdwPCslHA_O_JPQT8UO6I6rrAxhs2HL0DOM6z5cmIpJrweNhWqt7B-tn3ocE_Kb7C1uzPImfEZBs9wFN9ffXZKYgwYF9qUvBN50gIm0w2EoVLS61UB2CDRfrtPMNPiUXFEG-UzjdB7yS5EWZUVpgfMO6rkhzZf5RLdi-zormjRMhnh8dmGvDaxXf4tQOdYZq_dFgbp91rXgOeOo9pL1Op_oZrL12JowyDJzp1__K3Tc19W1vauOzSTZOQ5arTyMKAHXi0LUR09MP_bC4wxmEIjE7LMTD13ZKpwOohXZDBYg1g2cOGLwvwNGIrxnkynKQCA9ZNasFndhnNK7inJ7PSt5-W2aGRXkwhk9ZqqIi25gnIKdnJC80vjPZrMcdi8Ut9W-bD4SrRCtgFwKx7uEjPLSF-yJuhBVBxqASiB_ZIrFiBnO0kFAcADJgC0c8IdKfr0oQJL3M2xJRxpaqyZmeCv0doEMiJrdp_dnYbXZOVe1doHs7_UROfMmR2ok7at2LHpelxQcx5xHy8a5FbVKrZw2pqgYTS2P4osng3mViIKvH702gdgeqJjKnSFdVbO6RoIM9-UI57JdHRDloMfyB9rwy_XvBQ-QaceBgXI826Tt-C7axY6aXdUs9kgPiFPZTQJFEiN_rxlF82NdCll22rMgPCuxu_CR-7cP7qxCJ1DftRLfxwxxQ84O-kDbRHpMzFQd4f3gyJdjxA=w2102-h1578-s-no?authuser=0"} alt={name} />
                <h2>{"Yogendra Manawat"}</h2>
            </div>
            <div className="details">
                <p><strong>Phone:</strong> {"+91-7987048046"}</p>
                <p><strong>Email:</strong> {"yogendramanawat@gmail.com"}</p>
                    <p><strong>Address:</strong> {"Near Ranjhi Police Station, Jabalpur"}</p>
            </div>
            </div>
        </>
    );
};

export default Contact;
