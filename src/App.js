import s from './App.module.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends Component {
  state = {
    query: '',
    activeImageURL: null,
  };

  componentDidMount() {}

  handleFormSubmit = query => {
    this.setState({ query });
  };

  getActiveImageURL = imageURL => {
    this.setState({ activeImageURL: imageURL });
  };

  toggleModal = () => {
    this.setState({ activeImageURL: null });
  };

  render() {
    const { activeImageURL, query } = this.state;

    return (
      <div
        className={s.App}
        style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={this.state.query}
          getImageURL={this.getActiveImageURL}
        />
        {activeImageURL && (
          <Modal onClose={this.toggleModal} imageURL={activeImageURL}>
            <img
              src={activeImageURL}
              alt={query}
              // className={s['Item-image']}
              // id={id}
            />
          </Modal>
        )}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
