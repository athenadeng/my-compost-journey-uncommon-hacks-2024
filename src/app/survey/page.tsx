'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';

function DynamicButton() {
const [selectedOption, setSelectedOption] = useState('');

const handleClick = (option: React.SetStateAction<string>) => {
  setSelectedOption(option);
};

return (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
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
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('leaves')}>Just Leaves</button>
                  </>
              )}

              {selectedOption === 'inside' && (
                  <>
                      <p>How do you feel about worms?</p>
                      <a href="/survey/results/bokashi">
                        <button type="button" className="btn btn-primary me-2" onClick={() => handleClick('ick')}>Ick!</button>
                      </a>
                      <a href="/survey/results/worm_bin">
                        <button type="button" className="btn btn-primary" onClick={() => handleClick('love')}>Love them!</button>
                      </a>
                  </>
              )}

              {selectedOption === 'food' && (
                  <>
                      <p className="h3">Got Leaves? (or paper/straw?)</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_leaves')}>Yes!</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_leaves')}>Nope!</button>
                  </>
              )}

              {(selectedOption === 'food_yard' || selectedOption === 'yes_leaves') && (
                  <>
                      <p className="h3">Want super simple?</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_simple')}>Yes, please!</button>
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
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('no_hole')}>No</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('yes_hole')}>Yes</button>
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
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_DIY')}>Oh yeah!</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_DIY')}>Not really!</button>
                  </>
              )}

{(selectedOption === 'yes_worried_pests' || selectedOption === 'no_DIY') && (
                  <>
                      <p className="h3">Willing to spend $$?</p>
                      <br></br>
                      <button type="button" className="btn btn-success btn-lg me-2" onClick={() => handleClick('yes_money')}>Okay!</button>
                      <button type="button" className="btn btn-success btn-lg" onClick={() => handleClick('no_money')}>mmm..count me out</button>
                  </>
              )}
              {selectedOption === 'no_money' && (
                  <>
                      <p className="lead">Look into circular or enclosed bins as economical options.</p>
                  </>
              )}
              {selectedOption === 'yes_money' && (
                  <>
                      <p className="lead">Consider investing in a tumbler or rolling bin.</p>
                  </>
              )}
              {selectedOption === 'yes_DIY' && (
                  <>
                      <p className="lead">Explore DIY options like wire bins, brick bins, cinder block bins, or wooden/pallet bins.</p>
                  </>
              )}
              {selectedOption === 'no_leaves' && (
                  <>
                      <p className="lead">Green cones or worm bins might be suitable.</p>
                  </>
              )}
              {(selectedOption === 'yes_simple' || selectedOption === 'no_hole') && (
                  <>
                      <p className="lead">Consider starting with simple piles or heaps.</p>
                  </>
              )}
              {selectedOption === 'yes_hole' && (
                  <>
                      <p className="lead">Composting in pits or trenches could be ideal.</p>
                  </>
              )}
              {selectedOption === 'leaves' && (
                  <>
                      <p className="lead">A simple pile or bin works well for just leaves.</p>
                  </>
              )}
          </div>
      </div>
  </div>
);
}

export default DynamicButton;

