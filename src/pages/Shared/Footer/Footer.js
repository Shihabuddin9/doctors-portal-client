import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className="bg-gray-100 text-center lg:text-left">
                <div className="p-6">
                    <div className="md:flex justify-around items-center">

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">SERVICES</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <Link to="/" className="text-gray-800">Emergency Checkup</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-800">Monthly Checkup</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-800">Weekly Checkup</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-800">Deep Checkup</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">ORAL HEALTH</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <Link to="/" className="text-gray-800">Fluoride Treatment</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-800">Cavity Filling</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-800">Teath Whitening</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h5 className="uppercase font-bold mb-2.5 text-gray-800">OUR ADDRESS</h5>

                            <ul className="list-none mb-0">
                                <li>
                                    <Link to="/" className="text-gray-800">New York - 101010 Hudson</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700 text-center p-4" >
                    &#169;
                    {new Date().getFullYear()} Copyright:
                    <a className="text-gray-800" href="https://tailwind-elements.com/"> All Rights Reserved</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;