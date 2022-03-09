import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { atom, useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { Beer } from '../types';

const openBasketAtom = atom(false);
export const toggleBasketAtom = atom(null, (_, set, isOpen: boolean) => {
    set(openBasketAtom, isOpen);
});

export const basketAtom = atomWithReset<{ beer: Beer; quantity: number }[]>([]);

export const getBeerStockAtom = atom<Function>((get) => {
    const beersInBasket = get(basketAtom);
    const getBeerStock = (beerId: number) => {
        const beerInBasket = beersInBasket.find(
            (beerInBasket) => beerInBasket.beer.id === beerId
        );
        return beerInBasket ? beerInBasket.quantity : 0;
    };
    return getBeerStock;
});

export const basketCountAtom = atom<number>((get) => {
    const basket = get(basketAtom);
    console.log('basketCountAtom', basket);
    return basket.reduce((count, { quantity }) => count + quantity, 0);
});

export const addToBasketAtom = atom(null, (get, set, beer: Beer) => {
    const selectedBeers = [...get(basketAtom)];
    const existing = selectedBeers.find((b) => b.beer.id === beer.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        selectedBeers.push({ beer, quantity: 1 });
    }
    set(basketAtom, selectedBeers);
});

const BeerBasket = () => {
    const [isOpenBasket] = useAtom(openBasketAtom);
    const [, toggle] = useAtom(toggleBasketAtom);
    const [selectedBeers] = useAtom(basketAtom);
    const [count] = useAtom(basketCountAtom);
    const resetBasket = useResetAtom(basketAtom);
    return (
        <Drawer
            anchor="right"
            open={!!isOpenBasket}
            onClose={() => toggle(false)}
        >
            <List sx={{ width: '460px' }}>
                {selectedBeers.map(({ beer, quantity }) => (
                    <ListItem key={beer.id} sx={{ display: 'flex' }}>
                        <ListItemText primary={beer.name} />
                        <ListItemText
                            primary={quantity}
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}
                        />
                    </ListItem>
                ))}
            </List>
            <Button onClick={resetBasket}>Empty basket</Button>
        </Drawer>
    );
};

export default BeerBasket;
