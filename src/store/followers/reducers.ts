import { TwitterUser } from "../../models/TwitterUser";
import { FollowerActions, FETCH_FOLLOWERS, TOGGLE_BUFFERING, TOGGLE_LOADING, TOGGLE_ERROR } from "./types";

export interface FollowersState {
    list: TwitterUser[] | null,
    cursor: string,
    loading: boolean,
    buffering: boolean,
    error: string | null
}

const initialState:FollowersState = {
    list: null,
    cursor: "-1",
    loading: false,
    buffering: false,
    error: null
}

export function followerReducer( state = initialState, action: FollowerActions ): FollowersState {
    
    switch(action.type){
        case FETCH_FOLLOWERS:
            
            const curList = state.list || [];
            const list = action.payload.appendToList ? 
                            [ ...curList, ...action.payload.list ] :
                            [...action.payload.list];

            const { cursor } = action.payload;
            return {
                ...state,
                list,
                cursor
                
            }
        case TOGGLE_BUFFERING:
            return {
                ...state,
                buffering: action.payload.buffering
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        case TOGGLE_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}
