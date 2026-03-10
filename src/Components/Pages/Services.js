import { Helmet } from 'react-helmet-async';

export default function Services() {
    return (
        <div>
            <Helmet>
                <title>My Services</title>
                <meta name="description" content="Explore the range of services we offer to help your business grow and succeed." />
            </Helmet>
            <h1>Our Services</h1>
            <p>We offer a wide range of services designed to meet the unique needs of our clients. Our team of experts is dedicated to providing high-quality solutions that drive results.</p>
            <p>Whether you need consulting, implementation, or ongoing support, we have the expertise to help you succeed.</p>
            <p>Contact us today to learn more about how we can help you achieve your goals!</p>
        </div>
    );
}