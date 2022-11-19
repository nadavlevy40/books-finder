import {React,useState} from 'react';
import axios from "axios";
import Popup from "./Popup";

function Search(){
    const [searchInput, setSearchInput] = useState("");
    const [books, setBooks] = useState({ items: [] });
    
    function handleChange(event){
            const input=event.target.value;
    
            setSearchInput(input);   
        }

        let API_URL = `https://www.googleapis.com/books/v1/volumes`;
        const fetchBooks = async () => {
            const result = await axios.get(`${API_URL}?q=${searchInput}&maxResults=20`);
            console.log(result);
            setBooks(result.data);

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
                      <div>
                        <img
                           alt="book"
                            
                           src={`http://books.google.com/books/content?id=${
                    book.id
                  }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        />
                        <Popup authors={book.volumeInfo.authors}
                        categorys={book.volumeInfo.categories}
                        bookTitle={book.volumeInfo.title}
                        text="Hello there!" />
                        </div>
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

export default Search;