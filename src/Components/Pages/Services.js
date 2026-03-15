import { Helmet } from 'react-helmet-async';
import CardList from '../Cards';

export default function Services() {
    return (
        <>
            <Helmet>
                <title>My Services</title>
                <meta name="description" content="Explore the range of services we offer to help your business grow and succeed." />
            </Helmet>
            <div className='Services-Page'>
                <div className='Header'>
                    <h1>my services</h1>
                </div>
                <CardList />
            </div>
        </>
    );
}