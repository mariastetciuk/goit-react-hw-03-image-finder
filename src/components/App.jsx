import { Component } from 'react';
import { fetchImgs } from '../API/PixabayAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { LineWave } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './App.module.css';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    page: 1,
    isLoader: false,
    showBtn: false,
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery, gallery } = this.state;

    const { data } = await fetchImgs(page, searchQuery);

    if (prevState.searchQuery !== searchQuery) {
      try {
        this.setState({ isLoader: true, gallery: [...data.hits] });

        if (data.hits.length >= 12 && data.total !== 0) {
          this.setState({ showBtn: true });
        }

        if (data.hits.length === 0) {
          return Notify.failure('Sorry, but nothing found');
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoader: false });
      }
    }

    if (prevState.page !== page && prevState.searchQuery === searchQuery) {
      try {
        this.setState({ gallery: [...gallery, ...data.hits], isLoader: true });
        if (data.hits.length >= 12 && data.total - page * 12 >= 0) {
          this.setState({ showBtn: true });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  handleClickButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        showBtn: false,
      };
    });
  };

  render() {
    const { gallery, searchQuery, isLoader, showBtn } = this.state;
    return (
      <div className={css.container}>
        <Searchbar handleSearch={this.handleSearch} />

        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} alt={searchQuery} />
        )}

        {isLoader && <LineWave />}

        {showBtn && <Button onCkick={this.handleClickButton} />}
      </div>
    );
  }
}
