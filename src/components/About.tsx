import { Button } from "react-bootstrap";
import styles from "../styles/About.module.css";
const About = ({ toggleAbout }: { toggleAbout: () => void }) => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        {" "}
        <div className={styles.title}>
          <h1>rc-hierarchy</h1>
          <p>
            React Component Library for visualizing tree like hierarchical data.
          </p>
        </div>
        <div className={styles.install}>
          <h2>Installation</h2>
          <div className={styles.npm}>
            <p>You can install this component via npm:</p>
            <code>npm i rc-hierarchy</code>
          </div>
          <div className={styles.yarn}>
            <p>Or using yarn:</p>
            <code>yarn add rc-hierarchy</code>
          </div>
        </div>
        <div className={styles.links}>
          <h2>Reference Links</h2>
          <div className={styles.link}>
            <span>Npm package:</span>
            <a href="https://www.npmjs.com/package/rc-hierarchy">
              https://www.npmjs.com/package/rc-hierarchy
            </a>
          </div>
          <div className={styles.link}>
            <span>Source code:</span>
            <a href="https://github.com/vishal-bhangare/rc-hierarchy">
              https://github.com/vishal-bhangare/rc-hierarchy
            </a>
          </div>
          <div className={styles.link}>
            <span>Demo repo:</span>
            <a href="https://github.com/vishal-bhangare/rc-hierarchy-demo">
              https://github.com/vishal-bhangare/rc-hierarchy-demo
            </a>
          </div>
          <div className={styles.link}>
            <span>Example data:</span>
            <a href="https://github.com/vishal-bhangare/rc-hierarchy-demo/blob/main/src/data.ts">
              https://github.com/vishal-bhangare/rc-hierarchy-demo/blob/main/src/data.ts
            </a>
          </div>
        </div>
        <Button variant="secondary" className="my-2" onClick={toggleAbout}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default About;
