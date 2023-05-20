import './styles/add_edit_photo.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const AddPhoto = () => {

  // State object for form data
  const [onePhoto, setOnePhoto] = useState({
    photoTitle: '',
    photoNotes: '',
    //! I initialized 'photo' as an empty string to avoid errors
    //! Can be changed here and in /server/models as needed
    photo: ''
  })

  const [errors, setErrors] = useState({})

  // Destructuring state object into individual variables
  const { photoTitle, photoNotes, photo } = onePhoto

  // navigate() function setup
  const navigate = useNavigate()

  // Logout Handler
  const logout = (e) => {
    // TODO: User logout logic here (Mayur)
    navigate('/login')
  }

  // Change handler for form data
  const onChangeHandler = (e) => {
    setOnePhoto(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  // Handler for photo to upload
  const handleImage = (e) => {
    // TODO: Image handler (Lauren)
  }

  // Submit handler for form
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(`http://172.18.67.234:800/api/newPhoto`, onePhoto)
      .then((response) => {
        // TODO: remove log before submitting project
        console.log(response.data)
        navigate('/')
      })
      .catch((error) => {
        setErrors(error.response.data.errors)
      })
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
                {
                  errors.photoTitle ? 
                    <span className="btn btn-primary">{errors.photoTitle.message}</span>
                      : null
                }
              </div>

              <div className="form-group">
                <label htmlFor="photoNotes">Photo Notes:</label>
                <textarea className="form-control" name="photoNotes" onChange={onChangeHandler} value={photoNotes} />
                {
                  errors.photoNotes ? 
                    <span className="btn btn-primary">{errors.photoNotes.message}</span>
                      : null
                }
              </div>

              <div className="form-group img-input">
                <label htmlFor="photo-upload">Photo:</label>
                <input type="file"
                accept="image/*"
                onChange={handleImage} />
              </div>
              <input type="submit" value="Submit Photo" className="btn btn-primary" />
              {
                  errors.photo ? 
                    <span className="btn btn-primary">{errors.photo.message}</span>
                      : null
              }
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}

export default AddPhoto