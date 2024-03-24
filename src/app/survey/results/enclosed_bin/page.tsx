import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function enclosed_bin() {
    return (
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>The best compost for you is...an enclosed bin!</h1>
        <br></br>
      </div>

      <div className={styles.center}>
        <Image
          src="/enclosed_bin.jpeg" 
          alt="Enclosed Bin"
          width={340}
          height={250}
          className={styles.roundedImage}
          priority
        />
      </div>
      <br></br>

      <div className={styles.center}>
        <p>Enclosed bin composting involves using a sealed container to decompose organic matter, minimizing odors and pests.</p>
      </div>

    {/* only if there's a pro con section on the infographic*/}
      <div className={styles.center}> 
        <div className={styles.card}>
          <h2>Pros:</h2> 
          <ul>
  <li>Pest-Resistant</li>
  <li>Versatility</li>
  <li>Odor Control</li>
  <li>Space-Efficient</li>
  <li>Neat</li>

</ul>
        </div>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Cons:</h2> 
          <ul>
  <li>Costly</li>
  <li>Limited Aeration</li>
  <li>Requires Space</li>
  <li>Potential Leaks</li>
  <li>Slower Decomposition</li>
</ul>
        </a>
      </div>

      <div className={styles.center}>
        <div>
          <h2>How to:</h2>
          <br></br>
          <p>
          To start enclosed bin composting, layer green and brown materials inside the bin, periodically mix the contents to aerate, and maintain moisture levels by watering as needed.
            </p>
        </div>
      </div>
    </main>
    );

}

export default enclosed_bin;
