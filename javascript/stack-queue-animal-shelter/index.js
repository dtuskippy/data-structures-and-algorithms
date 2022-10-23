'use strict';

class AnimalShelter {
  constructor {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'cat') this.cat.enqueue(animal);
    if(animaltype === 'dog') this.dog.enqueue(animal);
  }

  dequeue(preference) {
    if(!preference) return null;
    if(preference === 'dog') return this.dog.dequeue();
    if(preference === 'cat') return this.catQ.dequeue();
  }
}



