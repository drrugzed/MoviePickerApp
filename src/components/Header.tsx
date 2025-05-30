import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
} from '@mui/material';
import { pages } from '../routes';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ height: 64, px: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          MoviePicker
        </Typography>
        <TextField
          sx={{ width: 300, bgcolor: 'white', borderRadius: 1 }}
          variant="outlined"
          size="small"
          placeholder="Поиск фильма"
        />
        <Box>
          <Button component={RouterLink} to="/" color="inherit">
            Главная
          </Button>
          <Button component={RouterLink} to="/about" color="inherit">
            О нас
          </Button>
          <Button component={RouterLink} to="/login" color="inherit">
            Вход
          </Button>
          <Button component={RouterLink} to="/signup" color="inherit">
            Регистрация
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default React.memo(Header);
