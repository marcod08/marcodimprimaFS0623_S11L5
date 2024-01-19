export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FAV_COM = "REMOVE_FAV_COM"
export const SEARCH_ARTIST = 'SEARCH_ARTIST'
export const ALBUM_HOME = 'ALBUM_HOME'
export const SET_PLAYER = 'SET_PLAYER'

export const getSearch = (searchValue) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                searchValue,
                {
                    headers: {
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "282dc36a1cmsh8c330e4f006a015p1f7d11jsn69398e5693d6",
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: SEARCH_ARTIST,
                    payload: data.data,

                })
            } else {
                throw new Error("Errore nel fetch dei dati!")
            }
        } catch (error) {
            console.log("errore", error)
        }
    }
}

export const getAlbum = (artistName) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                artistName,
                {
                    headers: {
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "282dc36a1cmsh8c330e4f006a015p1f7d11jsn69398e5693d6",
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: ALBUM_HOME,
                    payload: data.data,

                })
            } else {
                throw new Error("Errore nel fetch dati!")
            }
        } catch (error) {
            console.log("errore", error)
        }
    }
}

export const setPlayer = (selectedAlbum) => (
    {
        type: SET_PLAYER,
        payload: selectedAlbum,
    }
)

export const addFavouriteAction = (liked) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: liked,
    }
}