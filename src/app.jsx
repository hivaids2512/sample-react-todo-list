import React from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Todo from './components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <span>
        <Navbar />
        <div className="container">
          <Todo/>
        </div>
        <Footer/>
      </span>
    )
  }
}
