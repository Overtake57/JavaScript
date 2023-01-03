let prenoms = ['Pierre', 'Mathilde', 'Thomas', 'Manon', 'Florian', 'Camille'];
let ages = [29, 27, 28, 30];

let sliceprenoms = prenoms.slice(2, 4);
let sliceages = ages.slice(2);

document.getElementById('p1').innerHTML = sliceprenoms.join(' - ');
document.getElementById('p2').innerHTML = sliceages.join(' / ');