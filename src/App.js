import './App.css';
import Header from './Header'
import Footer from './Footer'
import Box1 from './Box1'
import Box2 from './Box2'
function App() {
  return (
    <div className='body1'>
      <div className='header'><Header /></div>
      <div className='container'>
        <div className='b1'><Box1 /></div>
        <div className='b2'><Box2 /></div>
      </div>
      <div className='footer'><Footer /></div>
    </div> 
  );
}
export default App;
