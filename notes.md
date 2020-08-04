# BoilerPlate and step by Step for using useContext, and useReducer

## BoilerPlate

### Create the structure folder

You can create a Context folder where all your data should be. You can create a subfolder to multiples context,
in each subfolder context you will need three files. _Context.js, Reducer.js, State.js_

```
 📦src
┣ 📂components
┃ ┗ 📂tasks
┃ ┃ ┣ 📜ListOfTasks.js
┃ ┃ ┣ 📜Task.js
┃ ┃ ┗ 📜TaskForm.js
┣ 📂context
┃ ┣ 📂project
┃ ┃ ┣ 📜projectContext.js
┃ ┃ ┣ 📜projectReducer.js
┃ ┃ ┗ 📜ProjectState.js
┃ ┗ 📂tasks
┃ ┃ ┣ 📜TaskContext.js
┃ ┃ ┣ 📜TaskReducer.js
┃ ┃ ┗ 📜TaskState.js
┣ 📂types
┃ ┗ 📜index.js
┣ 📜App.js
┣ 📜index.css
┣ 📜index.js
┣ 📜serviceWorker.js
┗ 📜setupTests.js

```

### NameContext.js

```
import {createContext} from 'react';

const NameContext = createContext();

export default NameContext;
```

### NameReducer.js

```

export default (state,action) => {
  switch(action.type) {


    default:
    return state;
  }
}
```

In this file we need to put de types, but we can adding later

### NameState.js

in this file we need import de two files above _NameContext,NameReducer_

```
import React, {useReducer} from 'react';
import NameContext from './NameContext';
import NameReducer from './NameReducer';

const NameState = (props) => {
  //first create te initial sta that always going to be an object
  const initialState = {
  // all the variables, or data required
  }

  // Second, create the dispatch and state. Previously import useReducer that take 2 params, ** the reducer and the initialState**
  const [state, dispatch] = useReducer(NameReducer, initialState);

//in this section goes the functions that passes trow provider value below


  and Third
  return (
    <NameContext.Provider value{{
      constExample: state.constExample
    }}>
    {props.children}
    </NameContext.Provider>
  )
}

export default NameState;
```

### The type file.

in this file you would create the type or name of de function of the reducer. For convention this would be all in uppercase. for each function, you have to do a line like the following:

`export const FORM_PROJECT = "FORM_PROJECT";`

and this file should be imported by de NameContext and the NameReducer. Something like this:
`import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, SHOW_ERROR_FORM, SELECT_PROJECT, DELETE_PROJECT, } from "../../types";`

### Import the Sate in the app

<NameState>
  //your app
</NameState>

## Steps to used

1.- add a type in the type file.
e.g., export const DELETE_TASK = "DELETE_TASK"
