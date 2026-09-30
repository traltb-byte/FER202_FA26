//student object: id, name, major, year, gpa, avatar, contact
import React from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
const StudentCard = ({ student }) => {
    const { email: studentEmail, phone: studentPhone } = student.contact;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={student.avatar} />
            <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{student.major}</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>GPA: {student.gpa}</ListGroup.Item>
                    <ListGroup.Item>Email: {studentEmail}</ListGroup.Item>
                    <ListGroup.Item>Phone: {studentPhone}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}
    export default StudentCard;