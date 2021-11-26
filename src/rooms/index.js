import { Room } from '../classes';
import { outside, foyer, overlook, narrow, treasure } from '../images';

// set up rooms
const rooms = {
  'outside': new Room(
    'Outside Cave Entrance',
    outside,
    'North of you, the cave mount beckons.',
    ['sword', 'lantern', 'coat']
  ),
  'foyer': new Room(
    'Foyer',
    foyer,
    `Dim light filters in from the south. Dusty 
    passages run north and east.`,
    ['ring']
  ),
  'overlook': new Room(
    'Grand Overlook',
    overlook,
    `A steep cliff appears before you, falling
    into the darkness. Ahead to the north, a light flickers in
    the distance, but there is no way across the chasm.`
  ),
  'narrow': new Room(
    'Narrow Passage',
    narrow,
    `The narrow passage bends here from west
    to north. The smell of gold permeates the air.`,
    ['key']
  ),
  'treasure': new Room(
    'Treasure Chamber',
    treasure,
    `You've found the long-lost treasure
    chamber! Sadly, it has already been completely emptied by
    earlier adventurers. The only exit is to the south.`,
    ['a note saying: "I got here first hehe"']
  )
}

// link rooms together
rooms['outside'].n_to = rooms['foyer']
rooms['foyer'].s_to = rooms['outside']
rooms['foyer'].n_to = rooms['overlook']
rooms['foyer'].e_to = rooms['narrow']
rooms['overlook'].s_to = rooms['foyer']
rooms['narrow'].w_to = rooms['foyer']
rooms['narrow'].n_to = rooms['treasure']
rooms['treasure'].s_to = rooms['narrow']

export default rooms;
