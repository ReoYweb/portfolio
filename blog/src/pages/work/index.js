import React from 'react';

import Layout from '../../components/Layout';
import WorkRoll from '../../components/WorkRoll';

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/workphoto1.png')`,
            width: '100%',
            height: '100vh'
          }}
        > */}
        {/* </div> */}
        <section className="worksection">
          <h1 className="undertitle">Works</h1>
          <WorkRoll />
        </section>
      </Layout>
    );
  }
}
