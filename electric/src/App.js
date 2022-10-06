import { createGlobalStyle} from 'styled-components';
import {RecoilRoot} from 'recoil';
import Banner from './component/banner/Banner';

const GlobalStyle = createGlobalStyle`
  *{
    scroll-behavior:smooth;
    margin : 0px;
    padding : 0px;
    box-sizing : border-box;
    input:focus {
      outline: none
    };
    textarea:focus {
      outline: none;
    };
  }
`
function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <GlobalStyle />
        {
          <Banner />
        }

      </div>
    </RecoilRoot>
  );
}

export default App;
