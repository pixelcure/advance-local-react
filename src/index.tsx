import React from 'react';
import ReactDOM from 'react-dom';

import Content from './Content';
import Header from './components/Header/Header';

import './styles/base.css';

const BasePage = (): JSX.Element => {
    return (
        <React.Fragment>
            <Header />
            <section className='content'>
                <Content />
            </section>
        </React.Fragment>
    )
};

ReactDOM.render(<BasePage />, document.getElementById('root'));