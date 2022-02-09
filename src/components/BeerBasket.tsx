import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { Beer } from '../types';

export const openBasket = atom(false);
export const toggleBasket = atom(null, (_get, set, update: boolean) => {
    set(openBasket, update);
});

const BeerBasket = () => {
    const [isOpenBasket] = useAtom(openBasket);
    const [, toggle] = useAtom(toggleBasket);
    const selectedBeers: { beer: Beer; quantity: number }[] = [
        { beer: { id: 1, name: 'Beer 1' }, quantity: 1 },
        { beer: { id: 2, name: 'Beer 2' }, quantity: 2 },
    ];
    return (
        <Drawer
            anchor="right"
            open={!!isOpenBasket}
            onClose={() => toggle(false)}
        >
            <List>
                {selectedBeers.map(({ beer, quantity }) => (
                    <ListItem key={beer.id}>
                        <ListItemText primary={beer.name} />
                        <ListItemText primary={quantity} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default BeerBasket;
