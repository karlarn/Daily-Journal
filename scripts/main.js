import { EntryListComponent, journalEntryForm } from "./journalentrylists.js";
import { setLoggedInUser, registerUser, loginUser, createPost, getSinglePost, deletePost, updatePost, logoutUser, getLoggedInUser } from "./journaldata.js";
import { PostEdit, cancelEdit } from "./journalentry.js"
import { dateFormat } from "./helper.js"
import { LoginForm, RegisterForm } from "./LoginForms.js"


// EntryListComponent()

document.querySelector("main").addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "savebtn") {
	//collect the input values into an object to post to the DB
	  const concepts = document.querySelector("#concepts").value
	  const date = dateFormat(new Date())
	  const description = document.querySelector("#text").value
      const mood = document.querySelector("#moodinput").value
	  const userId=getLoggedInUser().id
	  //we have not created a user yet - for now, we will hard code `1`.
	  const postObject = {
		  date: date,
		  concept: concepts,
		  entry: description,
		  mood: mood,
		  userId: userId
	  }
		createPost(postObject)
		.then(()=>{
			document.querySelector('.entries').innerHTML = ``
			document.querySelector("#concepts").value=''
	  		document.querySelector("#text").value=''
			EntryListComponent()
		})
    }

	})


	document.querySelector("aside").addEventListener("click", event => {
		event.preventDefault();
		if (event.target.id.startsWith("delete")) {
		  const postId = event.target.id.split("__")[1];
		  deletePost(postId)
			.then(response => {
				document.querySelector('.entries').innerHTML = ``
				EntryListComponent();
			})
		}
	  })


	  document.querySelector("aside").addEventListener("click", event => {
		event.preventDefault();
		if (event.target.id.startsWith("edit")) {
		  const postId = event.target.id.split("__")[1];
		  getSinglePost(postId)
			.then(response => {
			  showEdit(response);
			})
		}
	  })


	  const showEdit = (postObj) => {
		const entryElement = document.querySelector("main");
		entryElement.innerHTML = PostEdit(postObj);
	  }

	  document.querySelector("main").addEventListener("click", event => {
		event.preventDefault();
		if (event.target.id.startsWith("updatePost")) {
		  const postId = event.target.id.split("__")[1];
		  //collect all the details into an object
		  const date= document.querySelector("input[name='postTime']").value
		  const concept = document.querySelector("#concepts").value
		  const entry = document.querySelector("#text").value
		  const mood = document.querySelector("input[name='postMood']").value
		  
		  const postObject = {
			date: date,
			concept: concept,
			entry: entry,
			mood: mood,
			id: postId
		  }
		  
		  updatePost(postObject)
			.then(response => {
				document.querySelector('.entries').innerHTML = ``
				document.querySelector("#concepts").value=''
	  		document.querySelector("#text").value=''
			  EntryListComponent();
			})
		}
	  })


	  document.querySelector("main").addEventListener("click", event => {
		event.preventDefault();
		if (event.target.id === "newPost__cancel") {
			document.querySelector("main").innerHTML=cancelEdit()
		}

	    })

		document.querySelector("header").addEventListener("click", event => {
			if (event.target.id === "logout") {
			  logoutUser();
			  console.log(getLoggedInUser());
			  sessionStorage.clear();
			  checkForUser();
			  document.querySelector(".entries").innerHTML = ""
			}
		  })

		  const checkForUser = () => {
			if (sessionStorage.getItem("user")){
			  setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
			  EntryListComponent()
			  journalEntryForm()
			}else {
				showLoginRegister()
			  console.log("showLogin")
			}
		  }

		  const showLoginRegister = () => {
			
			const entryElement = document.querySelector(".entryForm");
			//template strings can be used here too
			entryElement.innerHTML = `${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
			//make sure the post list is cleared out too
		  const postElement = document.querySelector("main");
		  postElement.innerHTML = "";
		  }

		  checkForUser()


		  document.querySelector("header").addEventListener("click", event => {
			event.preventDefault();
			if (event.target.id === "login__submit") {
			  //collect all the details into an object
			  const userObject = {
				name: document.querySelector("input[name='name']").value,
				email: document.querySelector("input[name='email']").value
			  }
			  loginUser(userObject)
			  .then(dbUserObj => {
				if(dbUserObj){
				  sessionStorage.setItem("user", JSON.stringify(dbUserObj));
				  document.querySelector(".entryForm").innerHTML=''
				  EntryListComponent()
				  journalEntryForm()
				}else {
				  //got a false value - no user
				  const entryElement = document.querySelector(".entryForm");
				  entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
				}
			  })
			}
		  })


		  document.querySelector("header").addEventListener("click", event => {
			event.preventDefault();
			if (event.target.id === "register__submit") {
			  //collect all the details into an object
			  const userObject = {
				name: document.querySelector("input[name='registerName']").value,
				email: document.querySelector("input[name='registerEmail']").value
			  }
			  registerUser(userObject)
			  .then(dbUserObj => {
				sessionStorage.setItem("user", JSON.stringify(dbUserObj));
				document.querySelector(".entryForm").innerHTML=''
				EntryListComponent();
				  journalEntryForm()
			  })
			}
		  })