import { Component } from 'react';
import { fetchImgs } from '../API/PixabayAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    page: 1,
  };

  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      const { data } = await fetchImgs(page, searchQuery);
      this.setState({ gallery: [...data.hits] });
    }
  }
  render() {
    const { gallery, searchQuery } = this.state;
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery gallery={gallery} alt={searchQuery} />
      </>
    );
  }
}
