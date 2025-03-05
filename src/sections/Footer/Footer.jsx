import React from 'react'
import Styles from "./FooterStyles.module.css"

function Footer() {
    return (
      <section id="footer" className={Styles.container}>
        <p>
          &copy; 2025 Munaib Rehman. <br />
          All rights reserved.
        </p>
      </section>
    );
  }

export default Footer