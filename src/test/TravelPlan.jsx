import React, { useState } from 'react';
import { initialTravelPlan } from './modules/data.js'
import PlaceTree from './PlaceTree.jsx';

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id !== childId)
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent
    });
  }

  console.log(plan)

  const root = plan[0];
  console.log('Travelplan root', root)
  const planetIds = root.childIds;
  console.log(planetIds)
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}


//pass down entire array of data, 
//mapping through child ids
//accessing specific elements using the id every step of the way
//place = allplaces[id]