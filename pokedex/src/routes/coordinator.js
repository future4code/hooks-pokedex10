export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedexpage")
}

export const goToPokemonDetailsPage = (navigate, id) => {
    navigate(`/pokemon/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
} 