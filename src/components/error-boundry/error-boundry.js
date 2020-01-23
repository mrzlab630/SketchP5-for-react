import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';


export default class ErrorBoundry extends Component{

    state = {
        hasError: false,
        error: false,
        errorInfo:false
    };

    componentDidCatch(error, errorInfo) {

        this.setState({
            hasError:true,
            error: error,
            errorInfo: errorInfo})
    }

    render() {

        if(this.state.hasError){
            return <ErrorIndicator
                info={this.state.error && this.state.error.toString() + " " + this.state.errorInfo.componentStack}/>;
        }

        return this.props.children;

    }
}