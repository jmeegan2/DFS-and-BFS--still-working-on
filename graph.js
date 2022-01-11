const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const adjancencyList = new Map();

// Add node
function addNode(airport) {
    adjancencyList.set(airport);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjancencyList.get(origin).push(destination);
    adjancencyList.get(destination).push(origin);
}

// 5:06 https://www.youtube.com/watch?v=cWNEl4HE2OE 