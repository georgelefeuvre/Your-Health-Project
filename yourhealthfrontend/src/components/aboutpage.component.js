import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, ListGroup } from 'react-bootstrap'


//renders about page JSX code 
export default class AboutPage extends Component {
    render() {
        return (
            <Container>
                <br></br>
                <body class="row">
                    <div class="column">
                        <div class="card">
                            <div class="container">
                                <br></br>
                                <h3>Contact details</h3>
                                <p>Please feel free to contact the Your Health team should you have any queries or concerns...</p>
                                <p class="title">Email adress:</p>
                                <strong>yourhealth@gmail.com</strong>
                            </div>
                            <br></br>
                        </div>
                    </div>
                   <div><br></br></div>
                    <div class="column">
                        <div class="card">
                            <div class="container">
                                <br></br>
                                <h3>About your data</h3>
                                <p>As the your health application can be used to save your private medical information, your rights as a data subject must be upheld.</p>
                                <p>What this means is that this application will never make use of your confidential information for any purposes other than for storage. All information you enter will be securly stored and available to you at all times.
                                </p>
                                <p>Please contact the email address provided above if you require: </p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>A copy of all confidential data stored within Your Health.</ListGroup.Item>
                                    <ListGroup.Item>To have all confidential data removed from the Your Health system.</ListGroup.Item>
                                    <ListGroup.Item>Or if you would like to request further clarifiation on what happens to your data within the Your Health system.</ListGroup.Item> 
                                </ListGroup>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </body>
                <br></br><br></br>
            </Container>

        )
    }
}
