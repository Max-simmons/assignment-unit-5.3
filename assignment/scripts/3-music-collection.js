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