import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import XLight from '../../assets/twitter-light.svg';
import XDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === "light" ? sun : moon;
    const XIcon = theme === "light" ? XLight : XDark;
    const githubIcon = theme === "light" ? githubLight : githubDark;
    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.Hero} src={HeroImg} alt="Profile picture of Munaib Rehman" />
            <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Munaib <br /> Rehman</h1>
            <h2>Full Stack Developer from Portbello</h2>
            <span>
                <a href="https://x.com/munibCh9" target='_blank'>
                <img src={XIcon} alt="X icon" />
                </a>
                <a href="https://github.com/munaib400" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://linkedin.com" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern React apps for commercial businesses.</p>
            <a href="">
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
