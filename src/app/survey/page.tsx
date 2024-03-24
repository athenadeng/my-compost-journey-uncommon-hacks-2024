'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

function DynamicButton() {
const [selectedOption, setSelectedOption] = useState('');

const handleClick = (option: React.SetStateAction<string>) => {
  setSelectedOption(option);
};

return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className = "text-center">
          <div className="col">
              <br />
              {selectedOption === '' && (
                  <>
                  <h2>Let's Get Started!</h2>
                  <br></br>
                  <button type="button" className="btn btn-success btn-lg my-2" onClick={() => handleClick('where')}>START</button>
                  </>
              )}

              {selectedOption === 'where' && (
                  <>
                      <p className="h3">Where to compost?</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('outside')}>Outside</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('inside')}>Inside</button>
                  </>
              )}

              {selectedOption === 'outside' && (
                  <>
                      <p className="h3">What will you compost outside?</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('food')}>Food Waste only</button>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('food_yard')}>Food waste and yard mix</button>
                      <a href="/survey/results/pile_bin">
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('leaves')}>Just Leaves</button>
                      </a>
                  </>
              )}

              {selectedOption === 'inside' && (
                  <>
                      <p className="h3">How do you feel about worms?</p>
                      <a href="/survey/results/bokashi">
                        <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('ick')}>Ick!</button>
                      </a>
                      <a href="/survey/results/worm_bin">
                        <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('love')}>Love them!</button>
                      </a>
                  </>
              )}

              {selectedOption === 'food' && (
                  <>
                      <p className="h3">Got Leaves? (or paper/straw?)</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_leaves')}>Yes!</button>
                      <a href="/survey/results/worm_bin_green_cone">
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_leaves')}>Nope!</button>
                      </a>
                  </>
              )}

              {(selectedOption === 'food_yard' || selectedOption === 'yes_leaves') && (
                  <>
                      <p className="h3">Want super simple?</p>
                      <br></br>
                      <a href="/survey/results/piles_heaps">
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_simple')}>Yes, please!</button>
                      </a>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_simple')}>Not too simple!</button>
                  </>
              )}

              {selectedOption === 'no_simple' && (
                  <>
                      <p className="h3">Compost in garden?</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('why_not_garden')}>Why not!</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_in_an_area')}>No, in a separate compost area.</button>
                  </>
              )}

              {selectedOption === 'why_not_garden' && (
                  <>
                      <p className="h3">Can you dig a hole for the compost?</p>
                      <br></br>
                      <a href="/survey/results/piles_heaps">
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('no_hole')}>No</button>
                      </a>
                      <a href="/survey/results/pits_trenches">
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('yes_hole')}>Yes</button>
                      </a>
                  </>
              )}

              {selectedOption === 'no_in_an_area' && (
                  <>
                      <p className="h3">Worried about pests?</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('not_worried_pests')}>Not really</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('yes_worried_pests')}>Yes, worried!</button>
                  </>
              )}

              {selectedOption === 'not_worried_pests' && (
                  <>
                      <p className="h3">Willing to DIY?</p>
                      <br></br>
                      <a href="/survey/results/enclosed_wooden_bin">
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_DIY')}>Oh yeah!</button>
                      </a>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_DIY')}>Not really!</button>
                  </>
              )}

{(selectedOption === 'yes_worried_pests' || selectedOption === 'no_DIY') && (
                  <>
                      <p className="h3">Willing to spend $$?</p>
                      <br></br>
                      <a href="/survey/results/tumbler_rolling_pin">
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_money')}>Okay!</button>
                      </a>
                      <a href="/survey/results/enclosed_bin">
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_money')}>mmm..count me out</button>
                      </a>
                  </>
              )}
              
            
            
          </div>
      </div>
  </div>
);
}

export default DynamicButton;

