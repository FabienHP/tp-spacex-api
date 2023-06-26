import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LaunchePage from './components/LaunchePage';
import CapsulePage from './components/CapsulePage';

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
          <Route path='/launche/:id' element={<LaunchePage />} />
          <Route path='/capsule/:id' element={<CapsulePage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </ThemeProvider >
  );
}

export default App;
