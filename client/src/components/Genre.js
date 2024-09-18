import React from 'react';


const Genre = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="dropdown">
          <a href="#">Genres of Books</a>
          <ul className="dropdown-menu">
            <li><a href="#">What is the Genre of a Book?</a></li>
            <li><a href="#">Sub-genre Definition</a></li>
            <li><a href="#">Types of Book Genres</a></li>
            <li><a href="#">Different Genres of Books</a></li>
            <li><a href="#">Most Popular Book Genres</a></li>
            <li><a href="#">List of Book Genres</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Genre;
