import React from "react";

function  StudentDetails(props) {
    return (
    <React.Fragment>
        <h3>{props.student.id}</h3>
        <h4>{props.student.name}</h4>
        <h5>{props.student.college}, {props.student.city}</h5>
    </React.Fragment>
    );
}

export default StudentDetails