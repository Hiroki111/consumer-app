import { Header } from '../molecules/header';

import styles from './page-style.scss';

const Page = ({ children }) => {
  return (
    <div>
      <Header />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export { Page };
