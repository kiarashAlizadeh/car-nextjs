import Footer from './Footer';
import Navbar from './Navbar';

import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
