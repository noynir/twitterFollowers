import React from 'react'
import { AppState } from '../store';
import { thunkFetchMessages } from '../thunks/followers';
import { TwitterUser } from '../models/TwitterUser';
import { Query } from '../models/query';
import { connect } from 'react-redux';

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
class FollowersContainer extends React.Component<FollowersContainerProps> {


    loadNextPage = () => {
        this.props.thunkFetchMessages(
            this.props.query.username, false);
    }

    componentDidMount(){
        const { query } = this.props;
        if(query.username){
            this.props.thunkFetchMessages(
                this.props.query.username, true);
        }
    } 

    render(){
        const { followers, hasMore, isLoading, error } = this.props;
        return (
            <React.Fragment>
                {
                    (followers && !isLoading && followers.length > 0) ? <FollowersList 
                        list={followers}
                        loadNextPage={this.loadNextPage}
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
}

const mapStateToProps = (state: AppState) => ({
    query: getQuery(state),
    followers: getSortedFollowersList(state),
    isLoading: getFollowersLoading(state),
    hasMore: getHasMoreFollowers(state),
    error: getError(state) 
});


export default connect(
    mapStateToProps,
    { thunkFetchMessages }
)(FollowersContainer)
