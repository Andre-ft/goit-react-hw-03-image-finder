// import logo from './logo.svg';
import s from './App.module.css';
import { Component } from 'react';
// import galleryAPI from './services/gallery-api';
import Searchbar from './components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
  };

  componentDidMount() {}

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    console.log('inside render', this.state.gallery);

    return (
      <div
        className={s.App}
        style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
