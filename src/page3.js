import { Link } from "react-router-dom";

function page2(){
    return(
        <div>
            <div className="container">
                <div className="gifbox">
                <img src={'./IMG/second love gif.gif'} />
                </div>
                <div className="childcont">
                <h3>Please Manja Na Kyu ! Bhav Kha Rahi Hain </h3>
                <div className="buttons">
                    <Link to="/page3"><button className="">Okay </button></Link>
                    <Link to="/page4"><button>No</button></Link>
                </div>
                </div>
            </div>
        </div>
    )

}
export default page2;