import React,{useEffect} from "react";
import {Card, CardHeader, CardBody, Row, Col} from "reactstrap";
import {useSelector,useDispatch} from "react-redux";
import {adminGetUsers} from '../redux/actions/createAdminActions';
import UsersCard from "../components/UserCard/UsersCard";

function Users() {
    const {users, isFetching, error} = useSelector(state => state.admin);
    console.log(error)
    const {user}=useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(adminGetUsers({id:user.id}))
    },[dispatch])
    return (
        <>
            {/*<div className="content">*/}
            {/*    <Row>*/}
            {/*        <Col md="12">*/}
            {/*            <Card>*/}
            {/*                <CardHeader>*/}
            {/*                    <h5 className="title">100 Awesome Nucleo Icons</h5>*/}
            {/*                    <p className="category">*/}
            {/*                        Handcrafted by our friends from{" "}*/}
            {/*                        <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a>*/}
            {/*                    </p>*/}
            {/*                </CardHeader>*/}
            {/*                <CardBody className="all-icons">*/}
            {/*                    <Row>*/}
            {/*                        {users.map(u => {*/}
            {/*                            <UsersCard key={u.id} user={u}/>*/}
            {/*                        })}*/}

            {/*                    </Row>*/}
            {/*                    <span>{JSON.stringify(error)}</span>*/}
            {/*                </CardBody>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
        </>
    );
}

export default Users;
