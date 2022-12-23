import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const moreLinks = [
  //{ text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  // {
  //   text: "Documentation",
  //   url: "https://gatsbyjs.com/docs/",
  // },
  // {
  //   text: "Starters",
  //   url: "https://gatsbyjs.com/starters/",
  // },
  // {
  //   text: "Showcase",
  //   url: "https://gatsbyjs.com/showcase/",
  // },
  {
    text: "Source on Github",
    url: "https://github.com/si74/whatstheweather",
  },
  //{ text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      {/* This is where we should put a weather related image */}
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        <b>What's the weather in...?!</b>
      </h1>
    </div>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
