import { TwitterUser } from "../../models/TwitterUser";
import { FetchFollowers, FETCH_FOLLOWERS, TOGGLE_BUFFERING, ToggleLoading, TOGGLE_LOADING, ToggleError, TOGGLE_ERROR } from "./types";

export function fetchFollowers(list: TwitterUser[], cursor: string, appendToList: boolean = false): FetchFollowers {
    return {
        type: FETCH_FOLLOWERS,
        payload:{ list, cursor, appendToList }
    }
}

export function toggleBuffering(buffering: boolean){
    return {
        type: TOGGLE_BUFFERING,
        payload: { buffering}
    }
}

export function toggleLoading( loading: boolean ): ToggleLoading {
    return  {
        type: TOGGLE_LOADING,
        payload:{ loading }
    }
}

export function toggleError( error: string|null ): ToggleError {
    return  {
        type: TOGGLE_ERROR,
        payload:{ error }
    }
}