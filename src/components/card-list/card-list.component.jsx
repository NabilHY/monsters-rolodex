import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component.jsx';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        console.log(this.props);
    return (
        <div className="card-list">
            {
                <Card monsters={monsters} />
            }    
        </div>
        )
    }
}
export { CardList }