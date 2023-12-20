import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey , I'm Vineet!
                    A Frontend Webdeveloper and Open source enthusiast from India india 
                    <br></br>
                    <b> Vineet</b>
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://https://github.com/Vineet-0" target="black">
                    <BsGithub />
                </a>
                {/* <a href="https://www.youtube.com/channel/UCT6c0Uy0GuBfUp2-A1m06xQ" target="black">
                    <BsYoutube />
                </a> */}
                <a href="https://www.instagram.com/_v.i.n.e.e.t/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/vineet-351016/" target="black">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Footer;