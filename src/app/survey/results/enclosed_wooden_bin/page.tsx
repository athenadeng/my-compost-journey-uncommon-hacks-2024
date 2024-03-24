import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function enclosed_wooden_bin() {
    return (
      <>
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

        <div className={styles.center}>
            <h1>OR...!</h1>
          </div>
          
       
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>The best compost for you is...a wooden/pallet bin!</h1>
          </div>

          <div className={styles.center}>
            <Image
              className={styles.roundedImage}
              src="/wooden_bin.webp" // Ensure the image exists in your public folder
              alt="Wooden bin"
              width={250}
              height={250}
              priority
            />
          </div>

          <div className={styles.center}>
            <p>Wooden bin composting involves utilizing a container made of wood to decompose organic matter, providing a natural and aesthetically pleasing option.

</p>
          </div>

          {/* only if there's a pro con section on the infographic*/}
          <div className={styles.center}> 
            <div className={styles.card}>
              <h2>Pros:</h2> 
              <ul>
                <li>Aesthetic</li>
                <li>Versatile</li>
                <li>DIY-Friendly</li>
                <li>Insulating</li>
                <li>Customizable</li>
              </ul>
            </div>

            <a href="#encountering-problems" className={styles.card}>
              <h2>Cons:</h2> 
              <ul>  
                <li>Rot-Prone</li>
                <li>Requires Maintenance</li>
                <li>Limited Lifespan</li>
                <li>Costly</li>
                <li>Pest Attraction</li>
              </ul>
            </a>
          </div>
          <div className={styles.center}>
            <div>
              <h2>How to:</h2>
              <br></br>
              <p>
              To start wooden bin composting, assemble or purchase a wooden bin, layer green and brown materials inside, turn the compost occasionally for aeration, and monitor moisture levels for optimal decomposition.
              </p>
            </div>
          </div>
        </main>
      </>
    )
};

export default enclosed_wooden_bin;

