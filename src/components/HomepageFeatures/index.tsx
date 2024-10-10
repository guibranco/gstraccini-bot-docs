import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

/**
 * Renders a feature component displaying an SVG icon, title, and description.
 *
 * @param {Object} params - The parameters for the feature component.
 * @param {string} params.title - The title of the feature.
 * @param {React.ComponentType} params.Svg - The SVG component to be displayed.
 * @param {string} params.description - A brief description of the feature.
 *
 * @returns {JSX.Element} The rendered feature component.
 *
 * @example
 * const MyFeature = () => (
 *   <Feature
 *     title="Feature Title"
 *     Svg={MySvgIcon}
 *     description="This is a description of the feature."
 *   />
 * );
 *
 * @throws {Error} Throws an error if the title or description is not provided.
 */
function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

/**
 * Renders the homepage features section.
 *
 * This function is a React functional component that generates a section
 * containing a list of features. Each feature is rendered using the
 * `Feature` component, which receives its properties from the `FeatureList`.
 *
 * @returns {JSX.Element} A JSX element representing the features section.
 *
 * @example
 * // Example usage of HomepageFeatures in a parent component
 * const App = () => (
 *   <div>
 *     <HomepageFeatures />
 *   </div>
 * );
 */
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
