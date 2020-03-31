import HEAD from 'next/head'
import Navbar from "./Navbar";

const Layout = (props) => (
    <div>
        <HEAD>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/> 
        </HEAD>
        <Navbar/>
        <div className="container">
        {props.children}
        </div>
    </div>
);

export default Layout;