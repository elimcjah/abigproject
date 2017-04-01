

// let cry = {
//     horse: ['nay'],
//     lion: [],
//     dragon: [],
//     cat: ['meow'],
//     dog: ['woof', 'howl'],
//     wolf: ['howl']
// }

// 'horse' ('nay'), 'lion' ('meow', 'roar'), 'dragon'
// ('roar'), cat ('meow'), dog ('woof', 'howl'), wolf ('howl')

function whatSoundFrom(animalType){

    switch (animalType){

        default:
            console.log('please choose: horse, lion, dragon, cat, dog, or wolf');
            break;
        case 'horse':
            console.log('nay');
            break;
        case 'lion':
            console.log('meow');
            console.log('roar');
            break;
        case 'dragon':
            console.log('roar');
            break;
        case 'cat':
            console.log('meow');
            break;
        case 'dog':
            console.log('woof');
            console.log('howl');
            break;
        case 'wolf':
            console.log('howl');
            break;
    }
}

whatSoundFrom('wolf');


