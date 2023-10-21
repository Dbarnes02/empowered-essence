import { Container, Navbar, Nav } from "react-bootstrap"

export default function Header() {
    return (
        <div>
            <Navbar expand="lg" sticky="top" bg="dark" className="justify-content-between">
                <Container>
                    <Navbar.Brand href="#home">Empowered Essence</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto justify-content-between">
                        <Nav.Link href="#story">My Story</Nav.Link>
                        <Nav.Link href="#aroma">Aroma Freedom</Nav.Link>
                        <Nav.Link href="#dr.b">Dr. Benjamin</Nav.Link>
                        <Nav.Link href="#privacy">Privacy</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
                <img 
                    scr="/public/images/ee-logo.webp"
                    width="250"
                    height="250"
                    alt="Empowered Essence Logo" 
                />
            <div>
                <p>The Transformation Technique Discovery Call</p>
            </div>
        </div>
    )
}