import React from 'react';
import Begin from './Begin/Begin'
import Collection from "./Collection/Collection";
import Obrende from './Obrende/Obrende';
import Primerka from './Primerka/Primerka';
import Shouroom from './Shouroom/Shouroom';
import Star from './Star/Star'
import Otziv from './Otziv/Otziv'
import Instagram from './Instagram/Instagram';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Fab from '../../Components/Fab'

const Home = () => {

    return (
        <main className='page'>
            <FloatingWhatsApp />
            <Begin />
            <Collection />
            <Obrende />
            <Shouroom />
            <Primerka />
            <Star />
            <Otziv />
            <Instagram />
        </main>
    )
};
export default Home;