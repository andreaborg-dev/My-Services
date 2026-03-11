import { Helmet } from 'react-helmet-async';
export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Welcome to our company! Learn more about our services and how we can help you achieve your goals." />
            </Helmet>
            
        </div>
    );
}