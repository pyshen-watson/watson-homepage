import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Components/Wrapper'
import styled from 'styled-components'
import { googleServiceData, ntuData, generalData, workData } from './Utils/siteInfo'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const googleWrapper = <Wrapper dataset={googleServiceData} title={"Google"} rows={2} />
const ntuWrapper =    <Wrapper dataset={ntuData} title={"NTU"} rows={1} />
const generalWrapper = <Wrapper dataset={generalData} title={"General"} rows={1} />
const workWrapper =    <Wrapper dataset={workData} title={"Work"} rows={2} />


ReactDOM.render(
  <React.StrictMode>
    <Container>
      <div className="left">
        {googleWrapper}
        {ntuWrapper}
      </div>
      <div className="right">
        {generalWrapper}
        {workWrapper}
      </div>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

