import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function worm_bin() {
    return (
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>The best compost for you is...a worm bin!</h1>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.compostImage}
          src="/compost-bin.png" // Ensure the image exists in your public folder
          alt="Compost Bin"
          width={250}
          height={250}
          priority
        />
      </div>

      <div className={styles.center}>
        <p>Vermicomposting, or composting using worms, is a relatively easy and hassle-free way to turn food waste into a rich and nutritious compost for your soil!</p>
      </div>

    {/* only if there's a pro con section on the infographic*/}
      <div className={styles.center}> 
        <div className={styles.card}>
          <h2>Pros:</h2>
          <p>Learn about the benefits of composting for you and the environment.</p>
        </div>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Cons:</h2>
          <p>Get practical tips on how to start composting effectively today.</p>
        </a>
      </div>

      <div className={styles.center}>
        <div>
          <h2>How to:</h2>
          <p>Buy a worm bin &#40can also be made with any 3 to 12-gallon plastic storage bin&#41, 
            and fill with bedding of shredded newspaper or leaves. The worms needed here are red wigglers
            &#40Eisenia fetida&#41, ......
            </p>
        </div>
      </div>
    </main>
    );

}

export default worm_bin;