import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            //isvalid conditional statement
            if (!isValid) {
                setErrorMessage('Your Email Is Invalid.');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
            console.log('Form', formState);
        
        window.location.reload(false);
    };
    return (
        <section className="contactForm">
            <Row className="justify-content-md-center">
                <div className="contact">
                    <h2 data-testid="h1tag">Contact</h2>
                    <Form onSubmit={ handleSubmit } id="contact-form">
                        <Form.Group> 
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name= "name" defaultValue={name} placeholder="Enter your name"  onBlur={handleChange}/>
                        </Form.Group>

                        <Form.Group> 
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name= "email" defaultValue={email} placeholder="Enter your email "  onBlur={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} name= "message" defaultValue={message} onBlur={handleChange} />
                        </Form.Group>

                        {errorMessage && (
                            <div>
                                <p className="error-text">
                                    {errorMessage}
                                </p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </Form>

                </div>
            </Row>
        </section>
    )
}

export default Contact;