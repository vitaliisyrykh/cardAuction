import {Col} from "reactstrap";
import React from "react";

function UserCard (props){
    const {name}=props;
    const addRoleHandler = ()=>{

    }
    return (
        <Col
            className="font-icon-list col-xs-6 col-xs-6"
            lg="2"
            md="3"
            sm="4"
        >
            <div className="font-icon-detail">
                <i className="tim-icons icon-alert-circle-exc" />
                <p>{name}</p>
                <button onClick={addRoleHandler}>Add admin</button>
            </div>
        </Col>
    )
}
export default UserCard;