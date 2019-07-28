import { starwarsBaseUrl, pokemonApiBaseUrl } from '../helpers/apiConfigs';

class ApiService {

    fetchData(url: string): Promise<any> {
        return fetch(url).then(res => res.json()).catch(error => {
            console.log(`Error: ${error}`);
            return error;
        });
    }

    fetchStarwars(limit = 8): Promise<any> {
        return this.fetchData(`${starwarsBaseUrl}/people?limit=${limit}`);
    }

    fetchPokemon(limit = 8): Promise<any> {
        return this.fetchData(`${pokemonApiBaseUrl}/pokemon?limit=${limit}`);
    }
}

export default ApiService;