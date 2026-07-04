import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faLink, faBuilding, faSun, faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import type { GitHubUser } from './GithubUsers'
import axios from 'axios'

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('octocat')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  const [user, setUser] = useState<GitHubUser | null>(null)

  useEffect(() => {
    async function FetchUserData() {
      try {
        setHasError(false)
        const res = await axios.get<GitHubUser>(`https://api.github.com/users/${searchQuery}`)
        setUser(res.data)
      } catch (err) {
        setHasError(true)
      }
    }

    FetchUserData()
  }, [searchQuery])

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme'
  }, [isDarkMode])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const targetUser = inputValue.trim() || 'octocat'
    setSearchQuery(targetUser)
  }

  return (
    <main className="container">
      <header className="header">
        <h1 className="logo">devfinder</h1>
        <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'LIGHT' : 'DARK'}
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </header>

      <form onSubmit={handleSearchSubmit} className="search">
        <div className="input-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search GitHub username..."
            className="search-input"
          />
        </div>

        {hasError && <span className="error">No results</span>}
        <button type="submit" className="searchbtn">Search</button>
      </form>

      {user && (
        <div className="profile-card">
          <div className="avatar">
            <img src={user.avatar_url} alt={user.login} />
          </div>

          <div className="profile-content">
            <div className="profile-header">
              <div>
                <h2>{user.name || user.login}</h2>
                <p className="username">@{user.login}</p>
              </div>
              <time className="profile-joined">
                Joined {new Date(user.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
              </time>
            </div>

            <p className={`profile-bio ${!user.bio ? 'is-empty' : ''}`}>
              {user.bio || 'This profile has no bio'}
            </p>

            <div className="stats">
              <div className="stat-item">
                <span className="stat-label">Repos</span>
                <span className="stat-value">{user.public_repos}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Followers</span>
                <span className="stat-value">{user.followers}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Following</span>
                <span className="stat-value">{user.following}</span>
              </div>
            </div>

            <div className="profile-links">
              <div className={`link-item ${!user.location ? 'disabled' : ''}`}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{user.location || 'Not Available'}</span>
              </div>

              <div className={`link-item ${!user.twitter_username ? 'disabled' : ''}`}>
                <FontAwesomeIcon icon={faTwitter} />
                <span>{user.twitter_username ? `@${user.twitter_username}` : 'Not Available'}</span>
              </div>

              {user.blog ? (
                <a
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item"
                >
                  <FontAwesomeIcon icon={faLink} />
                  <span>{user.blog}</span>
                </a>
              ) : (
                <div className="link-item disabled">
                  <FontAwesomeIcon icon={faLink} />
                  <span>Not Available</span>
                </div>
              )}

              <div className={`link-item ${!user.company ? 'disabled' : ''}`}>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user.company || 'Not Available'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App