import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function worm_bin_green_cone() {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...a worm bin!</h1>
          </div>

          <div className={styles.center}>
            <Image
              src="/worm_bin.jpeg" // Ensure the image exists in your public folder
              alt="Worm Bin"
              width={350}
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
              <br></br>
              <p>
                To start a worm bin composting system, prepare bedding material like shredded newspaper, add composting worms, then regularly feed them with kitchen scraps while maintaining proper moisture levels. Harvest compost periodically, leaving worms behind, to produce nutrient-rich soil conditioner for plants.
              </p>
            </div>
          </div>
        </main>

        <div className={styles.center}>
            <h1>OR...!</h1>
          </div>
          
       
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...green cone solar digester!</h1>
          </div>

          <div className={styles.center}>
            <Image
              className={styles.roundedImage}
              src="/green_cone.webp" // Ensure the image exists in your public folder
              alt="Green Cone"
              width={250}
              height={250}
              priority
            />
          </div>

          <div className={styles.center}>
            <p>The Green Cone Solar Digester is an underground composting system powered by solar energy, efficiently breaking down organic waste into nutrient-rich soil.</p>
          </div>

          {/* only if there's a pro con section on the infographic*/}
          <div className={styles.center}> 
            <div className={styles.card}>
              <h2>Pros:</h2>
              <ul>
                <li>Efficient Decomposition</li>
                <li>Odor Reduction</li>
                <li>Space Efficient</li>
                <li>Nutrient-Rich Soil</li>
                <li>Low Maintenance</li>
              </ul>
            </div>

            <a href="#encountering-problems" className={styles.card}>
              <h2>Cons:</h2>
              <ul>
                <li>Initial Installation</li>
                <li>Dependence on Sunlight</li>
                <li>Limited Capacity</li>
                <li>Potential for Rodent Intrusion</li>
                <li>Inability to Compost Certain Materials</li>
              </ul>
            </a>
          </div>
          <div className={styles.center}>
            <div>
              <h2>How to:</h2>
              <br></br>
              <p>
              To start using a Green Cone Solar Digester, dig a hole according to the provided specifications and partially bury the cone-shaped digester in a sunny spot. Begin adding organic waste, ensuring it's free from meat, dairy, and oily foods, and monitor the decomposition process regularly to maintain optimal conditions for efficient composting.
              </p>
            </div>
          </div>
        </main>
      </>
    )
};

export default worm_bin_green_cone;

