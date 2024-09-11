// npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'


const Profile = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile() 
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  if (!profile) { 
    return <main className={styles.container}><h1>🍕 Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      <article>
        <header>
          <span>
            <img src={profile.photo} alt="Profile Photo" />
            <h1> Welcome, {profile.name}!</h1>
          </span>
        </header>
        <br />
        {profile.isRestaurant ? (
          <div>
            <Link to="/restaurants/new"><i class="fa-solid fa-square-plus"></i> Add Restaurant</Link>
            <br />
            <br />
            <Link to="/dishes/new"><i class="fa-solid fa-square-plus"></i> Add Dish</Link>
          </div>
        ) : (
          null
        )}
      </article>
      <br />
      <br />
      <section>
        <h1>Favorite Dishes</h1>
      </section>
    </main>
  )
}

export default Profile
