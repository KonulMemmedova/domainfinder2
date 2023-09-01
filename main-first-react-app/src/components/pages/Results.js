import Filter from "../Elements/Filter";
import ResultList from "../Elements/ResultList";
import SearchBar from "../Elements/SearchBar";

const Results = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SearchBar />
                </div>
                <div className="col-lg-4 col-12">
                    <Filter />
                </div>
                <div className="col-lg-8 col-12">
                    <ResultList />
                </div>
            </div>
        </div>
    );
};

export default Results;