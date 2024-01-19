import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";
import albumReducer from "../reducers/album";
import playerReducer from "../reducers/player";
import favReducer from "../reducers/favourite";

const bigReducer = combineReducers({
    search: searchReducer,
    album: albumReducer,
    player: playerReducer,
    fav: favReducer,
})

const store = configureStore({
    reducer: bigReducer,
})

export default store