import React, { Component } from "react";

export default class CreateEntry extends Component {
    //constructor called before component is mounted
    constructor(props) {
        super(props);

        
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeEntry = this.onChangeEntry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //.state = react variable 
        this.state = {
            date: '',
            time: '',
            entry: ''
        }
    }

        onChangeDate(e) {
            this.setState({
                date: e.target.value
            });
        }

        onChangeTime(e) {
            this.setState({
                time: e.target.value
            });
        }

        onChangeEntry(e) {
            this.setState({
                entry: e.target.value
            });
        }

        onSubmit(e) {
            e.preventDefault();

            const createentry = {
                date: this.state.date,
                time: this.state.time,
                entry: this.state.entry
            }

            console.log(createentry)
        }
    
    
    render() {
        return (
            <div>
                <h1>Create a New Journal Entry</h1>
                <form onSubmit={this.onSubmit}>
                    <div><label>Date: </label>
                        <input type="text" required value={this.state.date} onChange={this.onChangeDate}/> 
                    </div>
                    <div><label>Time: </label>
                        <input type="text" required value={this.state.time} onChange={this.onChangeTime}/> 
                    </div>
                    <div><label>Entry: </label>
                        <input type="text" required value={this.state.entry} onChange={this.onChangeEntry}/> 
                    </div>
                    <div>
                        <input type="submit" value="Create Your Entry"/>
                    </div>
                </form>
            </div>
        )
    }
}
