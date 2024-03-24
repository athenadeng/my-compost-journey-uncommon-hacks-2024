import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

function encounteringproblems() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
<table className="table table-hover">
<thead>
  <tr className="table-danger">
    <th scope="col">SYMPTOM</th>
    <th scope="col">SITUATION</th>
    <th scope="col">SOLUTION</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td>The pile has a rotten-egg smell.</td>
    <td>There is too much water.</td>
    <td>Turn the pile and add more browns if it's soggy.</td>
  </tr>
  <tr>
  <td>The pile has an ammonia smell.</td>
    <td>There is too much nitrogen or not enough air.</td>
    <td>Add browns and turn the pile.</td>
  </tr>
  <tr>
  <td>The pile isn't decomposing quickly enough or isn't producing enough heat.</td>
    <td>The pile is too small.
        <br></br>
The material is too dry.
<br></br>
The pile needs nitrogen.
<br></br>
The pile needs oxygen.</td>
    <td>Mix new ingredients into the pile.
    <br></br>
Add water and turn the pile.
<br></br>
Add greens.
<br></br>
Turn the pile more frequently.</td>
  </tr>
  <tr>
  <td>The pile is too hot. The temperature is 170°F or above.</td>
    <td>The material is too dry.</td>
    <td>Add browns and water, then turn the pile.</td>
  </tr>
  <tr>
  <td>The pile is losing heat before the compost is finished.</td>
    <td>The material is going anaerobic - losing air.</td>
    <td>Add greens and turn the pile.</td>
  </tr>
  <tr>
  <td>Flies and/or gnats are around the pile.</td>
    <td>The greens are exposed.</td>
    <td>Cover the greens with browns.</td>
  </tr>
</tbody>
</table>
</div>
);

}

export default encounteringproblems;
