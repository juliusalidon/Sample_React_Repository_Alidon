import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


const NavigationBar = () => {
    return (
        <>
        <Navbar className="bg-warning ">
                <Navbar.Brand className="text-danger p-3"><h1>Anime List</h1></Navbar.Brand>
        </Navbar>
        </>
    );
}

export default NavigationBar;