import {Card, Button, Typography, CircularProgress} from "@mui/material";
import EpisodeCard from "./EpisodeCard";
import {useState} from "react";
import UpdateCardForm from "./UpdateCardForm";


const CardComponent = props => {
    const {
        isFetching, adminId, card, card: {
            name, type, origin, id, img, relations: {
                gender: {type: genderType},
                episodes
            }
        }
    } = props
    const [isEpisode, setIsEpisode] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const episodeHandler = () => {
        setIsEpisode(prevIsEpisode => prevIsEpisode = !isEpisode)
    }
    const cardUpdateHandler = () => {
        setIsUpdate(prevIsUpdate => prevIsUpdate = !isUpdate)
    }
    return (
        <Card>
            {isFetching && <CircularProgress/>}
            {isUpdate ?
                (<UpdateCardForm
                cardUpdateHandler={cardUpdateHandler}
                adminId={adminId}
                card={card}
            />) : (
                <>
                    <img src={img} height="50px" width="50px"/>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                    <Typography variant="h5">
                        {type}
                    </Typography>
                    <Typography variant="h5">
                        {JSON.stringify(origin)}
                    </Typography>
                    <Typography variant="h5">
                        {id}
                    </Typography>
                    <Typography>
                        {genderType}
                    </Typography>
                    {isEpisode && episodes && <EpisodeCard episode={episodes}/>}
                    <Button size="small" variant="outlined" color="success" onClick={episodeHandler}>
                        Episode
                    </Button>
                    <Button size="small" variant="outlined" color="success" onClick={cardUpdateHandler}>
                        Update
                    </Button>
                </>
            )}

        </Card>
    )
}
export default CardComponent;