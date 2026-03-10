import { Helmet } from 'react-helmet-async';
export default function About() {
    return (
        <div>
            <Helmet>
                <title>About Me</title>
                <meta name="description" content="Learn more about our company and what we do." />
            </Helmet>
            <h1>About Us</h1>
            <p>We are a company dedicated to providing top-notch services to our clients. Our team of experts is committed to delivering high-quality solutions that meet your needs.</p>
            <p>Our mission is to help businesses grow and succeed by offering innovative and effective services. We value integrity, excellence, and customer satisfaction above all else.</p>
            <p>Contact us today to learn more about how we can help you achieve your goals!</p>
        </div>
    );
}