import React, { Component } from "react";
import { Container } from 'react-bootstrap'


//renders main page JSX code 
export default class HomePage extends Component {
    render() {
        return (
            <Container>
                <br></br>
                <div>
                    <div class="column">
                        <div class="card">
                            <div class="container">
                                <br></br>
                                <h3>Welcome to Your Health!</h3>
                                <p>This application allows you to save journal entries to an online repository, view those entries, and edit and delete them!</p>
                                <p>To access the online journal please click 'View Journal', on the navigation bar. The delete and edit options can also be found here.</p>
                                <p>To create a new journal entry, please click 'Create Entry'.</p>
                                <p>For more infomration on what happens to the data you save in the online journal, please click on the about page link on the navigation bar. </p>
                                <p>If you wish to return to this home screen at any time please click on 'Your Health' on the left of the navigation bar.  </p>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
