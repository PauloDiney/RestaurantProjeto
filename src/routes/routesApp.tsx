// src/routes/RoutesApp.tsx
import { Routes, Route } from 'react-router-dom';


import Rodizio from '../pages/rodizios';
import Home from '../pages/home';
import Alacarti from '../pages/alacarti';

export default function RoutesApp() {
    return (
        <Routes>
                <Route path="/" element={<Home />} />
            <Route path="/rodizio" element={<Rodizio />} />
            <Route path="/alacarti" element={<Alacarti />} />
        </Routes>
    );
}
