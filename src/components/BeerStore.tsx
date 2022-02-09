import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from '@mui/material';
import BeerCard from './BeerCard';

const BeerStore = () => {
    return (
        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {new Array(10).fill(0).map((_, i) => (
                <BeerCard key={i} />
            ))}
        </Container>
    );
};

export default BeerStore;
