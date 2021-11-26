import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Components/Wrapper'
import { googleServiceData, ntuData } from './Utils/siteInfo'

ReactDOM.render(
  <React.StrictMode>
    <Wrapper  
      dataset={googleServiceData} 
      title={"Google Service"} 
      rows={2}
    />
    <Wrapper 
      dataset={ntuData}
      title={"NTU"}
      rows={1}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

