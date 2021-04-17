const Book = (props) => {
    const { image, title, author, link } = props;
  
    // const getAuthor = (author) => {
    //   alert(`${author}`)
    // }
  
    return (
      <article className='book'>
        
        <img src={image} alt='' />
        
        <h1>{title}</h1>
        
        <h4>{author}</h4>
  
        <button>
            <a href={link} rel='noreferrer' target='_blank'>Buy</a>
        </button>
  
      </article>
    )
  }

  export default Book;