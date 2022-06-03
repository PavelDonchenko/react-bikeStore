import React, { useRef } from 'react';
import Header from './containers/header';
import Footer from './containers/footer';
import Order from './containers/order';
import Posts from './containers/posts';
import Product from './containers/product';
import Provider from 'containers/context';

function App() {
    const prodRef = useRef(null);
    const orderRef = useRef(null);

    const handleProductScroll = () => {
      prodRef.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    const handleOrederScroll = () => {
      orderRef.current.scrollIntoView({behavior: 'smooth'});
    }

  return (
    <Provider>
      <Header handleProductScroll = {handleProductScroll}/>
      <Product  ref = {prodRef} handleOrederScroll = {handleOrederScroll} />
      <Posts />
      <Order ref = {orderRef} />
      <Footer />
    </Provider>
  );
}

export default App;
