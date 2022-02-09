import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { Beer } from '../types';

const BeerCard = (props: { beer: Beer }) => {
    const { beer } = props;
    return (
        <Card key={beer.id}>
            <CardMedia
                component="img"
                sx={{ width: 151, height: 151 }}
                image={beer.image_url}
                alt="green iguana"
            />
            <CardContent
                sx={{
                    maxWidth: 200,
                    maxHeight: 200,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography color="text.primary" gutterBottom>
                    {beer.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {beer.tagline}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default BeerCard;
