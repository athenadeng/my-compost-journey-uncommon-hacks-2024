import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function worm_bin() {
    return (
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>Welcome to your compost journey!</h1>
        <br />
        <p className={styles.center}>Find the best compost style for your environment and lifestyle.</p>
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

      <div>
        {/* Using Link with an a tag wrapping the Image */}
        <a href="/survey">
          <button className={styles.getStartedButton}>get started here!</button>
        </a>
      </div>

      <div className={styles.intro}>
        <p>Take our quick survey to start your composting adventure and help the planet!</p>
      </div>

      <div className={styles.center}>
        <a href="#why-compost" className={styles.card}>
          <h2>Why Compost? &rarr;</h2>
          <p>Learn about the benefits of composting for you and the environment.</p>
        </a>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Encountering Problems? &rarr;</h2>
          <p>Get practical tips on how to start composting effectively today.</p>
        </a>
      </div>
    </main>
    );

}

export default worm_bin;