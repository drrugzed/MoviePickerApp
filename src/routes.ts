import Home from '@pages/Home';
import About from './pages/About';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';

type Page ={
    path:string,
    element:React.ComponentType,
    index?:boolean
}
export const pages:Page[] = [
    {path:'/',element:Home,index:true,},
    {path:'/about',element:About},
    {path:'/login',element:LoginPage},
    {path:'/signup',element:RegisterPage}
]
    
