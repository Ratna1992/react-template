import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Props from '../components/Props';
import Hooks from '../components/Hooks';
import Forms from '../components/Forms';
import Api from '../components/Api';
export default function TemplateRoutes() {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/props" element={<Props />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/api" element={<Api />} />
        </Routes>

    )
}
