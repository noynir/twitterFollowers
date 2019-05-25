import React from 'react'
import styled, {StyledFunction} from 'styled-components';

interface MessageProps{
    error?: boolean;
}
const Wrap = styled.div<MessageProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 2rem;
    flex: 1;
    color: ${props => props.error ? '#DC3545' : '#1DA1F2'};
    font-weight: bold;
    padding: 1rem;
    text-align:center;
`

const Message: React.FC<MessageProps> = (props) => {

    return (
        <Wrap>
            { props.children }
        </Wrap>
    )

}

export default Message;