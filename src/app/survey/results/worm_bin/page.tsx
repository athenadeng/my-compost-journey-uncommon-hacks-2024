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
          src="/worm_bin.jpeg" // Ensure the image exists in your public folder
          alt="Worm Bin"
          width={340}
          height={250}
          className={styles.roundedImage}
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
          <ul>
  <li>Efficient composting</li>
  <li>Small-scale</li>
  <li>Odor Control</li>
  <li>High-Quality Compost</li>
  <li>Low Maintenance</li>

</ul>
        </div>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Cons:</h2>
          <ul>
  <li>Moisture Control</li>
  <li>Temperature Sensitivity</li>
  <li>Limited Capacity</li>
  <li>Pest Concerns</li>
  <li>Species Sensitivity</li>

</ul>
        </a>
      </div>

      <div className={styles.center}>
        <div>
          <h2>How to:</h2>
          <p>
To start a worm bin composting system, prepare bedding material like shredded newspaper, add composting worms, then regularly feed them with kitchen scraps while maintaining proper moisture levels. Harvest compost periodically, leaving worms behind, to produce nutrient-rich soil conditioner for plants.
            </p>
        </div>
      </div>
    </main>
    );

}

export default worm_bin;
