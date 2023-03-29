import { ADD_FAVORITE , TOGGLE_FAVORITES , REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
 favorites : [
    {
        id: 1,
      title: "Star Wars",
      director: "George Lucas",
      metascore: 92,
      genre: "Scifi",
      description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
    },
    
 ],
 displayFavorites : true,   
};

 const reducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            const newFav = {
                title : action.payload.title ,
                id : action.payload.id,
            };
            return {
                ...state,
                favorites : [ ...state.favorites , newFav]
            };
            default:
                return state;
    }
}
export default reducer;