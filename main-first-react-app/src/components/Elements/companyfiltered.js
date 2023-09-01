import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {InputGroup} from "reactstrap";
import "../../assets/css/main.css";

const CompanyFiltered = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="container">
                <div className="company-side-menu-style mt-3">
                    <div className="company-menu-header" onClick={toggleMenu}>
                        <h6>Company Sectors</h6>
                        <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                    </div>
                    {menuOpen && (
                        <div className="company-menu-options mt-3">
                            <div>
                                {" "}
                                <InputGroup className="company-input-group mt-3">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback" />
                                        <input type="text" className="form-control" placeholder="Search sector" />
                                    </div>
                                </InputGroup>
                            </div>
                            <div>
                                {" "}
                                <form className="checkbox-wrapper mt-3">
                                    <label>
                                        <input type="checkbox" />
                                        Administrative
                                    </label>
                                    <label>
                                        <input type="checkbox" checked />
                                        Arts & Design
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Business
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Consulting
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Customer Services & Support
                                    </label>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyFiltered;