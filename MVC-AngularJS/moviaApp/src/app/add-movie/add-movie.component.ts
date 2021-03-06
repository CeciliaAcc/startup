import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Movies } from '../models/movies';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  selectedMovie: Movies = new Movies();
  movie: Movies = new Movies();
  public movieId : number;
  private sub: any;

  constructor(private route: ActivatedRoute ,private movieService: MyserviceService) { }

  ngOnInit() {

  }

  onSubmitAdd(movieFormAdd: NgForm)
  {
      movieFormAdd.value.id = this.movieService.movieList.length + 1;
      this.movieService.insertMovie(movieFormAdd.value);
  }

}

