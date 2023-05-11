import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedList = data.map(object => ({
      author: object.author,
      avatarUrl: object.avatar_url,
      id: object.id,
      imageUrl: object.image_url,
      title: object.title,
      topic: object.topic,
    }))
    this.setState({
      blogList: updatedList,
      isLoading: false,
    })
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blog-list-container">
            {blogList.map(object => (
              <BlogItem key={object.id} item={object} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
