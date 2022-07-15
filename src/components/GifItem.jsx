import PropTypes from 'prop-types';

// ELemento para mostrar los gifs
export const GifItem = ({title ,url, id})  => {
    return (
        <div className="card">
            <img src={url}></img>
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired
}