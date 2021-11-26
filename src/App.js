import Site from "./Site";
import data from "./info/info";
import styled from "styled-components";

function App() {

  const AppLayout = styled.div`
    display: flex;
    justify-content: space-between;
  `


  return (
    <AppLayout>
      {
        data.map((d) => 
          <Site 
            icon={d.icon}
            url={d.url}
            title={d.title}
          /> )
      }
    </AppLayout>
  );
}

export default App;
