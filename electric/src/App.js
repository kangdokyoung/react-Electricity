import { createGlobalStyle} from 'styled-components';
import {RecoilRoot} from 'recoil';
import Banner from './component/banner/Banner';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './page/MainPage';
import DataCollection from './component/course/DataCollection';
import GraphPredict from './component/graph/GraphPredict';
import Reference from './component/reference/Reference';
import DeepLearningModel from './component/course/DeepLearningModel';
import DataPreprocessing from './component/course/DataPreprocessing';

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
          <BrowserRouter>
          <Banner />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/data_collection" element={<DataCollection />} />
            <Route path="/data_preprocessing" element={<DataPreprocessing />} />
            <Route path="/deep_learning_model" element={<DeepLearningModel />} />
            <Route path="/graph_predict" element={<GraphPredict />} />
            <Route path="/reference" element={<Reference />} />
          </Routes>
          </BrowserRouter>
        }

      </div>
    </RecoilRoot>
  );
}

export default App;
