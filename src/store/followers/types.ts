import { Action } from "redux";
import { TwitterUser } from "../../models/TwitterUser";

export const FETCH_FOLLOWERS  = 'FETCH_FOLLOWERS';
export const FETCH_FOLLOWERS_ERROR = 'FETCH_FOLLOWERS_ERROR';
export const TOGGLE_BUFFERING = 'TOGGLE_BUFFERING';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_ERROR = 'TOGGLE_ERROR';

export interface FetchFollowers extends Action<typeof FETCH_FOLLOWERS> {
    payload:{
        list: TwitterUser[],
        cursor: string,
        appendToList: boolean
    }
}

export interface ToggleBuffering extends Action<typeof TOGGLE_BUFFERING> {
    payload:{
        buffering: boolean
    }
}

export interface ToggleLoading extends Action<typeof TOGGLE_LOADING> {
    payload:{
        loading: boolean
    }
}

export interface ToggleError extends Action<typeof TOGGLE_ERROR> {
    payload:{
        error: string | null
    }
}


export type FollowerActions = FetchFollowers | ToggleBuffering | ToggleLoading | ToggleError;


