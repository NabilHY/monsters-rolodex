import Card from '../card/card.component.jsx';
import './card-list.styles.css';

const CardList = ({monsters}) => {

    return (
        <div className="card-list">
            <Card monsters={monsters} />
        </div>
    )
}

export { CardList }