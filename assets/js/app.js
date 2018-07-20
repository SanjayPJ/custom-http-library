
const http = new easyHTTP;

//get posts

http.get('https://jsonplaceholder.typicode.com/posts',function(error, response){
     if(error){
          console.log(error);
     }else{
          console.log(response);
     }
});

// get single post

http.get('https://jsonplaceholder.typicode.com/posts/1',function(error, response){
     if(error){
          console.log(error);
     }else{
          console.log(response);
     }
});

// create data

const data = {
     title: "Custom post 0",
     body: "This is the body of Custom post 0" 
}

// create post

http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response){
     if(error){
          console.log(error);
     }else{
          console.log(response);
     }
});

// update post

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response){
     if(error){
          console.log(error);
     }else{
          console.log(response);
     }
});

// delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(error, response){
     if(error){
          console.log(error);
     }else{
          console.log(response);
     }
});