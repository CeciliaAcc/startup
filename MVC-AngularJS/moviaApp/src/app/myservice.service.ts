import { Injectable } from '@angular/core';
import { Movies } from './models/movies';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  movieList: Movies[];

  constructor() { 
    this.movieList = [
      { id:1, tittle: 'Back to the Future I', year: 1985, duration: 116, description: 'Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean "time machine" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.' },
      { id:2, tittle: 'Back to the Future II', year: 1989, duration: 108, description: 'Marty McFly has only just gotten back from the past, when he is once again picked up by Dr. Emmett Brown and sent through time to the future. Martys job in the future is to pose as his own son to prevent him from being thrown in prison. Unfortunately, things get worse when the future changes the present.'},
      { id:3, tittle: 'Back to the Future III', year: 1990, duration: 118, description: 'Stranded in 1955, Marty McFly receives written word from his friend, Doctor Emmett Brown, as to where can be found the DeLorean time machine. However, an unfortunate discovery prompts Marty to go to his friends aid. Using the time machine, Marty travels to the old west where his friend has run afoul of a gang of thugs and has fallen in love with a local schoolteacher. Using the technology from the time, Marty and Emmett devise one last chance to send the two of them back to the future.' },

    ];
  }

  selectedMovie: Movies = new Movies();

  getMovies() {
    return this.movieList;
  }
  
  getMovieById(id: number){
    for (let movie of this.movieList){
      if (movie.id == id){
        this.selectedMovie = movie;
        return this.selectedMovie
      }
      else {

      }
    }
    
  }
  insertMovie(movie: Movies){
    var start_index = this.movieList.length;
    var number_of_elements_to_remove = 0;
    this.movieList.splice(start_index, number_of_elements_to_remove, movie);
    
    console.log("Adding movie id:", movie.id);
    console.log(this.movieList);

  }
  
  updateMovie(movie: Movies){ 
    var start_index = movie.id -1;
    console.log("start index ", start_index);
    var number_of_elements_to_remove = 1;
    this.movieList.splice(start_index, number_of_elements_to_remove, movie);
    console.log(this.movieList)
  }

  delete(movie: Movies){
    if( confirm("Are you sure you want to delete it?")){
      var start_index = movie.id -1;
      console.log("start index ", start_index);
      var number_of_elements_to_remove = 1;
      this.movieList.splice(start_index, number_of_elements_to_remove);
      
      console.log("deleting movie id:", movie.id);
      console.log(this.movieList);
      
    }
  }
  
}
