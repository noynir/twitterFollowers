import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { Query } from "../models/query";
import { AppState } from "../store";
import { updateQuery, updateUsername } from "../store/query/actions";
import { thunkFetchMessages } from "./followers";

export const thunkUpdateUsername = ( username: string ): ThunkAction<void, AppState, null, Action<string>> => 
async (dispatch) =>  {
    dispatch(updateUsername(username));

    if(username){
        dispatch(thunkFetchMessages(username, true));
    }

}