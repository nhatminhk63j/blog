import React, { Component } from 'react';
import "../assets/css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPhoneAlt, faVoicemail, faMailBulk } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo">
                                <h4>Nhat Minh' Blog</h4>
                            </div>
                            <div className="contact-details">
                                <p><FontAwesomeIcon icon={faAddressBook} /> Dai hoc Cong nghe, Dai hoc Quoc gia Ha Noi</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> 0384721376</p>
                                <p><FontAwesomeIcon icon={faMailBulk} /> <a href="mailto:info@company.com">nhatngo11a1@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="menus d-flex">
                            <ul className="list-unstyled">
                                <li> <a href="#">My Account</a></li>
                                <li> <a href="#">Add Listing</a></li>
                                <li> <a href="#">Pricing</a></li>
                                <li> <a href="#">Privacy &amp; Policy</a></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li> <a href="#">Our Partners</a></li>
                                <li> <a href="#">FAQ</a></li>
                                <li> <a href="#">How It Works</a></li>
                                <li> <a href="#">Contact</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;