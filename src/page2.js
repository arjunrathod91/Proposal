import { Link } from "react-router-dom";

function page2(){
    return(
        <div>
            <div className="container">
                <div className="gifbox">
                <img src={'./IMG/first gif.gif'} />
                </div>
                <div className="childcont">
                <h3>Men Tujse Bohh..ot Pyaar Karta Hun 😍</h3>
                <p className="para" >-Aur Tu Bhi I Love You Bolde. </p>
                <div className="buttons">
                    <Link to="/page5"><button className="">Yes </button></Link>
                    <Link to="/page3"><button>No</button></Link>
                </div>
                </div>
            </div>
        </div>
    )

}
export default page2;