import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSnapshot } from "valtio";
import { Beer } from "../types";
import {
  addBeerToBasket as addBeer,
  removeBeerFromBasket as removeBeer,
  getBeerQuantityState,
} from "./BeerBasket";

const BeerCard = (props: { beer: Beer }) => {
  const { beer } = props;
  const { quantity } = useSnapshot<{ quantity: number }>(
    getBeerQuantityState(beer.id)
  );
  return (
    <Card
      key={beer.id}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 41, height: 151 }}
        image={beer.image_url}
        alt={`${beer.name} beer`}
      />
      <CardContent
        sx={{
          width: 200,
          height: 80,
          display: "flex",
          flexDirection: "column",
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
        {quantity > 0 ? (
          <>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => {
                removeBeer(beer);
              }}
            >
              -
            </Button>
            {quantity}
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                addBeer(beer);
              }}
            >
              +
            </Button>
          </>
        ) : (
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              addBeer(beer);
            }}
          >
            Add
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default BeerCard;
