import { Component } from "react";
import Users from "./Users";

class App extends Component {

    state = {
        users:  [
            {
            name: 'Branko',
            lastName: 'Branković',
            age: 32
            },

            {
            name: 'Janko',
            lastName: 'Janković',
            age: 42
            },

            {
            name: 'Stanko',
            lastName: 'Stanković',
            age: 52
            }
        ],
        userText: 'Cheers!'
    }

    render(){
        return (
            <>
                <Users users={this.state.users} userText={this.state.userText}/>
            </>
        );
    }
}

export default App;
