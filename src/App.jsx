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
        userText: 'Pozdrav svima koliko vas ima'
    }

    render(){
        return (
            <>
                <Users users={this.state.users} />
            </>
        );
    }
}

export default App;
