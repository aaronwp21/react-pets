import React from 'react';
import './PetList.css';
import Card from './Card';
import { nanoid } from 'nanoid';

const pets = [
  {
    name: 'Garfield',
    photo:
      'https://m.media-amazon.com/images/M/MV5BMjQ4NDQ4MDk3NV5BMl5BanBnXkFtZTYwNzExODc3._V1_FMjpg_UX320_.jpg',
    color: 'orange'
  },
  {
    name: 'Tom',
    photo:
      'https://upload.wikimedia.org/wikipedia/en/f/f6/Tom_Tom_and_Jerry.png',
    color: 'blue'
  },
  {
    name: 'Jerry',
    photo: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png',
    color: 'brown'
  },
];

function PetList() {
  return (
    <>
      <h2>Famous Pets</h2>
      <ul className='pet-list-container'>
        {pets.map((pet) => 
          <Card key={nanoid()} petName={pet.name} petPhoto={pet.photo} borderColor={pet.color} />
        )}
      </ul>
    </>
  );
}

export default PetList;
