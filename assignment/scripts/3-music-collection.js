console.log('***** Music Collection *****')
let collection = [];

function addtoCollection(title, artist, yearsPublished){
    let record = { 
        title: title, 
        artist: artist, 
        yearsPublished: yearsPublished
    }
    collection.push(record);
}

console.log('collection is empty');

addtoCollection('Take Care', 'Drake', 2011)

console.log('added Take Care to the collection');

addtoCollection('DS2', 'Future', 2015)

console.log('added DS2 to the collection');

addtoCollection('My Turn', 'Lil Baby', 2020)

console.log('added My Turn to the collection');

addtoCollection('Beautiful Mind', 'Rod Wave', 2022)

console.log('added Beautiful Mind to the collection');

addtoCollection('Thank Me Later', 'Drake', 2010)

console.log('added Thank Me Later to the collection');

addtoCollection('Tha Carter III', 'Lil Wayne', 2008)

console.log('added Tha Carter III to the collection');

console.log('collection'); 

function showCollection(){
    for(let i=0; i<collection.length; i++){
        console.log(collection[i]);
    }
}

showCollection()

console.log('This is my collection');

function findByArtist(artist){
    if(artist.length === 0){
    console.log('no artist found');
    return [];
    }
    else{
    console.log(artist);
    return artist;
    }
}

findByArtist('Drake')



