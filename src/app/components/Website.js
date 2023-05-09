/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Form from './Form'
import Navbar from './Navbar'
import Hero from './Hero'
import Cardsa from './Cardsa'
import Cardsb from './Cardsb'
import Metaverse from './Metaverse'
import Myfooter from './Myfooter'

function website() {
    // document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
    return (
        <>
            {/* <!-- Navbar Section --> */}

            <Navbar />

            <div className="container">
                {/* <!-- Hero Section --> */}

                <Hero />

                {/* <!-- Cards A Section --> */}

                <Cardsa />

                {/* <!-- Cards B Section --> */}

                <Cardsb />

                {/* <!-- Metaverse Section --> */}

                <Metaverse />

                {/* <!-- Form Section --> */}

                <Form />

            </div>

            {/* <!-- Footer Section --> */}

            <Myfooter />

        </>
    )
}

export default website
