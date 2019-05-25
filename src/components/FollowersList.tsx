import React from 'react';
import { TwitterUser } from '../models/TwitterUser';
import FollowerItem from './FollowerItem';
import styled from 'styled-components';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer'

interface FollowersListProps{
    list: TwitterUser[],
    loadNextPage:() => void;
    hasMoreItems: boolean
}

const List = styled.div`
    margin:0;
    padding:0;
`
const ListItem = styled.div`
    border-bottom: solid 1px #656565;
`
const Loader = styled.div`
    height:100%
    display:flex;
    font-size:1.8rem;
    align-items:center;
    justify-content: center;
`
const FollowersList: React.FC<FollowersListProps> = ({list, loadNextPage, hasMoreItems}) => {

    let body;
    if(list){
        body = list.map( (follower)=> (
            <ListItem>
                <FollowerItem follower={follower} key={follower.id_str} ></FollowerItem>
            </ListItem>
        ) )    
    }
    const Row= ({ index, style } : ListChildComponentProps) => {
        const follower = list[index];

        if(index >=  list.length){
            loadNextPage();
        }
       
            return (
                    <ListItem style={style} >
                        {
                            index < list.length ?
                            <FollowerItem follower={follower} key={follower.id_str} ></FollowerItem> :
                            <Loader>Loading...</Loader>
                        }
                        
                    </ListItem> 
            )
               
    }
    const itemCount = hasMoreItems ? list.length+1 : list.length;
    return (            
                <AutoSizer>
                    {
                        ({height, width}) => (
                            <FixedSizeList
                                height={ height }
                                width={width}
                                itemCount={itemCount}
                                itemSize={80}
                            >
                                {Row}
                            </FixedSizeList>
                        )
                    }
                </AutoSizer>
            
                
    )
}

export default FollowersList;