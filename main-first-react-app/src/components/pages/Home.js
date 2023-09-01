import React from "react";
import SearchBar from "../Elements/SearchBar";
import Topsearch from "../Elements/Topsearch";
import Imagecolsection from "../Elements/Imagecolsection";

const Home = (props) => {
    return (
        <div>
            <section className="container">
                <div className="w-100 text-center" style={{marginBottom: "30px"}}>
                    <h1>Use Domain Finder to find unique domains!</h1>
                    <p className="fs-6 main-p">
                        Millions of people are searching for companies, domains, meta tags, company names and etc., on{" "}
                        <br /> Domain finder. Try today! <b>1 000 000</b> data for your search.
                    </p>
                </div>
                <SearchBar />
                <Topsearch />
                <Imagecolsection />
            </section>
        </div>
    );
};
export default Home;