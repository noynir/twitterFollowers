import { UpdateQuery, UPDATE_QUERY, UPDATE_USERNAME, UpdateUsername, UpdateSort, UPDATE_SORT } from "./types";
import { Query, QuerySortBy } from "../../models/query";

export function updateQuery ( query: Query ): UpdateQuery {
    return {
        type: UPDATE_QUERY,
        payload: { query }
    }
} 
export function updateUsername ( username: string ): UpdateUsername {
    return {
        type: UPDATE_USERNAME,
        payload: { username }
    }
} 
export function updateSort ( sortBy: QuerySortBy ): UpdateSort {
    return {
        type: UPDATE_SORT,
        payload: { sortBy }
    }
} 