import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

const BeerCard = (props: { key: number }) => {
    const { key } = props;
    return (
        <Card key={key} sx={{ minWidth: 275 }}>
            Pouf
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    Pouf
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default BeerCard;
