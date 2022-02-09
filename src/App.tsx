import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import BeerAppBar from './components/BeerAppBar';
import BeerBasket from './components/BeerBasket';
import BeerStore from './components/BeerStore';

function App() {
    return (
        <Box sx={{ display: 'flex' }}>
            <BeerAppBar />
            <BeerStore />
            <BeerBasket />
        </Box>
    );
}

export default App;
