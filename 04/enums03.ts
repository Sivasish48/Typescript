// Enum as a Type
// Enums can be used as types, providing a way to enforce the allowed values.


enum Direction {
    Up,
    Down,
    Left,
    Right
  }
  
  function move(direction: Direction) {
    // Function implementation
  }
  
  move(Direction.Up);  // Valid
  move(Direction.Left);  // Valid
  // move(2);  // Invalid, would throw an error



  