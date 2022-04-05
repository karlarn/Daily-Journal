export const getJournalEntries = () => {
     return fetch("http://localhost:8088/journal?_expand=user&_sort=date&_order=desc")
     .then(response => response.json())   
      }
    

    export const createPost = postObj => {
        return fetch("http://localhost:8088/journal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
            .then(response => response.json())
      }

      export const deletePost = postId => {
        return fetch(`http://localhost:8088/journal/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
      
        })
            .then(response => response.json())
            
      }

      export const getSinglePost = (postId) => {
        return fetch(`http://localhost:8088/journal/${postId}`)
          .then(response => response.json())
      }

      export const updatePost = postObj => {
        return fetch(`http://localhost:8088/journal/${postObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
            .then(response => response.json())
            
      }

      let loggedInUser = {}
    
    
    export const getLoggedInUser = () => {
        return loggedInUser;
    }

      export const logoutUser = () => {
        loggedInUser = {}
      }

      export const setLoggedInUser= (userObj) => {
        loggedInUser = userObj;
      }


      export const loginUser = (userObj) => {
        return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
        .then(response => response.json())
        .then(parsedUser => {
          //is there a user?
          console.log("parsedUser", parsedUser) //data is returned as an array
          if (parsedUser.length > 0){
            setLoggedInUser(parsedUser[0]);
            return getLoggedInUser();
          }else {
            //no user
            return false;
          }
        })
      }

      export const registerUser = (userObj) => {
        return fetch(`http://localhost:8088/users`, {
          method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(response => response.json())
        .then(parsedUser => {
          setLoggedInUser(parsedUser);
          return getLoggedInUser();
        })
      }

      