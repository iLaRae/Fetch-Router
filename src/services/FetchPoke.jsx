import PageNav from "../components/PageNav"




const FetchPoke = () => {
    return (
        <div>
            <PageNav />
            <h1>POKEDATA</h1>

            <legend>POKEMONDATA RETURN</legend>
            <input type="text" id="pokedata1" placeholder="Enter Pokemon" />
            <button type="button" id="btn" onClick="{getData}">Fetch YOur Pokemon</button>
        </div>

    )
}

export default FetchPoke
