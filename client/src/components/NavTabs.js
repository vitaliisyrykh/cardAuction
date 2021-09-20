import {Tabs, Tab} from "@material-ui/core";
import {useState} from "react";
import {Link} from 'react-router-dom';

function NavTabs(props) {
    const [value, setValue] = useState(0);
    const handleOnChange = (event, value) => {
        setValue(prevValue => prevValue = value)
    };
    return (
        <div>
            <Tabs
                value={value}
                onChange={handleOnChange}
                centered
            >
                <Tab label="Users" to="/admin/users" component={Link}/>
                <Tab label="Cards" to="/admin/cards" component={Link}/>
            </Tabs>
        </div>
    )


}

export default NavTabs;