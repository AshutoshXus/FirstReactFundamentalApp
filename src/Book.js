const Book = ({ image, title, author, index }) => {
  //console.log(props)
  return (
    <article className="book">
      <img src={image} alt="Happy Place" className="book_img" />
      <h2 className="book_h2">{title}</h2>
      <h4 className="book_h4"> {author}</h4>
      <span className="number">{`# ${index + 1}`}</span>
    </article>
  )
}

export default Book
