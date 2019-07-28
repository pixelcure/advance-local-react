import React from 'react';
import ApiService from './services/ApiService';
import styled from 'styled-components';

import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import { pokemonErrorText, starwarsErrorText } from './helpers/apiConfigs';
import { capitalizeFirstLetter } from './helpers/formatText';
import List from './components/List/List';
import Item from './components/Item/Item';

interface IContentState {
    starwarsData?: any[];
    pokemonData?: any[];
    fetchErrors: [];
};

const Data = styled.div`
    margin-top: 3rem;

    ul:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;

        .column {
            width: 48%;
            margin-bottom: 0;
        }
    }
`;

const ItemType = styled.span`
    color: var(--red);
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.25;
    letter-spacing: 0.1rem;
    padding-bottom: 1.5rem;
    text-transform: uppercase;

    &.star-wars {
        color: var(--grey);
    }

    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
`;

const Details = styled.div`
    position: relative;

    &.top {
        display: flex;
        flex-flow: column;
    }

    &.bottom {
        margin-top: 2rem;
    }

    .item-list {
        padding-left: 2rem;

        li {
            margin-bottom: 1rem;
        }
    }


    @media (min-width: 768px) {
        .item-list {
            margin-top: 1.5rem;

            li {
                font-size: 1.6rem;
            }
        }
    }


    &.image-padded {
        padding-left: 6rem;
        position: relative;
    }
`;

const Image = styled.div`
    left: 0;
    max-width: 5rem;
    position: absolute;
`;

const Title = styled.h3`
    color: var(--brown);
    font-size: 2.1rem;
    line-height: 2.6rem;
    margin: 0;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, .25);
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 2.6rem;
    }
`;

const Level = styled.div`
    background: var(--itemBgAccent);
    border-radius: var(--borderRadius);
    color: var(--red);
    margin: 1rem 0 0;
    padding: 1rem;
    text-transform: uppercase;

    strong {
        font-weight: 100;
    }

    em {
        color: var(--brown);
        font-weight: 600;
    }

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }
`;

const Label = styled.strong`
    border-bottom: 1px solid var(--itemBgAccent);
    color: var(--red);
    display: block;
    font-size: 1.6rem;
    font-weight: 100;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

class Content extends React.Component {

    state: IContentState = {
        starwarsData: null,
        pokemonData: null,
        fetchErrors: []
    };

    apiService;

    componentDidMount() {
        this.apiService = new ApiService();
        this.handleStarwars();
        this.handlePokemon();
    }

    handleStarwars = () => {
        return this.apiService.fetchStarwars()
                .then((starwarsData) => this.setState({ starwarsData: starwarsData.results }));
    }

    handlePokemon = () => {
        return this.apiService.fetchPokemon()
            .then(res => Promise.all(res.results.map(result => this.apiService.fetchData(result.url))))
            .then(pokemonData => this.setState({ pokemonData }));
    }

    renderPokemon = (pokemon) => {
        const { base_experience, moves, sprites, name } = pokemon;

        return (
            <Item key={`pokemon-list-${name}`} itemType='pokemon'>
                <ItemType>Pokémon</ItemType>
                <Details className='top image-padded'>
                    <Image><img src={sprites.front_shiny} alt={name + ' image'} /></Image>
                    <Title>{capitalizeFirstLetter(name)}</Title>
                    <Level>
                        <strong>Base Experience:</strong> <em>{base_experience}</em>
                    </Level>
                </Details>
                <Details className='bottom'>
                    <Label>Moves:</Label>
                    <List className='capitalize bullets item-list'>
                        {moves.slice(0, 4).map(move => <li key={`moves-${move.move.name}-${name}`}>{move.move.name}</li>)}
                    </List>
                </Details>
            </Item>
        );
    }

    renderStarwarsPerson = (person) => {
        const { gender, name, birth_year, skin_color, hair_color } = person;
        console.log('render starwars person')
        return (
            <Item itemType='star-wars' key={`starwars-list-${name}`}>
                <ItemType className='star-wars'>Star Wars</ItemType>
                <Details className='top'>
                    <Title className='title'>{name}</Title>
                </Details>
                <Details className='bottom'>
                    <Label className='label'>Stats:</Label>
                    <List className='capitalize bullets item-list'>
                        <li><strong>Gender:</strong> {gender}</li>
                        <li><strong>Birth Year:</strong> {birth_year}</li>
                        <li><strong>Skin Color:</strong> {skin_color}</li>
                        <li><strong>Hair Color:</strong> {hair_color}</li>
                    </List>
                </Details>
            </Item>
        );
    }

    render () {
        const { pokemonData, starwarsData, fetchErrors } = this.state;

        return (
            <React.Fragment>
                {fetchErrors.length > 0 && <ErrorMessage errors={fetchErrors} />}
                <Data>
                    {   starwarsData && (
                            <List className='column'>
                                {starwarsData.map(person => this.renderStarwarsPerson(person))}
                            </List>
                        )
                    }
                    {   pokemonData && (
                            <List className='column'>
                                {pokemonData.map(pokemon => this.renderPokemon(pokemon))}
                            </List>
                        )
                    }
                </Data>
            </React.Fragment>
        );
    }
}

export default Content;
