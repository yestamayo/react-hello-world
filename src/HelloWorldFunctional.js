import React, {Component} from 'react';
import './HelloWorldFunctional.css';

class HelloWorldFunctional extends Component{

    constructor(props){
        super(props);
        this.state = { 
            greeting: 'Hola' 
        };
        this.frenchify = this.frenchify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    render() {
        return (
            <div className="HelloWorldFunctional">
                {this.state.greeting} {this.props.name}!
                <br/>
                <button onClick={this.frenchify}>Frenchify!</button>
                <br/>
                <button onClick={this.removeGreeting}>Remove Me!</button>
            </div>
        );
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
}

export default HelloWorldFunctional;
