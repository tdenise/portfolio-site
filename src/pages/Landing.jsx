import React from 'react';
import { NavBar } from '../components/NavBar';
import { Jumbo } from '../components/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';

export function Landing() {
    return (
       <div class="landing">
            <NavBar />
            <Jumbo />
       </div>
    );
}

