import { Link } from "react-router-dom";

const NotFind = () => {
    return (
        <div >
            <div className="text-center mt-16">
           
                 <h1>OOOOOOOOOOPPPPPPPPPPPPPSSSSSSSSSSSSS !!! ...............</h1>
                 <h1>This site can not be reached</h1>
                 <p>you want to go back <Link to="/"><button className="btn btn-link"> click here</button> </Link>  </p>
            </div>
            
            
        </div>
    );
};

export default NotFind;
