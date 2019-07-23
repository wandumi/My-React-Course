import React, { Component } from 'react';

import { getMovies } from '../services/fakeMovieService';

class movies extends Component {
    state = { 
        movies: getMovies()
     };

     handleDelete = movie => {
        // console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies });
     };

    render() { 
       
        const {length: count} = this.state.movies;

        if(count === 0) 
          return <p>There is no movies in the database</p>;

        return (
        
        <main className="col-10 pt-5 m-auto"> 
        <h2 style={{ fontWeight: "bold", textAlign: "center" }}>Showing {count} movies in the database</h2>
        <table className="table table-striped mt-5">
            <thead>
                <tr >
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { this.state.movies.map( movie => 
                     <tr key = {movie._id}>
                        <td>{ movie.title}</td>
                        <td>{ movie.genre.name}</td>
                        <td>{ movie.numberInStock}</td>
                        <td>{ movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={() => this.handleDelete(movie) } className="btn btn-danger btn-sm">
                                Delete
                            </button>
                        </td>
                    </tr>
                )}
               
            </tbody>
        </table>
        </main>
        )
    }
}
 
export default movies;