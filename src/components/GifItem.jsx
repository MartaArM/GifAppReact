
// ELemento para mostrar los gifs
export const GifItem = ({gif})  => {
    return (
        <div className="card">
            <img src={gif.url}></img>
            <p>{gif.title}</p>
        </div>
    )
}