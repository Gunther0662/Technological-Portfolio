import { useRouterError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouterError();
    console.error(error);

    return (
        <div id="error-page">
        <h1>Error</h1>
        <p>Error, something when wrong.</p>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
}