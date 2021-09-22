import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Grid, Button, CircularProgress} from "@mui/material";
import NavTabs from "../NavTabs";
import {adminGetCards} from "../../redux/actions/creatorAdminActions";
import CardComponent from "./Card";

const Cards = () => {
    const {cards, isFetching} = useSelector(state => state.admin);
    const {
        user: {
            id: adminId
        }
    } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(adminGetCards({adminId, offset: cards.length, limit: 10}));
    }, [dispatch]);
    return (
        <div>
            <NavTabs/>
            {isFetching && <CircularProgress/>}
            <Button variant="outlined">
                Add card
            </Button>
            <Grid container spacing={{xs: 5, md: 2}} columns={{xs: 4, sm: 8, md: 12}}>
                {cards.map((c) => (
                    <Grid item xs={2} sm={4} md={4} key={c.id}>
                        <CardComponent card={c} adminId={adminId} isFetching={isFetching}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards;