import './styles/add_edit_photo.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const AddPhoto = () => {

  const [onePhoto, setOnePhoto] = useState({
    photoTitle: '',
    photoNotes: '',
    photo: ''
  })

  const { photoTitle, photoNotes, photo } = onePhoto

  const navigate = useNavigate()

  const logout = (e) => {
    // TODO: User logout logic here (Mayur)
    navigate('/login')
  }

  const onChangeHandler = (e) => {
    setOnePhoto(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleImage = (e) => {
    // TODO: Image handler (Lauren)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // TODO: Finish form submission logic (Nick)
    // Axios POST request here
  }

  return (
    <div className="add-photo">
      <header>
        <h1>DroneBucket</h1>
          <div className="header-links">
            <Link to={'/'} className="btn btn-warning">Dashboard</Link>
            <button className="btn btn-secondary" onClick={logout}>Logout</button>
          </div>
      </header>

      <div className="photo-form">

        <form className="content-container" onSubmit={submitHandler}>
          <h2>Add Photo to Collection</h2>

          <div className="form-inputs">
            <div className="data">
              <div className="form-group">
                <label htmlFor="photoTitle">Photo Title:</label>
                <input type="text" className="form-control" name="photoTitle" onChange={onChangeHandler} value={photoTitle} />
              </div>

              <div className="form-group">
                <label htmlFor="photoNotes">Photo Notes:</label>
                <textarea className="form-control" name="photoNotes" onChange={onChangeHandler} value={photoNotes} />
              </div>

              <div className="form-group img-input">
                <label htmlFor="photo-upload">Photo:</label>
                <input type="file"
                accept="image/*"
                onChange={handleImage} />
              </div>
              <input type="submit" value="Submit Photo" className="btn btn-primary" />
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}

export default AddPhoto