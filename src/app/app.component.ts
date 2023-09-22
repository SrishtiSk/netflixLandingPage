import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class AppComponent implements OnInit, OnDestroy{
  sticky=false;
  subs: Subscription[]=[];
  trending!: Movies;
  popular!: Movies;
  toprated!:Movies;
  originals!:Movies;
  nowPlaying!:Movies;

  sliderConfig={
    slidersToShow:9,
    slidesToScroll:2,
    autoplay:false,
    across:true
  };

  @ViewChild('stickyheader') header!: ElementRef;
  
  headerBGurl!:string;

  constructor(private movie:MoviesService){}

  ngOnInit(): void {
    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      this.headerBGurl ='https://image.tmdb.org/t/p/original'+ this.trending.results![0].backdrop_path;
    }));
    this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.toprated = data));
    this.subs.push(this.movie.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));

  }
  ngOnDestroy(): void {
    this.subs.map(s=> s.unsubscribe());
  }

  //to check howmuch have we scrolled
 @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    this.sticky = (windowScroll >= this.header.nativeElement.offsetHeight) ? true:false;
    // if(windowScroll >= this.header.nativeElement.offsetHeight){
    //   this.sticky =true;
    // }
    // else{
    //   this.sticky =false;
    // }
  }


}


