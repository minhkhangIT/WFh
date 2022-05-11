import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function EmployeeTableComponent() {
    
    return (
      <div >
          <br></br>
          <Container>
            <Row>
                <Col>Total 6 employee</Col>
                <Col xs={4}>
                    <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Col>
                <Col></Col>
            </Row>
          </Container>
          <br></br>
          <div className="content">
    
    <div className="container">
      <div>Search result</div>
      <br></br>

      <div className="table-responsive">

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <label className="control control--checkbox">
                  <input type="checkbox" className="js-check-all"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <th scope="col">No</th>
              <th scope="col">FullName</th>
              <th scope="col">Phone</th>
              <th scope="col">Team</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>1392</td>
              <td>James Yates</td>
              <td>Web Designer</td>
              <td>+63 983 0962 971</td>
              <td>NY University</td>
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>4616</td>
              <td>Matthew Wasil</td>
              <td>Graphic Designer</td>
              <td>+02 020 3994 929</td>
              <td>London College</td>
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>9841</td>
              <td>Sampson Murphy</td>
              <td>Mobile Dev</td>
              <td>+01 352 1125 0192</td>
              <td>Senior High</td>
            </tr>
            <tr>
              <th scope="row">
                <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              <td>9548</td>
              <td>Gaspar Semenov</td>
              <td>Illustrator</td>
              <td>+92 020 3994 929</td>
              <td>College</td>
            </tr>
            
          </tbody>
        </table>
      </div>


    </div>
      </div>
      </div>
    );
  }
  
  export default EmployeeTableComponent;
  