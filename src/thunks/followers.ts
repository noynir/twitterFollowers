import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { Action } from "redux";
import { twitterService } from "../services/twitterService";
import { fetchFollowers, toggleBuffering, toggleLoading, toggleError } from "../store/followers/actions";

export const thunkFetchMessages = (username: string, resetCursor: boolean = false ): ThunkAction<void, AppState,  null, Action<string>> => 
    async (dispatch, getState) => {
        const {followers } = getState();
        const cursor = resetCursor ? "-1" : followers.cursor;
        if(!resetCursor && followers.buffering){            
            return;    
        }
        dispatch(toggleBufferingOrLoading(resetCursor, true));
        if(followers.error){
            dispatch(toggleError(null));
        }
        try {    
            const response = await twitterService.fetchFollowers(username, cursor);
            dispatch(fetchFollowers(response.users, response.next_cursor_str, !resetCursor));
        } catch (error) {
            console.log(error);
            dispatch(toggleError(error));
        }
       
        dispatch(toggleBufferingOrLoading(resetCursor, false));
    } 

function toggleBufferingOrLoading(isLoading: boolean, value: boolean){
    return isLoading ? toggleLoading(value) : toggleBuffering(value);
}