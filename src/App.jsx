import React from 'react';
import Header from './containers/header';
import Footer from './containers/footer';
import Order from './containers/order';
import Posts from './containers/posts';
import Product from './containers/product';
import  Provider  from 'containers/context';

function App() {
  return (
    <Provider>
     <Header />
     <Product />
     <Posts />
     <Order />
     <Footer />
    </Provider>
  );
}

export default App;
