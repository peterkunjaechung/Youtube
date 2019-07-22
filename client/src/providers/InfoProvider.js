import React from 'react';
import axios from 'axios';
export const InfoContext = React.createContext();
export const InfoConsumer = InfoContext.Consumer;


export class InfoProvider extends React.Component {
  state = { 
    chosen: [],
  }

  render() {
    
    return (
      <InfoContext.Provider value={{
       ...this.state,
      }}>
      {this.props.children}
    </InfoContext.Provider>
  );
};
};