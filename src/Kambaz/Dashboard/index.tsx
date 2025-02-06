import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/react.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/c.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1230 C</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Learn C!</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1231 Python</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Learn Python!</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card></Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1232 Java</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Learn Java!</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card></Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/cplusplus.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1233 C++</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Learn C++!</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card></Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/sql.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1235 SQL</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Learn SQL!r</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card></Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/rust.png" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1236 Rust</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Learn Rust!</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card></Col>
    </Row>
</div></div>
);}
