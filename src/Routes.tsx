import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import Index from './pages/Index';

const Routes = () => {
    return (
        <BrowserRouter>
            <AppRoutes>
                <Route path="/" element={<Index />} />
            </AppRoutes>
        </BrowserRouter>
    );
};

export default Routes;
