import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const GridItems = (props) => {
    let information = {
        name: props.name,
        image: props.imageFile,
        desc: props.desc
    };
    return ( 
        <>
            <div className="col-4">
                <Card>
                    <Card.Img variant="top" src={props.imageFile}/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    <Button variant="warning">
                       <Link to="/Sample_React_Repository_Alidon/SinglePage" state={information}>
                            Go somewhere
                       </Link>
                    </Button>
                    </Card.Body>
                </Card>
          </div>
        </> 
     );
}
 
export default GridItems;