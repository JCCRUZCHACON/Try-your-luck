import './styles/QuoteBox.css';

const QuoteBox = ({handleChangeQuote, quote}) => {
    
  return (
    <section className='quoteBox'>
        <h1>Fortuna Cookies</h1>
        <section>
            <button className="button" onClick={handleChangeQuote}>TRY LUCK</button>
            <article>
                <p>
                    {quote.phrase}
                </p>
            </article>
        </section>
        <footer><h4>autor: {quote.author}</h4></footer>
    </section>
  )
}
export default QuoteBox