import React from 'react';

type ContextType = {
  authenticated: boolean,
  lang: string,
  theme: string,
}

export const AppContext = React.createContext<ContextType | null>({ 
  authenticated: true,
  lang: 'en',
  theme: 'dark'
});


export default AppContext