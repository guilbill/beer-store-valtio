import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { atom, useAtom } from 'jotai';
import { Beer } from '../types';

const openBasketAtom = atom(false);
export const toggleBasketAtom = atom(null, (_get, set, update: boolean) => {
    set(openBasketAtom, update);
});

export const basketAtom = atom<{ beer: Beer; quantity: number }[]>([]);

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
        </Drawer>
    );
};

export default BeerBasket;
