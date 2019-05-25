import  React  from 'react';
import QueryBar, { QueryBarValue } from '../components/QueryBar';
import { AppState } from '../store';
import { Query, QuerySortBy } from '../models/query';
import { connect } from 'react-redux';
import { thunkUpdateUsername } from '../thunks/query';
import { updateSort } from '../store/query/actions';

interface  QueryContainerProps {
    query: Query,
    thunkUpdateUsername:(username: string) => void;
    updateSort:(sortBy: QuerySortBy) => void;
}

interface QueryContainerState {
    username?: string,
    sortBy?: string
}

class QueryContainer extends React.Component<QueryContainerProps, QueryContainerState> {
    
    state: Query = {
        username:'',
        sortBy:''     
    }           

    constructor(props: QueryContainerProps) {
        super(props);
        this.state.username = props.query.username;
    }

    updateQuery = ( query: QueryBarValue) => {
        const mergedstate ={ ...this.state, ...query} as Query;  
        this.setState(mergedstate);
        if( query.hasOwnProperty('sortBy') ){
            this.props.updateSort(query.sortBy as QuerySortBy);
        }
    }   

    sendQuery = () => {
        this.props.thunkUpdateUsername(this.state.username);
    }

    render(){

        return (
            <React.Fragment>
                <QueryBar 
                    username= { this.state.username}
                    sortBy= { this.state.sortBy}
                    updateQuery={ this.updateQuery}
                    sendQuery={ this.sendQuery }
                ></QueryBar>
            </React.Fragment>
        )


    }
}

const mapStateToProps = (state: AppState) => ({
    query: state.query
})

export default connect(
    mapStateToProps,
    { thunkUpdateUsername, updateSort }
)(QueryContainer);


