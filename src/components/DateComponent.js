import React from 'react';
var FontAwesome = require('react-fontawesome');


 class Fecha extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = "Hoy:"+" "+today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date' align="right">
                <FontAwesome name='calendar' /> 
                <h5  >{this.state.date}</h5>
            </div>
        );
    }
}
export default Fecha;