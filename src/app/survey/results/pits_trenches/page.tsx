import Image from 'next/image';
//import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';
import React, { useState } from 'react';

function pits_trenches() {
    return (
      <main className={styles.main}>
      <div className={styles.header}>
        <h1>The best compost for you is...pits and trenches!</h1>
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
        <p>Pits and trenches composting involves burying organic waste in excavated holes or furrows, facilitating decomposition underground.</p>
      </div>

    {/* only if there's a pro con section on the infographic*/}
      <div className={styles.center}> 
        <div className={styles.card}>
          <h2>Pros:</h2>
          
          <ul>
  <li>Efficient</li>
  <li>Concealed</li>
  <li>Space-saving</li>
  <li>Natural</li>
  <li>Moisture retention</li>

</ul>
        </div>

        <a href="#encountering-problems" className={styles.card}>
          <h2>Cons:</h2>
     
          <ul>
  <li>Odor</li>
  <li>Limited capacity</li>
  <li>Pest-Attractive</li>
  <li>Labor-intensive</li>
  <li>Slow</li>
</ul>
        </a>
      </div>

      <div className={styles.center}>
        <div>
          <h2>How to:</h2>
          <br></br>
          <p>
          To start pits and trenches composting, dig a hole or trench, add organic waste, cover with soil, and periodically mix or turn the material to aid decomposition, creating nutrient-rich soil amendments in an underground environment.</p>
            
        </div>
      </div>
    </main>
    );

}

export default pits_trenches;
