import { Action } from "redux";
import { Query, QuerySortBy } from "../../models/query";

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_SORT = 'UPDATE_SORT';

export interface UpdateQuery extends Action<typeof UPDATE_QUERY>{
    payload:{
        query: Query
    }
}
export interface UpdateUsername extends Action<typeof UPDATE_USERNAME>{
    payload:{
        username: string
    }
}
export interface UpdateSort extends Action<typeof UPDATE_SORT>{
    payload:{
        sortBy: QuerySortBy
    }
}

export type QueryActions = UpdateQuery | UpdateSort | UpdateUsername;