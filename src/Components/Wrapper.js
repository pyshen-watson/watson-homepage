import styled from "styled-components";
import WrapperRow from "./WrapperRow";

function Wrapper({dataset, title, rows}) {


  const WrapperLayout = styled.fieldset`
    border-width: 2px;
    border-radius: 15px;
    border-color: #bbbbbb;
    width: fit-content;
    margin: 2vh;
  `
  const WrapperTitle = styled.legend`
    color: gray;
    padding: 0px 7px;
  `

  const cols = Math.ceil(dataset.length / rows)
  const counter = [...Array(rows).keys()]
  const content = counter.map( (row) => 
      <WrapperRow dataset={dataset.slice(row*cols, (row+1)*cols)}/>
    )

  return (
    <WrapperLayout>
      <WrapperTitle>{title}</WrapperTitle>
      {content}
    </WrapperLayout>
  );
}

export default Wrapper;
