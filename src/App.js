// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('/movies')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <ul>
//       {posts.map(post => (
//         <li key={post._id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("/movies")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      Found  {users.length}  movies:
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;