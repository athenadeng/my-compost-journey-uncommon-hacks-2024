import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function pile_bin() {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...a bin!</h1>
          </div>

          <div className={styles.center}>
            <Image
              src="/bin.jpeg" // Ensure the image exists in your public folder
              alt="Bin"
              width={350}
              height={250}
          className={styles.roundedImage}
          priority
            />
          </div>

          <div className={styles.center}>
            <p>Composting with a bin involves the controlled decomposition of organic matter within a contained environment, fostering nutrient-rich soil production for sustainable gardening and environmental benefit.</p>
          </div>

          {/* only if there's a pro con section on the infographic*/}
          <div className={styles.center}> 
            <div className={styles.card}>
              <h2>Pros:</h2>
              <ul>
                <li>Nutrient-rich soil</li>
                <li>Reduces landfill waste</li>
                <li>Decreases methane emissions</li>
                <li>Sustainable gardening</li>
                <li>Cost-effective fertilizer</li>
              </ul>
            </div>

            <a href="#encountering-problems" className={styles.card}>
              <h2>Cons:</h2>
              <ul>
                <li>Odor issues</li>
                <li>Pest attraction</li>
                <li>Takes space</li>
                <li>Requires maintenance</li>
                <li>Slow decomposition</li>
              </ul>
            </a>
          </div>

          <div className={styles.center}>
            <div>
              <h2>How to:</h2>
              <br></br>
              <p>
              To compost using a bin, start by layering green (nitrogen-rich) and brown (carbon-rich) materials like kitchen scraps, yard waste, and shredded paper. Keep the pile moist and turn it regularly to aerate it, promoting decomposition. Within a few months to a year, you'll have nutrient-rich compost ready to use in your garden.
              </p>
            </div>
          </div>
        </main>

        <div className={styles.center}>
            <h1>OR...!</h1>
          </div>
          
       
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...a pile!</h1>
          </div>

          <div className={styles.center}>
            <Image
              className={styles.roundedImage}
              src="/pile.jpeg" // Ensure the image exists in your public folder
              alt="Pile"
              width={250}
              height={250}
              priority
            />
          </div>

          <div className={styles.center}>
            <p>Composting using a pile involves layering organic materials directly on the ground, allowing them to decompose naturally over time without the containment of a bin.





</p>
          </div>

          {/* only if there's a pro con section on the infographic*/}
          <div className={styles.center}> 
            <div className={styles.card}>
              <h2>Pros:</h2>
              <ul>
                <li>Natural decomposition</li>
                <li>No cost</li>
                <li>Minimal setup</li>
                <li>Large capacity</li>
                <li>Beneficial soil microbes</li>
              </ul>
            </div>

            <a href="#encountering-problems" className={styles.card}>
              <h2>Cons:</h2>
              <ul>
                <li>Pest attraction</li>
                <li>Takes space</li>
                <li>Can be messy</li>
                <li>Slower process</li>
                <li>May emit odors</li>
              </ul>
            </a>
          </div>
          <div className={styles.center}>
            <div>
              <h2>How to:</h2>
              <br></br>
              <p>
              To compost using a pile, gather organic materials like fruit and vegetable scraps, yard waste, and paper products, layer them in a designated area, ensuring a balance of green (nitrogen-rich) and brown (carbon-rich) materials, then periodically turn the pile to aerate it and speed up decomposition, resulting in nutrient-rich compost for your garden.
              </p>
            </div>
          </div>
        </main>
      </>
    )
};

export default pile_bin;

