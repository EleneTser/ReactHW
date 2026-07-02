import { useEffect, useState } from 'react'
import './App.css'
import type { IUser } from './interfaces'
import axios from "axios"

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  
  async function FetchUsers() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(res.data)
  }

  useEffect(() => {
    FetchUsers()
  }, [])

  const filteredUsers = users.filter(user => {
    let query = searchQuery.toLowerCase()
    return (
      user.name.toLowerCase().includes(query) || 
      user.username.toLowerCase().includes(query)
    )
  })

  return (
    <div className="directory-container">
      <h2 className="directory-title">User Directory</h2>
      
      <input
        type="text"
        placeholder="Search users by name or username..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"/>

      <div className="user-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <h3 className="user-name">{user.name}</h3>
            <div className="user-detail"> 
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
              <p>Company: {user.company.name}</p>
            </div>
          </div>
          ))
        ) : (
          <p className="no-results">No users found matching "{searchQuery}"</p>
        )}
      </div>
    </div>
  )
}

export default App