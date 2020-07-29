import React from 'react'
import { Container } from 'react-bootstrap'
//Components

import PrincipalSlider from '../1_principalslider/principalslider'
import Services from '../2_services/services'
import Team from '../3_team/team'

export default function main() {

    return (
            <Container>
                <PrincipalSlider />
                <Services />
                <Team />
            </Container>
    )
}