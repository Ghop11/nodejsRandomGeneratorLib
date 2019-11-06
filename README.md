# nodejsRandomLib

This library returns random results: 


# What can be randomized: 
- Number
- Array
- Object
- Character from a String
- Bonus*** Shuffle



# Numbers
``` 
instance.number(min = 0, max = 1)
Randomly picks a number between the min and max. 
The min defaults to 0 and the max defaults to 1 if a value is not entered

ex: instance.number(0,5) // Returns between 0-5
returns 4
```

# Array
``` 
instance.array(arr = [])
Returns a random element in an array. 
This will return as a string

ex:
let test = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
instance.array(test) // returns random string value 
returns 'C'
```

# Object
``` 
instance.object(obj = {})
Returns a random key and value pair. 
This will return as an obect

ex: instance.object({test: 'data', test2: 'data2', test3: 'data3'}) // returns a random key value pair 
returns = {test2: 'data2'}
```

# Character
``` 
instance.character(string = "")
Returns a random character from a string

ex: instance.character('Hello') // returns a random character
returns 'e'
```

# Shuffle
``` 
instance.shuffle(array = [])
Must be an array
Rearrange  the array in a random order
Returns the rearrange  array

ex:
let test = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
instance.shuffle(test) // rearranges array
returns ['G', 'H', 'B', 'F', 'C', 'D', 'E', 'A']
```






