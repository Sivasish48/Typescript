// enums as a string 
// String enums allow you to give meaningful names to the values, making the code more readable and intention-revealing.


enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  
  let Move = Direction.Left;
  console.log(move);  // Output: "LEFT"

  // Heterogeneous enums

//Heterogeneous enums can mix numeric and string values, though their use is generally discouraged because they can be confusing.

// example

enum MixedEnum {
    No = 0,
    Yes = "YES"
  }
  
  let Answer: MixedEnum = MixedEnum.Yes;
  console.log(answer);  // Output: "YES"


  //Reverse Mapping

  enum direction {
    up,
    down,
    left,
    right
  }

  let ans : direction = direction.up;
  console.log(ans);  // Output:  0

  // but we can get the name of the enum value
  console.log(direction[ans]);  // Output: "up"     
  



