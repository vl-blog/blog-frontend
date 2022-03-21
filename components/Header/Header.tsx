import Image from 'next/image';
import LogoImage from '../../assets/images/logo.jpg';
import styles from './Header.module.scss';
import { useToggle } from '../../hooks/useToggle';

const Header = () => {
  const { toggle, booleanValue } = useToggle();
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <div onClick={toggle} className={styles.Menu}>
            <div className={styles.MenuItem} />
            <div className={styles.MenuItem} />
            <div className={styles.MenuItem} />
          </div>
          <div className={styles.Logo}>
            <Image objectFit={'cover'} src={LogoImage} alt='Logotype' />
          </div>
          <svg
            className={styles.SearchIcon}
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.5871 18.9655L16.3951 13.7735C17.6428 12.2757 18.2649 10.3545 18.1322 8.4096C17.9994 6.46471 17.1219 4.64588 15.6823 3.33146C14.2427 2.01705 12.3517 1.30826 10.4028 1.35254C8.45389 1.39683 6.59708 2.19077 5.21863 3.56922C3.84019 4.94766 3.04624 6.80448 3.00196 8.75339C2.95767 10.7023 3.66646 12.5933 4.98088 14.0329C6.29529 15.4725 8.11413 16.35 10.059 16.4828C12.0039 16.6155 13.9251 15.9933 15.423 14.7457L20.615 19.9377L21.5871 18.9655ZM4.39959 8.93767C4.39959 7.7139 4.76248 6.51761 5.44237 5.50008C6.12226 4.48255 7.08861 3.68948 8.21923 3.22117C9.34985 2.75285 10.5939 2.63032 11.7942 2.86906C12.9945 3.10781 14.097 3.69711 14.9623 4.56245C15.8276 5.42779 16.4169 6.53029 16.6557 7.73055C16.8944 8.93081 16.7719 10.1749 16.3036 11.3055C15.8353 12.4361 15.0422 13.4025 14.0247 14.0824C13.0071 14.7623 11.8109 15.1252 10.5871 15.1252C8.94662 15.1234 7.37386 14.4709 6.21387 13.3109C5.05388 12.1509 4.4014 10.5781 4.39959 8.93767V8.93767Z'
              fill='black'
            />
          </svg>
          {booleanValue && (
            <div className={styles.Navigation}>
              <svg
                onClick={toggle}
                className={styles.Close}
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 1L17 17M17 1L1 17' stroke='white' />
              </svg>
              <a href='#' className={styles.Link}>
                C#
              </a>
              <a href='#' className={styles.Link}>
                Arduino
              </a>
              <a href='#' className={styles.Link}>
                Something else
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
