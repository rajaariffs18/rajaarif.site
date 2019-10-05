import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import GitHubButton from 'react-github-btn'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import photo from '../../content/images/me-lite.png'

export default class Index extends Component {
  render() {
    const latestPostEdges = this.props.data.latest.edges
    const popularPostEdges = this.props.data.popular.edges
    
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Web Developer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <a
              href="https://youtube.com/ihwand"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img
                src={photo}
                className="lite-icon"
                title="Hi i'm Ihwan"
                alt="Hi i'm Ihwan"
              /> */}
            </a>
            <h1>Hi, Saya Raja Arif</h1>
            <p>
                Saya seorang web developer, antusias terhadap teknologi baru. Di sini tempat aku belajar menulis dan berbagi pengalaman. Semoga bermanfaat.
              </p>
            <div className="social-buttons">
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/Rajaariffadsi"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @rajaariffadsi
                </a>
              </div>
              <div>
                <GitHubButton
                  href="https://github.com/rajaariffs18"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @rajaariffs18 on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
