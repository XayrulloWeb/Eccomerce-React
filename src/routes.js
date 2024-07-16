import Home from "./Components/Home/Home"
import Cart from "./Components/Cart/Cart"
import Products from "./Components/Products/Products";


const routes = [
    {
        id:1,
        path: '/',
        component: Home,
    },
    {
        id:2,
        path: '/cart',
        component: Cart,
    },
    {
        id:3,
        path: '/products',
        component: Products,
    },


]
export default routes;