    // Array-based approach
const streamReducer = (state=[], action) => {
    switch(action.type) {
        case EDIT_STREAM:
            return state.map(stream => {
                if(stream.id === action.payload.id) {
                return action.payload;   
                } else {
                    return stream;
                }
            });
        default:
           return state;
    }

};

// Object-based approach
const streamReducer = (state={}, action) => {
    switch(action.type) {
        case EDIT_STREAM:
          //  const newState = {...state};
          //  newState[action.payload.id] = action.payload;
          //  return newState;
          
          // identical approach
         
          // good approach
          return {...state, [action.payload.id]: action.payload };
            default:
            return state;
    }
};


// example to add element to array with new index


const animalSounds = {cat: 'meow', dog: 'bark' };
const animal = 'lion';
const sound = 'roar';
{...animalSounds, [animal]: sound}