/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Card, Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { enrollCourse, setEnrollments, unenrollCourse } from "../Courses/enrollmentReducer";
import { fetchEnrollments, enrollInCourse, unenrollFromCourse } from "../Courses/enrollmentClient";
import { fetchAllCourses } from "../Courses/client";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
   {
  
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);    const dispatch = useDispatch();
    const [enrolledin, setEnrolledin] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    useEffect(() => {
      const loadEnrollments = async () => {
        try {
          const enrollments = await fetchEnrollments(currentUser._id);
          dispatch(setEnrollments(enrollments));
        } catch (error) {
          console.error('Error loading enrollments:', error);
        }
      };

      const loadAllCourses = async () => {
        const courses = await fetchAllCourses();
        setAllCourses(courses); 
      };

      loadEnrollments();
      loadAllCourses();
    }, [dispatch]);

    const handleEnrollment = async (courseId: string) => {
      try {
        const isEnrolled = enrollments.some(
          (enrollment: { user: string; course: string }) =>
            enrollment.user === currentUser._id && enrollment.course === courseId
        );
      
        if (isEnrolled) {
          await unenrollFromCourse(courseId);
          dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
        } else {
          await enrollInCourse(courseId);
          dispatch(enrollCourse({ _id: `${currentUser._id}-${courseId}`, user: currentUser._id, course: courseId }));
        }
      } catch (error) {
        console.error('Error handling enrollment:', error);
      }
    };

    const isEnrolled = (courseId: string) => {
      return enrollments.some((enrollment: any) => {
        if (typeof enrollment === 'object' && 'user' in enrollment && 'course' in enrollment) {
          console.log('Checking enrollment:', enrollment);
          return enrollment.user === currentUser._id && enrollment.course === courseId;
        }
        return false;
      });
    };

    let coursesToShow;
    if (enrolledin) {
      coursesToShow = allCourses;
    } else {
      coursesToShow = courses;
    }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => setEnrolledin(!enrolledin)}> Enrollments </button>
      {currentUser.role === 'FACULTY' && <><h5>New Course
        <button className="btn btn-primary float-end me-2"
          id="wd-add-new-course-click"
          onClick={addNewCourse}> Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><hr /><br /><FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} /><Form.Control as="textarea" value={course.description} rows={3}
          onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr /></>
    }
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesToShow
            .map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src={`/images/${course.number}.jpg`} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                      
                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                      </button>
                      <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                    </Card.Body>
                  </Link>
                  <Card.Body>
                  <button
                      className={
                        isEnrolled(course._id)
                          ? "btn btn-danger"
                          : "btn btn-success"
                      }
                      onClick={() => handleEnrollment(course._id)}
                    >
                      {isEnrolled(course._id)
                        ? "Unenroll"
                        : "Enroll"}
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>);}
