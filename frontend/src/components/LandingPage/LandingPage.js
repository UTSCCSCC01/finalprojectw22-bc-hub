import Hero from './Hero'
import Feature1 from './Feature1'
import SpeechBubbles from './SpeechBubbles'
import Footer from './Footer'
import { Stack } from '@chakra-ui/react'
import NavBar from '../NavBar/NavBar'
import React from 'react'

export default function LandingPage() {
    return (
        <Stack align={"center"}>
            
            <Hero />
            <Feature1 />
            <SpeechBubbles />
            <Footer />
        </Stack>
    )
}