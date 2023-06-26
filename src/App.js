import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LaunchesPage from './components/LaunchesPage';
import CapsulesPage from './components/CapsulesPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/launches' element={<LaunchesPage />} />
          <Route path='/capsules' element={<CapsulesPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </ThemeProvider >
  );
}

export default App;
