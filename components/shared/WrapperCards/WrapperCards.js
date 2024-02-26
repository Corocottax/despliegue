import './WrapperCards.css';
import { GAMES } from '../../../data/data';
import { Card } from '../Card/Card';

export const WrapperCards = () => {
    return `
        <div class="wrapper-cards">
            ${ GAMES.map(game => {
                return `${Card(game)}`
            }).join("")}
        </div>
    `
}