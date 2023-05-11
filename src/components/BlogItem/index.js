import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {item} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = item

  return (
    <Link className="blog-link-item" to={`/blogs/${id}`}>
      <li className="list-item">
        <div className="image-container">
          <img className="image" src={imageUrl} alt={title} />
        </div>
        <div className="topic-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img className="avatar" alt="avatar" src={avatarUrl} />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
