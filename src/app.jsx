import { Outlet } from 'react-router-dom';
import Nav from './components/nav';

function app() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default app;