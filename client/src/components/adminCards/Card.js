import {Card, Button, Typography, CircularProgress} from "@mui/material";
import {useDispatch} from "react-redux";


const CardComponent = props => {
    const {isFetching, card:{name,type,origin,id}} = props
    return (
        <Card>
            {isFetching && <CircularProgress/>}
            <Typography variant="h4">
                {name}
            </Typography>
            <Typography variant="h5">
                {type}
            </Typography>
            <Typography variant="h5">
                {origin}
            </Typography>
            <Typography variant="h5">
                {id}
            </Typography>
        </Card>
    )
}
export default CardComponent;