// import HelloWorld from "@/components/HelloWorld";
import LandingPage from "@/components/Marketing/LandingPage";
import About from "@/components/Marketing/About";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

export default [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]