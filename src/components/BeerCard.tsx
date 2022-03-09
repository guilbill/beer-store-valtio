import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { Beer } from '../types';
import { addToBasketAtom, basketAtom, getBeerStockAtom } from './BeerBasket';

const BeerCard = (props: { beer: Beer }) => {
    const { beer } = props;
    const [, addBeer] = useAtom(addToBasketAtom);
    const [basket] = useAtom(basketAtom);
    const [getBeerStock] = useAtom(getBeerStockAtom);

    return (
        <Card
            key={beer.id}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: 41, height: 151 }}
                image={beer.image_url}
                alt="green iguana"
            />
            <CardContent
                sx={{
                    width: 200,
                    height: 80,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography color="text.primary" gutterBottom>
                    {beer.name} - {getBeerStock(beer.id)}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {beer.tagline}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        addBeer(beer);
                    }}
                >
                    Add to basket
                </Button>
            </CardActions>
        </Card>
    );
};

export default BeerCard;
