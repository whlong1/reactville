import React from 'react';

export default function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  console.log('PLACE',place)
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <button onClick={() => {
          onComplete(parentId, id);
        }}>
          Complete
        </button>
      </li>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </>
  );
}
