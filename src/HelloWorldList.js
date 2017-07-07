import React, {Component} from 'react';
import HelloWorldFunctional from './HelloWorldFunctional';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {

    constructor(props){
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Bender'] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting}/>
                {this.renderGreetings()}
            </div>
        );
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <HelloWorldFunctional
            key={name}
            name={name}
            removeGreeting={this.removeGreeting}
            />
        ));
    }

    addGreeting(newName) {
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
            return name !== removeName;
        });
        this.setState({ greetings: filteredGreetings });
    }
}

export default HelloWorldList;