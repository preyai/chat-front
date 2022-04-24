import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './components/AuthProvider';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, darkScrollbar } from "@mui/material";
import StoreProvider from "./components/StoreProvider";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: { margin: 0 }
            },
        },
    },
});

root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
            <StoreProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route path="chat" >
                                {/* <Route index element={<Home />} /> */}
                                <Route path=':chatId' element={<Chat />} />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </StoreProvider>
        </AuthProvider>
    </ThemeProvider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
