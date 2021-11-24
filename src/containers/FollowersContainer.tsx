import React, { useEffect } from 'react'
import { AppState } from '../store';
import { thunkFetchMessages } from '../thunks/followers';
import { TwitterUser } from '../models/TwitterUser';
import { Query } from '../models/query';
import { connect, useDispatch, useSelector } from 'react-redux';

import FollowersList from '../components/FollowersList';
import { getQuery, getFollowersList, getSortedFollowersList, getFollowersLoading, getHasMoreFollowers, getError } from '../selectors';
import Message from '../components/Message';


interface FollowersContainerProps {
    query: Query,
    followers: TwitterUser[] | null,
    hasMore: boolean,
    isLoading: boolean,
    error: string | null,
    thunkFetchMessages: (username: string, resetCursor: boolean) => void
}

function FollowersContainer(){

    const dispatch = useDispatch()

    const query = useSelector(getQuery);
    const followers = useSelector(getSortedFollowersList);
    const isLoading = useSelector(getFollowersLoading);
    const hasMore = useSelector(getHasMoreFollowers);
    const error = useSelector(getError);


    useEffect(() => {
        if(query.username){
            dispatch(thunkFetchMessages(query.username, true));
        }
    }, [query]);

    const loadNextPage = () => dispatch(thunkFetchMessages(query.username, false));

    return (
        <React.Fragment>
            {
                (followers && !isLoading && followers.length > 0) ? <FollowersList 
                    list={followers}
                    loadNextPage={loadNextPage}
                    hasMoreItems={hasMore}
                ></FollowersList> : 
                <Message error={ !!error }>
                    {
                        error ? 
                            error :
                        isLoading ?
                            'Loading...' :
                        followers ?
                        <span>This user has no followers :(<br/>  try a different handle</span> :
                        'Enter a twitter handle, to see his followers' 
                    }
                    
                </Message>
            }
            
        </React.Fragment>
    )

}
export default FollowersContainer;
