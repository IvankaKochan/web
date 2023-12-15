import React from 'react';
import pets from "../data/data";
import {Button, Container, Form, Col, Row, Card, Image} from 'react-bootstrap';
import styles from '../styles/ItemDetails.module.css';
import {Link} from "react-router-dom";

const ItemDetails = ({id}) => {
    const pet = pets[id - 1];

    return (
        <Container className={styles.container}>
            <Card>
                <Row>
                    <Col sm={4}>
                        <Image src={pet.imageSrc} alt={pet.title} fluid className={styles.picture}/>
                    </Col>
                    <Col sm={8}>
                        <Card.Body>
                            <Card.Title className={styles.title}>{pet.title}</Card.Title>
                            <Card.Text className={styles.description}>{pet.description}</Card.Text>
                            <Form fluid>
                                <Form.Group as={Row}>
                                    <Form.Label column md="2">
                                        Quantity
                                    </Form.Label>
                                    <Col md="2">
                                        <Form.Control type="number"/>
                                    </Col>
                                </Form.Group>
                                <Row className={styles.fieldsRow}>
                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Color
                                        </Form.Label>
                                        <Col md="4">
                                            <Form.Control as="select">
                                                <option value="">Select Color</option>
                                                {pet.color.map((choice) => (
                                                    <option key={choice} value={choice}>
                                                        {choice}
                                                    </option>))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Age
                                        </Form.Label>
                                        <Col md="4">
                                            <Form.Control as="select">
                                                <option value="">Select Size</option>
                                                {pet.age.map((choice) => (
                                                    <option key={choice} value={choice}>
                                                        {choice}
                                                    </option>))}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Col>
                </Row>
                <Row className={styles.bottomRow}>
                    <Col sm={8}>
                        <Card.Text className={styles.price}>Price: ${pet.price}</Card.Text>
                    </Col>
                    <Col sm={4} className={styles.buttonsRow}>
                        <Button variant="primary" className={styles.buttons}><Link to={"/catalog"} className={styles.goBack}>Go back</Link></Button>
                        <Button variant="primary" className={styles.buttons}>Add to Cart</Button>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ItemDetails;