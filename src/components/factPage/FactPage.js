import React from "react";
import { Link } from "react-router-dom";

const FactPage = () => {
    return (
        <React.Fragment>
            <div>Fact Page</div>
            <Link to="/results">See Your Results!</Link>
        </React.Fragment>
    );
};

export default FactPage;
