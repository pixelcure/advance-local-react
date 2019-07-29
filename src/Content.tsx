import React from 'react';
import ApiService from './services/ApiService';
import styled from 'styled-components';

import Details from './components/Details/Details';
import Item from './components/Item/Item';
import List from './components/List/List';

interface IContentState {
    starwarsData?: any[];
    pokemonData?: any[];
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

class Content extends React.Component<{}, IContentState> {

    state: IContentState = {
        starwarsData: null,
        pokemonData: null
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
                <Details
                    detailListLabel='Moves'
                    image={sprites && sprites.front_shiny}
                    level={base_experience}
                    type='pokemon'
                    typeLabel='Pokémon'
                    title={name}
                    renderMiniList={() => (
                        <List className='capitalize bullets item-list'>
                            {moves.slice(0, 4).map(move => <li key={`moves-${move.move.name}-${name}`}>{move.move.name}</li>)}
                        </List>
                    )}
                />
            </Item>
        );
    }

    renderStarwarsPerson = (person) => {
        const { gender, name, birth_year, skin_color, hair_color } = person;

        return (
            <Item itemType='star-wars' key={`starwars-list-${name}`}>
                <Details
                    detailListLabel='Stats'
                    title={name}
                    type='star-wars'
                    typeLabel='Star Wars'
                    renderMiniList={() => (
                        <List className='capitalize bullets item-list'>
                            <li><strong>Gender:</strong> {gender}</li>
                            <li><strong>Birth Year:</strong> {birth_year || 'n/a'}</li>
                            <li><strong>Skin Color:</strong> {skin_color || 'n/a'}</li>
                            <li><strong>Hair Color:</strong> {hair_color || 'n/a'}</li>
                        </List>
                    )}
                />
            </Item>
        );
    }

    render () {
        const { pokemonData, starwarsData } = this.state;

        return (
            <React.Fragment>
                <Data>
                    {starwarsData && (
                        <List className='column'>
                            {starwarsData.map(person => this.renderStarwarsPerson(person))}
                        </List>
                    )}
                    {pokemonData && (
                        <List className='column'>
                            {pokemonData.map(pokemon => this.renderPokemon(pokemon))}
                        </List>
                    )}
                </Data>
            </React.Fragment>
        );
    }
}

export default Content;
