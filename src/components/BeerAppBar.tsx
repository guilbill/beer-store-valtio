import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import { toggleBasket } from './BeerBasket';
import { useAtom } from 'jotai';

const BeerAppBar = () => {
    const [, toggleBasketDrawer] = useAtom(toggleBasket);
    return (
        <AppBar position="absolute">
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    The Beer Store
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={() => toggleBasketDrawer(true)}
                >
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default BeerAppBar;
