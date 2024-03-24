import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function piles_heaps() {
    return (
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>The best compost for you is...piles and heaps!</h1>
        <br></br>
      </div>

      <div className={styles.center}>
        <Image
          src="/piles_heaps.jpeg" 
          alt="Piles and heaps"
          width={340}
          height={250}
          className={styles.roundedImage}
          priority
        />
      </div>
      <br></br>

      <div className={styles.center}>
        <p>Piles and heaps composting involves creating large, uncontained mounds of organic waste, allowing for natural decomposition through microbial activity and periodic turning to aerate the pile.</p>
      </div>

    {/* only if there's a pro con section on the infographic*/}
      <div className={styles.center}> 
        <div className={styles.card}>
          <h2>Pros:</h2>
          <ul>
  <li>Efficient</li>
  <li>Large-scale</li>
  <li>Low-cost</li>
  <li>Natural</li>
  <li>High-volume</li>

</ul>
        </div>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Cons:</h2>
          <ul>
  <li>Space Intensive</li>
  <li>Strong Odor</li>
  <li>Pest-Attractive</li>
  <li>Maintenance</li>
  <li>Slow</li>
</ul>
        </a>
      </div>

      <div className={styles.center}>
        <div>
          <h2>How to:</h2>
          <br></br>
          <p>
          To start piles and heaps composting, layer organic materials such as yard waste and kitchen scraps in a designated area, periodically turning the pile to aerate and accelerate decomposition, allowing nature's processes to transform waste into nutrient-rich compost.
            </p>
        </div>
      </div>
    </main>
    );

}

export default piles_heaps;
