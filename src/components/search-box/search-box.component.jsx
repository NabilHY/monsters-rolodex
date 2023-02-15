import './search-box.styles.css';

const SearchBox = ({ className, type, placeholder, onChange }) => {
    return (
        <input className={className} type={type} placeholder={placeholder} onChange={onChange} />
    )
}

export {SearchBox};