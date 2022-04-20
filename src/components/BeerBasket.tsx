import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { proxy, useSnapshot } from "valtio";
import { derive } from "valtio/utils";
import { Beer } from "../types";
interface BasketState {
  isBasketOpen: boolean;
  selectedBeers: { beer: Beer; quantity: number }[];
}

export const basketState = proxy<BasketState>({
  isBasketOpen: false,
  selectedBeers: [],
});

export const toggleBasket = () => {
  basketState.isBasketOpen = !basketState.isBasketOpen;
};
const derivedState: { [key: string]: { quantity: number } } = {};

export const getBeerQuantityState = (beerId: number) => {
  if (!derivedState[beerId]) {
    const derivedBeerState = derive({
      quantity: (get) =>
        get(basketState).selectedBeers.find(
          (b: { beer: Beer; quantity: number }) => b.beer.id === beerId
        )?.quantity || 0,
    });
    derivedState[beerId] = derivedBeerState;
  }
  return derivedState[beerId];
};

const resetBasket = () => {
  basketState.selectedBeers = [];
};

export const addBeerToBasket = (beer: Beer) => {
  const selectedBeers = basketState.selectedBeers;
  const foundBeer = selectedBeers.find((b) => b.beer.id === beer.id);

  if (foundBeer) {
    foundBeer.quantity += 1;
  } else {
    selectedBeers.push({ beer, quantity: 1 });
  }
};

export const countState = derive({
  total: (get) =>
    get(basketState)
      .selectedBeers.map((beer) => beer.quantity)
      .reduce((acc, curr) => acc + curr, 0),
});

const BeerBasket = () => {
  const { isBasketOpen, selectedBeers } = useSnapshot(basketState);
  return (
    <Drawer anchor="right" open={!!isBasketOpen} onClose={() => toggleBasket()}>
      <List sx={{ width: "460px" }}>
        {selectedBeers.map(({ beer, quantity }) => (
          <ListItem key={beer.id} sx={{ display: "flex" }}>
            <ListItemText primary={beer.name} />
            <ListItemText
              primary={quantity}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            />
          </ListItem>
        ))}
      </List>
      <Button onClick={resetBasket}>Empty basket</Button>
    </Drawer>
  );
};

export default BeerBasket;
