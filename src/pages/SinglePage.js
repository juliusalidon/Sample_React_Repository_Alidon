import {Button, Card} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
const SinglePage = () => {
    const location = useLocation()
    const data = location.state;
    return ( 
        <>
            <h1 className="text-warning">
                 {data.name}
            </h1>
            <div className='card'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <img src={data.image} className="w-100" alt="" />
                        </div>
                        <div className="col-6">
                            <h3>Synopsis:</h3>
                            <p>{data.desc}</p>
                            <br /><br /><br />
                            <Button variant="warning">
                                <Link to="/Sample_React_Repository_Alidon/">
                                     Go Back
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default SinglePage;