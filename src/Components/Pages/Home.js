import { Helmet } from 'react-helmet-async';
export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Welcome to our company! Learn more about our services and how we can help you achieve your goals." />
            </Helmet>
            <h1>Welcome to Our Company</h1>
            <p>We are a company dedicated to providing top-notch services to our clients. Our team of experts is committed to delivering high-quality solutions that meet your needs.</p>
            <p>Our mission is to help businesses grow and succeed by offering innovative and effective services. We value integrity, excellence, and customer satisfaction above all else.</p>
            <p>Contact us today to learn more about how we can help you achieve your goals!</p>
        </div>
    );
}