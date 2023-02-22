import React from 'react'
import { createContext } from 'react'

export const GeneralContext = createContext(null);

export default function Contextprovider(props) {

    function likecounts(num) {

      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      // console.log(num)
      return num;
    }

    // setting the things in contextValue for exporting 
    const contextValue = {likecounts}

  return (
    <GeneralContext.Provider value={contextValue}>{props.children}</GeneralContext.Provider>
  )
}
