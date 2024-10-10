import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * Renders the header section of the homepage.
 * This component displays the site's title and tagline, along with a button
 * that links to the Docusaurus tutorial.
 *
 * @returns {JSX.Element} The rendered header component.
 *
 * @example
 * // Usage in a React component
 * return (
 *   <HomepageHeader />
 * );
 *
 * @throws {Error} Throws an error if the site configuration is not available.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * Renders the home page of the application.
 *
 * This function utilizes the Docusaurus context to retrieve the site configuration
 * and displays the homepage layout, including a header and features section.
 *
 * @returns {JSX.Element} The rendered home page component.
 *
 * @example
 * // To use the Home component in your application:
 * import Home from './path/to/Home';
 *
 * function App() {
 *   return <Home />;
 * }
 */
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
