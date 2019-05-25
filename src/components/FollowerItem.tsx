import React from 'react'
import { TwitterUser } from '../models/TwitterUser';
import styled from 'styled-components';

interface FollowerItemProps {
    follower: TwitterUser;
}

const Wrap = styled.div`
    display: flex;
    padding:1rem;
    font-size:1.2rem
`
const ImageWrap=styled.div`
    flex:0;
    flex-basis: 4.8rem;
    margin-right:1rem;
`
const Image =styled.img`
    border-radius:50%;
    width:48px;
    height:48px;
`
const Details= styled.div`

`
const Strong = styled.strong`
    font-size: 1.8rem;
    display:inline-block;
    margin-right: 0.3rem;

`
const FollowerItem: React.FC<FollowerItemProps> = ({ follower }) => {

    return (
        <Wrap>
            <ImageWrap>
                <Image src={ follower.profile_image_url }></Image>
            </ImageWrap>
            <Details>
                <Strong>{follower.name}</Strong> 
                @{follower.screen_name}
            </Details>
        </Wrap>
    )
}

export default FollowerItem;