import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function NewEmployeesPage(props) {
  const [newEmployees, setNewEmployees] = useState([]);

  const currentUser = {
    id: 2,
    name: 'Alice'
  };

  const newEmployeesData = [
    { id: 1, name: 'John Doe', buddy: 2 },
    { id: 2, name: 'Jane Smith', buddy: 1 },
    { id: 3, name: 'Bob Johnson', buddy: 2 },
    { id: 4, name: 'Sarah Lee', buddy: 3 },
  ];

  useEffect(() => {
    const filteredNewEmployees = newEmployeesData.filter(employee => employee.buddy === currentUser.id);
    setNewEmployees(filteredNewEmployees);
  }, [currentUser.id]);

  return (
    <Container>
      <h1>New Employees</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {newEmployees.map(employee => (
          <Col key={employee.id}>
            <Card>
              <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Text>
                  Buddy: {employee.buddy}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewEmployeesPage;
