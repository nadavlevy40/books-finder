import {React,useState} from 'react';
import axios from "axios";
import Popup from "./Popup";


function Search(){
    const [searchInput, setSearchInput] = useState('');
    const [books, setBooks] = useState({ items: [] });
    

    // const[book,setBook]=React.useState('');
    // const[result,setResult]=React.useState([]);

    function handleImgClicked(){

    }

    function handleChange(event){
            const book=event.target.value;
            setSearchInput(book);
        }
        
        let API_URL = `https://www.googleapis.com/books/v1/volumes`;
        const fetchBooks = async () => {
            const result = await axios.get(`${API_URL}?q=${searchInput}&maxResults=20`);
            setBooks(result.data);
            console.log(result.data);
          };

        
           
        
         function onSubmitHandler(event){
            event.preventDefault();
            fetchBooks();
          };




        
       const name=localStorage.getItem("username");
     
    
        return (
        <section>
            <h1>welcome {name}</h1>
              <form onSubmit={onSubmitHandler}>
                <label>
                  <span>Search for books</span>
                  <input
                    type="text"
                    value={searchInput}
                    onChange={handleChange}
                  />
                  <button type="submit">Search</button>
                </label>
              </form>
              <ul style={{ listStyle: 'none' }}>
                {books.items.map((book, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <img
                           alt="book"
                           src={book.volumeInfo.imageLinks.thumbnail}
                        //   //alt={`${book.volumeInfo.title} book`}
                        //   //src={`http://books.google.com/books/content?id=${
                        //     //book.id
                        //   }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        />
                        <Popup authors={book.volumeInfo.authors}
                        categorys={book.volumeInfo.categories}
                        bookTitle={book.volumeInfo.title}
                        text="Hello there!" />
                        
                        <div>
                          <h3>{book.volumeInfo.title}</h3>
                          <p>{book.volumeInfo.publishedDate}</p>
                        </div>
                      </div>
                      <hr />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        };

//     <section>
//     <h2>Book Search</h2>
//     <input type="text" onChange={handleChange} value={searchInput}placeholder="Search for books"/>
//     <button  onClick={handleClick}>Search</button>
//    {books.map((book, i)=>{
//               return <img key={i} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
             
//    })}
//     </section>
//     );  
// }

export default Search;