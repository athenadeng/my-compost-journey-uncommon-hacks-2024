'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

function DynamicButton() {
const [selectedOption, setSelectedOption] = useState('');

const handleClick = (option: React.SetStateAction<string>) => {
  setSelectedOption(option);
};

  return (
    <div>
      <span>Click the button to get started on your composting journey!</span>
      <br />
      {selectedOption === '' && (
        <>
          <button type="button" className="btn btn-success" onClick={() => handleClick('where')}>Start the survey!</button>
        </>
      )}
      {selectedOption === 'where' && (
        <>
          <p>Where to compost?</p>
          <button type="button" className="btn btn-info" onClick={() => handleClick('outside')}>Outside</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('inside')}>Inside</button>
        </>
      )}

      {selectedOption === 'outside' && (
        <>
          <p>What will you compost outside?</p>
          <button type="button" className="btn btn-success" onClick={() => handleClick('food')}>Food Waste only</button>
          <button type="button" className="btn btn-success" onClick={() => handleClick('food_yard')}>Food waste and yard mix</button>
          <button type="button" className="btn btn-success" onClick={() => handleClick('leaves')}>Just Leaves</button>
        </>
      )}
      {selectedOption === 'inside' && (
        <>
          <p>How do you feel about worms?</p>
          <button type="button" className="btn btn-primary" onClick={() => handleClick('ick')}>Ick!</button>
          <a href="/survey/results/worm_bin">
          <button type="button" className="btn btn-primary" onClick={() => handleClick('love')}>No problem!</button>
          </a>
        </>
      )}
      

      {selectedOption === 'food' && (
        <>
          <p>Got Leaves? (or paper/straw?)</p>

          <button type="button" className="btn btn-info" onClick={() => handleClick('yes_leaves')}>Yes!</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('no_leaves')}>Nope!</button>
        </>
      )}
      {(selectedOption === 'food_yard' || selectedOption === 'yes_leaves') && (
        <>
          <p>Want super simple?</p>
          <button type="button" className="btn btn-info" onClick={() => handleClick('yes_simple')}>Yes, please!</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('no_simple')}>Not tooo simple!</button>
        </>
      )}
      {selectedOption === 'no_simple' && (
        <>
          <p>Compost in garden?</p>

          <button type="button" className="btn btn-info" onClick={() => handleClick('why_not_garden')}>Why not!</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('no_in_an_area')}>No, in a separate compost area.</button>
        </>
      )}
      {selectedOption === 'why_not_garden' && (
        <>
          <p>Can you dig a hole for the compost?</p>

          <button type="button" className="btn btn-info" onClick={() => handleClick('no_hole')}>No</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('yes_hole')}>Yes</button>
        </>
      )}
      {selectedOption === 'no_in_an_area' && (
        <>
          <p>Worried about pests?</p>

          <button type="button" className="btn btn-info" onClick={() => handleClick('not_worried_pests')}>Not really</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('yes_worried_pests')}>Yes! No pests!</button>
        </>
      )}
      {selectedOption === 'not_worried_pests' && (
        <>
          <p>Willing to DIY?</p>

          <button type="button" className="btn btn-info" onClick={() => handleClick('yes_DIY')}>Oh yeah!</button>
          <button type="button" className="btn btn-info" onClick={() => handleClick('no_DIY')}>Not really!</button>
        </>
      )}
      {(selectedOption === 'yes_worried_pests'|| selectedOption === 'no_DIY') && (
         <>
         <p>Willing to spend $$?</p>

         <button type="button" className="btn btn-info" onClick={() => handleClick('yes_money')}>Okay!</button>
         <button type="button" className="btn btn-info" onClick={() => handleClick('no_money')}>mmm..count me out</button>
       </>
      )}
      <a href="/survey/results/bokashi">
      {selectedOption === 'ick' }
      </a>
      {selectedOption === 'love' && (
        <>

        </>
      )}
      {selectedOption === 'no_money' && (
        <>
          <p>Circular / enclosed bin</p>
        </>
      )}
      {selectedOption === 'yes_money' && (
        <>
          <p>tumber / rolling bin</p>
        </>
      )}
      {selectedOption === 'yes_DIY' && (
        <>
          <p>Wire bin / brick bin / cinder block bin / wooden or pallent bin</p>
        </>
      )}
      {selectedOption === 'no_leaves' && (
        <>
          <p>Green cone / worm bin</p>
        </>
      )}
      {(selectedOption === 'yes_simple'|| selectedOption === 'no_hole') && (
        <>
          <p>Piles & Heaps</p>
        </>
      )}
       {selectedOption === 'yes_hole' && (
        <>
          <p>pits & trenches</p>
        </>
      )}
      {selectedOption === 'leaves' && (
        <>
          <p>Pile or bin</p>
        </>
      )}

      
    </div>
  );
}

export default DynamicButton;

