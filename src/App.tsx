import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppState } from './store';
import { connect } from 'react-redux';
import QueryContainer from './containers/QueryContainer';
import FollowersContainer from './containers/FollowersContainer';
import styled from 'styled-components';

interface AppProps {
}

const Section = styled.section`
    display:flex;
    justify-content:center;
    height:80vh;
    
    
`
const Wrap = styled.div`
  flex-basis: 60%;
  background-color:white;
  padding: 1rem 0.2rem;
  border-radius:1rem;
  box-shadow: 0px 0px 5px 0px rgba(101,101,101,1);
  display:flex;
`
class App extends React.Component<AppProps> {
  componentDidMount(){
    // this.props.thunkInitApi();
  }
  render(){
    return (
      <div className="App"> 
        <div>
            <QueryContainer></QueryContainer>
        </div>
        <Section>
          <Wrap>
            <FollowersContainer></FollowersContainer>
          </Wrap>
        </Section>
      </div>
    );
  }
  
}

export default App;