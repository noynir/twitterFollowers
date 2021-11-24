import  React, { useState }  from 'react';
import QueryBar, { QueryBarValue } from '../components/QueryBar';
import { Query, QuerySortBy } from '../models/query';
import { useDispatch, useSelector } from 'react-redux';
import { thunkUpdateUsername } from '../thunks/query';
import { updateSort } from '../store/query/actions';
import { getQuery } from '../selectors';

interface  QueryContainerProps {
    query: Query,
    thunkUpdateUsername:(username: string) => void;
    updateSort:(sortBy: QuerySortBy) => void;
}

interface QueryContainerState {
    username?: string,
    sortBy?: string
}

function QueryContainer(    ){
    
    const dispatch = useDispatch();
    
    const [username, setUsername] = useState('');
    const [sortBy, setSortBy] = useState('');

    const query = useSelector(getQuery);

    const sendQuery = () => {
        dispatch(thunkUpdateUsername(username));
    }
    const updateQuery = ( query: QueryBarValue) => {
        const mergedstate = { username, sortBy, ...query} as Query;  
        setUsername(query.username || '');
        setSortBy(query.sortBy || '');
        if( query.hasOwnProperty('sortBy') ){
            dispatch(updateSort(query.sortBy as QuerySortBy));
        }
    }   
    return (
        <React.Fragment>
            <QueryBar 
                username= { username }
                sortBy= { sortBy}
                updateQuery={ updateQuery}
                sendQuery={ sendQuery }
            ></QueryBar>
        </React.Fragment>
    )

}   

export default QueryContainer;
