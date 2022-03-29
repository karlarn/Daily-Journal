import { EntryListComponent } from "./journalentrylists.js";
import { createPost, getSinglePost, deletePost, updatePost } from "./journaldata.js";
import { JournalEntryComponent, PostEdit } from "./journalentry.js"
import { dateFormat } from "./helper.js"


EntryListComponent()

document.querySelector("main").addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "savebtn") {
	//collect the input values into an object to post to the DB
	  const concepts = document.querySelector("#concepts").value
	  const date = dateFormat(new Date())
	  const description = document.querySelector("#text").value
      const mood = document.querySelector("#moodinput").value
	  //we have not created a user yet - for now, we will hard code `1`.
	  const postObject = {
		  date: date,
		  concept: concepts,
		  entry: description,
		  mood: mood
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


