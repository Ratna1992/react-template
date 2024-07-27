import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Props from '../components/Props';
import Hooks from '../components/Hooks';
import Forms from '../components/Forms';
import Api from '../components/Api';
import Products from '../cart/Products';
import Offers from '../cart/Offer';
export default function TemplateRoutes() {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/props" element={<Props />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/api" element={<Api />} />
            <Route path ="/cart" element={<Products/>}/>
            <Route path = "/offers" element={<Offers />} />
        </Routes>

    )
}
