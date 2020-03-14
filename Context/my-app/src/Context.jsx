import React from 'react';

const OurContext = React.createContext()

const Provider = OurContext.Provider
const Consumer = OurContext.Consumer

export {Provider, Consumer}