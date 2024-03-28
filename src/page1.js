// import img1 from '../../public/IMG/first gif.gif'

import { Link} from "react-router-dom";

function page1(){
    return(
        <div>
            <div className="container">
                <div className="gifbox">
                    <img src={'./IMG/sun baat karni.gif'} />
                </div>
                <div className="childcont">
                <h3>Oye Sun Ek Baat Karni Thi Tujse</h3>
                <div className="buttons">
                    <Link to="/page2"><button className="">Kya </button></Link>
                    {/* <button>No</button> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default page1;