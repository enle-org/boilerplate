import React from 'react';

// components
import Layout from '../../wrappers/Layout/Index';

// styles
import './index.scss';

const App = () => {
  return (
    <Layout>
      <section className="main-container">
        <div className="jumbotron jumbotron-fluid">
          <h1 className="headliner">Starter Template for React-Redux</h1>
          <p className="subtext mt-4">
            This is a starter pack for any application that is to be built with
            React and redux. This starter pack uses sass as the cascasing style
            sheet(CSS) preprocessor. It is compiled with Webpack.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default App;
