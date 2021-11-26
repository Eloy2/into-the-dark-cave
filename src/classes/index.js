
/* room class */
class Room {
  constructor(name, image, description, itemsInRoom) {
    this.name = name
    this.image = image
    this.description = description
    this.itemsInRoom = itemsInRoom ? [...itemsInRoom] : []
  }
}

export { Room };
