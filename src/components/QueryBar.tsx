import React from "react";
import styled from "styled-components"

export interface QueryBarValue {
    username?: string,
    sortBy?: string
}

interface QueryBarProps {
    username: string,
    sortBy?: string,
    updateQuery: (query: QueryBarValue ) => void;
    sendQuery: () => void;
}

const Wrap = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #1DA1F2;
    margin-bottom: 10px;
`;

const Input  = styled.input`
    padding: 0 0.5rem;
    height: 3rem;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid #CCC;
    margin-bottom: 0.5rem;
`;

const Button  = styled.button`
    padding: 8px 12px;
    font-size: 1.5rem;
    border-radius: 5px;
    border: 1px solid #CCC;
    margin-right: 8px;
    background-color: #1DA1F2;
    color: #FFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`;

const Svg  = styled.svg`
    margin-right: 8px;
    display: block;
    width: 24px;
    height: 24px;
    path {
        fill: #FFF;
    }
`;
const Select = styled.select`
    height: 3rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #CCC;
    flex:1
`

const Inputs = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 0.5rem;
    padding:0.2rem 0;
    flex:0 1 25%;
`

const SelectWrap=styled.div`
    display:flex; 
    align-items: center; 
`

const QueryBar: React.FC<QueryBarProps> = ({
    username,
    sortBy,
    updateQuery,
    sendQuery
}) => {
    function keyPress(e: React.KeyboardEvent<any>) {
        if(e.key === "Enter"){
            send();
        }
    }

    function send(){
        sendQuery();
    }

    function usernameChange(event: React.ChangeEvent<HTMLInputElement>){
        const username=event.target.value;
        updateQuery({ username });
    }
    
    function queryChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        const field = event.target.name;
        const value = event.target.value;
        updateQuery({ [field]: value });
    }
 
    return <Wrap>
        <Inputs>
            <Input
                name="username"
                value={username}
                onChange={usernameChange}
                onKeyPress={keyPress}
                placeholder="Enter a twitter handle"
                >
            </Input>
            <SelectWrap>
                <strong><label >Sort by:</label></strong>
                <Select name="sortBy" value={ sortBy || '' } onChange={queryChange} >
                    <option value='' >Default</option>
                    <option value='name'>Account Name</option>
                    <option value='screen_name'  >Screen Name</option>
                </Select>
            </SelectWrap> 
        </Inputs>
        <Button onClick={ send } >
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781 "/>
            </Svg>
            <span>Send</span>
        </Button>
    </Wrap>


}

export default QueryBar;
