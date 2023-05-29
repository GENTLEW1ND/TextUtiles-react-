import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title = "TextUtiles2" aboutText="about us"/> this are called props */}
    <Navbar title='TextUtils'/> 
    <div className='container my-3'>
    <TextForm heading="Enter your text to analize below"/>
    </div>
    </>
  );
}

export default App;
