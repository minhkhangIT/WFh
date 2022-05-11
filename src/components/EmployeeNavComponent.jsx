import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function EmployeeNavComponent() {
    return (
      <div >
          <br></br>
          <Container>
              <Row>
              <Col><h5>Employee</h5></Col>
              <Col xs={6}></Col>
              <Col>
            <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link href="/home"><i className="bi bi-plus-circle-fill" style={{ fontSize: 30 }}></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1"><i className="bi bi-trash3-fill" style={{ fontSize: 30 }}></i></Nav.Link>
            </Nav.Item>       
            </Nav>
            </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default EmployeeNavComponent;
  