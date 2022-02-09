import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import BeerAppBar from './components/BeerAppBar';
import BeerStore from './components/BeerStore';

function App() {
    return (
        <Box sx={{ display: 'flex' }}>
            <BeerAppBar />
            <BeerStore />
        </Box>
    );
}

export default App;
