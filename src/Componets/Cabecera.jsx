import React, { Component } from 'react';
import logo from '../logo.svg';
import H1 from './H1';

/*
    .App-header {
  backgroundColor: #282c34;
  minHeight: 100vh;
  display: flex;
  flexDirection: column;
  alignItems: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

*/

const styles ={
    header: ({ backgroundColor }) => ({
        backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    })
}
export default class Cabecera extends Component{

    state = {
        backgroundColor: '#222'
    
    }

    cambiaColorHeader = () => {
        this.setState({backgroundColor: '#555'})
    }
    manejaClick = () =>{
        const {manejaClick, miau} = this.props
        manejaClick(miau)
    }


    render(){
        const {miau,manejaClick} = this.props
        const {backgroundColor} = this.state

        return(
            <header onClick={this.cambiaColorHeader} style={styles.header({backgroundColor})}>                     
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                <H1>{miau}</H1>
            </header>
        )
    }
}

