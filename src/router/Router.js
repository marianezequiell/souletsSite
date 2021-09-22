import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from '../components/Secciones/Cart';
import Home from '../components/Secciones/Home';
import NavBar from'../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import ListCategories from '../components/ListCategories';
import Categories from '../components/Secciones/Categories';
import NotFound from '../components/Secciones/NotFound';
import Item from '../components/Secciones/Item';
import Nosotros from '../components/Secciones/Nosotros';
import Faqs from '../components/Secciones/Faqs';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/cart" component={Cart}/>             
                <Route exact path="/categories/:id" component={Categories}/>
                <Route exact path="/item/:idItem" component={Item}/>
                <Route path="/categories" component={ListCategories} />
                <Route path="/aboutus/" component={Nosotros} />
                <Route path="/faq" component={Faqs} />
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;