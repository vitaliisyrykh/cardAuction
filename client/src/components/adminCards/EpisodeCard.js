import {Card, Typography} from "@mui/material";

const EpisodeCard = props => {
    const {
        episode: {name, air_date}
    } = props;
    return (
        <Card>
            <Typography variant="h4" color="red">
                Episode
            </Typography>
            <Typography variant="h5">
                {name}
            </Typography>
            <Typography variant="body1">
                {air_date}
            </Typography>
        </Card>
    )
}

export default EpisodeCard;