console.log('***** Music Collection *****')
let collection = [];

function addtoCollection(title, artist, yearsPublished){
    collection.push(title, artist, yearsPublished);
}

let record1 = {
    title: 'Take Care',
    artist: 'Drake',
    yearsPublished: 2011
}

console.log('collection is empty');

addtoCollection(record1)

console.log('added Take Care to the collection');

let record2 = {
    title: 'DS2',
    artist: 'Furture',
    yearsPublished: 2015
}

addtoCollection(record2)

console.log('added DS2 to the collection');

let record3 = {
    title: 'My Turn', 
    artist: 'Lil Baby',
    yearsPublished: 2020
}

addtoCollection(record3)

console.log('added My Turn to the collection');

let record4 = {
    title: 'Beautiful Mind',
    artist: 'Rod Wave',
    yearsPublished: 2022
}

addtoCollection(record4)

console.log('added Beautiful Mind to the collection');

let record5 = {
    title: 'Thank Me Later',
    artist: 'Drake',
    yearsPublished: 2010
}

addtoCollection(record5)

console.log('added Thank Me Later to the collection');

let record6 = {
    title: 'Tha Carter III',
    artist: 'Lil Wayne',
    yearsPublished: 2008
}

addtoCollection(record6)

console.log('added Tha Carter III to the collection');

function showCollection(){
    for(let i=0; i<collection.length; i++){
        console.log(collection[i]);
    }
}

showCollection()

