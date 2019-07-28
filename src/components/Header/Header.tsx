import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
    color: var(--red);
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.2rem;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
        font-size: 2.4rem;
        line-height: 2.4rem;
    }
`;

const Contact = styled.a`
    display: block;
    text-align: right;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    text-align: right;

    span {
        color: var(--red);
    }

    @media (min-width: 768px) {
        font-size: 1.4rem;
        padding-top: 0.5rem;
    }
`;

const Header = (): JSX.Element => (
    <header>
        <Logo>Advance Local Assignment</Logo>
        <Contact
            rel='noopener noreferrer'
            href='http://www.paulthibedeau.com'
            title='paulthibedeau.com'
            target='_blank'
            className='contact'
        >
            Created by <span>Paul Thibedeau</span>
        </Contact>
    </header>
);

export default Header;
