import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function pile_bin() {
    return (
      <>
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...a tumbler!</h1>
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
            <p>Tumbler composting involves using a rotating bin to aerate organic materials, speeding up the composting process.</p>
          </div>

          {/* only if there's a pro con section on the infographic*/}
          <div className={styles.center}> 
            <div className={styles.card}>
              <h2>Pros:</h2>
              <ul>
                <li>Efficient</li>
                <li>Odor-Controlled</li>
                <li>Pest-Resistant</li>
                <li>Easy to Turn</li>
                <li>Space-Saving</li>
              </ul>
            </div>

            <a href="#encountering-problems" className={styles.card}>
              <h2>Cons:</h2>
              <ul>
                <li>Costly</li>
                <li>Limited Capacity</li>
                <li>Requires Assemblu</li>
                <li>Less Natural Aeration</li>
                <li>Potential for Mechanical Failure</li>
              </ul>
            </a>
          </div>

          <div className={styles.center}>
            <div>
              <h2>How to:</h2>
              <br></br>
              <p>
              To start tumbler composting, fill the bin with a balanced mix of green and brown materials, periodically turn the tumbler to aerate the contents, and ensure proper moisture levels for decomposition.
              </p>
            </div>
          </div>
        </main>

        <div className={styles.center}>
            <h1>OR...!</h1>
          </div>
          
       
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...a rolling pin!</h1>
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
            <p>Rolling pin composting involves rolling a cylindrical container filled with organic waste to facilitate decomposition.

</p>
          </div>

          {/* only if there's a pro con section on the infographic*/}
          <div className={styles.center}> 
            <div className={styles.card}>
              <h2>Pros:</h2>
              <ul>
                <li>Portable</li>
                <li>Simple</li>
                <li>Space-Efficient</li>
                <li>Quick</li>
                <li>No Assembly</li>
              </ul>
            </div>

            <a href="#encountering-problems" className={styles.card}>
              <h2>Cons:</h2>
              <ul>  
                <li>Limited Capacity</li>
                <li>Less Control</li>
                <li>Can be messy</li>
                <li>Requires Strength</li>
                <li>Risk of Overcompaction</li>
              </ul>
            </a>
          </div>
          <div className={styles.center}>
            <div>
              <h2>How to:</h2>
              <br></br>
              <p>
              To start rolling pin composting, fill the container with a mixture of green and brown materials, roll it regularly to mix and aerate the compost, and monitor moisture levels to ensure proper decomposition.
              </p>
            </div>
          </div>
        </main>
      </>
    )
};

export default pile_bin;

