import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import hero from '../img/title.svg';
import scroll from '../img/scroll.svg';
import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from '../components/BlogRoll';
import Photo from '../components/Photo';
import Footer from '../components/Footer';

export const IndexPageTemplate = ({
  image,
  heading,
  mainpitch,
  client,
  photo,
  intro
}) => (
  <div>
    <div
      className="full-width-image hero"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`
      }}
    >
      <h1 className="heroImageBox">
        <img src={hero} alt="Design create my life" className="heroImage" />
      </h1>

      <Link to="/">
        <img src={scroll} className="scroll" alt="scroll" />
      </Link>
    </div>
    <main className="contentOuter">
      <section className="introduce">
        {/* <h1 className="introduce__title">{subheading}</h1> */}
        <div className="content">
          <div className="title">
            <h2 className="sectionTitle">{mainpitch.title}</h2>
          </div>
        </div>
      </section>

      <section className="work">
        <a href="http://reoyoshioka.com/mikesmooth/" target="_blank">
          <div className="client">
            <h2 className="client__title">{client.name}</h2>
            <ul className="client__list">
              <li>
                {client.genru}
                <span>|</span>
              </li>
              <li>
                {client.date}
                <span>|</span>
              </li>
              <li>
                {client.project}
                <span>|</span>
              </li>
            </ul>
          </div>
        </a>
        <a href="http://reoyoshioka.com/mikesmooth/" target="_blank">
          <div className="client">
            <h2 className="client__title">{client.name}</h2>
            <ul className="client__list">
              <li>
                {client.genru}
                <span>|</span>
              </li>
              <li>
                {client.date}
                <span>|</span>
              </li>
              <li>
                {client.project}
                <span>|</span>
              </li>
            </ul>
          </div>
        </a>
        <a href="http://reoyoshioka.com/mikesmooth/" target="_blank">
          <div className="client">
            <h2 className="client__title">{client.name}</h2>
            <ul className="client__list">
              <li>
                {client.genru}
                <span>|</span>
              </li>
              <li>
                {client.date}
                <span>|</span>
              </li>
              <li>
                {client.project}
                <span>|</span>
              </li>
            </ul>
          </div>
        </a>
      </section>

      <Photo photoItems={photo.inner} />

      <div className="columns">
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
        </div>
      </div>

      {/* <Features gridItems={intro.blurbs} /> */}

      {/* <div className="column is-12">
        <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div>
      </div> */}
    </main>
    <Footer />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  client: PropTypes.object,
  photo: PropTypes.shape({
    inner: PropTypes.array
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        client={frontmatter.client}
        photo={frontmatter.photo}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
        }
        client {
          name
          genru
          date
          project
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        photo {
          inner {
            title
            jp
            en
            imagetext1
            imagetext2
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
