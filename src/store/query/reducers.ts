import { Query } from "../../models/query";
import { QueryActions, UPDATE_QUERY, UPDATE_USERNAME, UPDATE_SORT } from "./types";

export interface QueryState extends Query{};

const initialState: QueryState = {
    username: '',
    sortBy:''
}
export function QueryReducer(state= initialState, action: QueryActions): QueryState{
    switch(action.type){
        case UPDATE_USERNAME:{
            return {
                ...state,
                username:action.payload.username
            }
        }
        case UPDATE_SORT:{
            return {
                ...state,
                sortBy: action.payload.sortBy
            }
        }
        default:
            return state;
    }
}