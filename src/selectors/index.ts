import { AppState } from '../store'
import {createSelector } from  'reselect';
import { TwitterUser } from '../models/TwitterUser';
import { Query, QuerySortBy } from '../models/query';
import { QueryState } from '../store/query/reducers';

const getFollowers = (state: AppState) => state.followers;

export const getQuery = (state: AppState) => state.query;

export const getFollowersList = createSelector(
    [getFollowers],
    (followers) =>  followers.list 
);

export const getFollowersLoading = createSelector(
    getFollowers,
    (followers) => followers.loading
)
export const getFollowersCursor = createSelector(
    [getFollowers],
    (followers) =>  followers.cursor
);

export const getError = createSelector(
    getFollowers,
    (followers) => followers.error
)
export const getQueryUsername = createSelector(
    [getQuery],
    (query) => query.username
 )
 export const getQuerySortBy = createSelector<AppState, QueryState, QuerySortBy>(
    getQuery,
    (query) => query.sortBy
 )

 export const getHasMoreFollowers  = createSelector(
     getFollowersCursor,
     (cursor) => cursor !== "0" 
 )

 function sortByKey<T>(key: keyof T):  (a:T, b:T)=>number {

    return (a: T, b: T) => {
        return (a[key] > b[key]) ? 1 : (b[key] > a[key]) ? -1 : 0;
    }
};
export const getSortedFollowersList = createSelector<AppState,TwitterUser[] | null, QuerySortBy, TwitterUser[] | null >  (
    getFollowersList, getQuerySortBy,
    (followers, sortBy: QuerySortBy) => {

        if(!followers){
            return followers;
        }
        return sortBy ? 
            ([...followers]).sort(sortByKey<TwitterUser>(sortBy as keyof TwitterUser)) :
            followers;
    }
)






 
