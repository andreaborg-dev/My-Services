import { Helmet } from 'react-helmet-async';

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact Me</title>
                <meta name="description" content="Get in touch with us to learn more about our services and how we can help you." />
            </Helmet>
            <h1>Contact Us</h1>
            <p>If you have any questions or would like to learn more about our services, please feel free to reach out to us.</p>
            <p>You can contact us via email at info@myservices.com or by phone at (123) 456-7890.</p>
            <p>Contact us today to learn more about how we can help you achieve your goals!</p>
        </div>
    );
}