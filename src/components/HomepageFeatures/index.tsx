import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'GitHub Native',
    icon: '🤖',
    description: (
      <>
        Works directly in GitHub comments on pull requests and issues. No extra tools or
        dashboards — just mention <code>@gstraccini</code> followed by a command.
      </>
    ),
  },
  {
    title: '30+ Commands',
    icon: '⚡',
    description: (
      <>
        Automate formatting, CI/CD, dependency updates, code quality checks, and more.
        Supports <strong>.NET</strong>, <strong>Rust</strong>, <strong>Node.js</strong>,
        {' '}AppVeyor, Codacy, and GitHub Actions.
      </>
    ),
  },
  {
    title: 'Always Running',
    icon: '🔄',
    description: (
      <>
        Runs every minute to process pull requests, issues, comments, commits, and pushes,
        keeping your repository organized and healthy around the clock.
      </>
    ),
  },
];

function Feature({title, icon, description}: Readonly<FeatureItem>) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

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
