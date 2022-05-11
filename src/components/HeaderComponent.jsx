import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function HeaderComponent() {
    return (
      <div >
            <Navbar bg="light" >
                <Container>
                <Navbar.Brand href="#home">
                <i className="bi bi-emoji-kiss"></i>{'  '}
                Employee Manager
                </Navbar.Brand>
                <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Employee</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Team</Nav.Link>
                </Nav.Item>
                </Nav>
                </Container>
            </Navbar>
      </div>
    );
  }
  
  export default HeaderComponent;
  