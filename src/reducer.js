export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  spotify: null,
  top_artists: null,
  discover_weekly:null
  // token:"BQAEGZDr8wbq4xy6tPa1ExwZ-OauEQ9mdmpjeRvkUEMnu7i7UQRoFKO3siX1Q9tMXhFIhYAnAzmqokiwUgpz2jklSls8Ewvx-2KLlmV0zWf_G1zaR3uZxBxNDm12Jo3gWryYX6blkZAhq14d3U8TNm3M_iui9bo5VD0mzD1K5Xl4iJa5",

};

const reducer = ( state, action ) => {
  console.log( action );
  
  switch ( action.type )
  {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
  
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
  
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
  
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
  
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
  
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
  
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;