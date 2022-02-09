import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Beer } from '../types';
import BeerCard from './BeerCard';

const BeerStore = () => {
    const [beers, setBeers] = useState<Beer[]>([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then((response) => response.json())
            .then((data) => setBeers(data));
    }, []);

    return (
        <Container
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
            {beers.map((beer) => (
                <BeerCard beer={beer} />
            ))}
        </Container>
    );
};

export default BeerStore;
