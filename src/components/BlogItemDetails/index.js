import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      title: data.title,
      content: data.content,
      author: data.author,
    }
    this.setState({
      blogDetails: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetails
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="bd-container">
            <h1 className="bd-title">{title}</h1>
            <div className="bd-avatar-container">
              <img className="bd-avatar" src={avatarUrl} alt="avatar" />
              <p className="bd-author">{author}</p>
            </div>
            <div className="bd-img-container">
              <img className="bg-img" alt={title} src={imageUrl} />
            </div>
            <p className="bd-content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
