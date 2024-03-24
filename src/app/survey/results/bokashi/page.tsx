import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function worm_bin() {
    return (
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>The best compost for you is...a bokashi!</h1>
        <br></br>
      </div>

      <div className={styles.center}>
        <Image
          src="/bokashi.webp" 
          alt="Bokashi"
          width={340}
          height={250}
          className={styles.roundedImage}
          priority
        />
      </div>
      <br></br>

      <div className={styles.center}>
        <p>Bokashi composting is an anaerobic process that ferments organic waste in a sealed container, using a specific inoculant, to quickly produce a nutrient-rich compost that can be directly buried in the soil.</p>
      </div>

    {/* only if there's a pro con section on the infographic*/}
      <div className={styles.center}> 
        <div className={styles.card}>
          <h2>Pros:</h2>
          <ul>
  <li>Speed</li>
  <li>Versatility</li>
  <li>Odor Control</li>
  <li>Space-Efficient</li>
  <li>Soil Enhancer</li>

</ul>
        </div>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Cons:</h2>
          <ul>
  <li>Initial Cost</li>
  <li>Continuous Expense</li>
  <li>Secondary Process</li>
  <li>Maintenance</li>
  <li>Limited End Use</li>
</ul>
        </a>
      </div>

      <div className={styles.center}>
        <div>
          <h2>How to:</h2>
          <br></br>
          <p>
To use a Bokashi composting system, layer your kitchen waste in the Bokashi bin, sprinkle Bokashi bran on each layer, press down to remove air, and seal the lid tightly. Drain the liquid produced every few days to prevent odors, and when the bin is full, let it ferment for two weeks before burying the contents in the garden soil or adding it to a traditional compost pile.
            </p>
        </div>
      </div>
    </main>
    );

}

export default worm_bin;
