import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Movies } from '../models/movies';


const enum endpoint{
  latest = '/movies/latest',
  nowPlaying = '/movie/now_playing',
  popular = '/movie/popular',
  trending = '/trending/all/week',
  upcoming = '/movie/upcoming',
  top_rated = '/movie/top_rated',
  originals = '/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private URL = 'https://api.themoviedb.org/3';
  private api_key = environment.api;

  constructor(private http:HttpClient) { 
  }

  getLatestMovie(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}`,
     { params:{ 
        api_key:this.api_key
     }
     });
  }
  
  getNowPlaying(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.nowPlaying}`,
    {
      params:{ api_key: this.api_key}
    });
  }

  getOriginals(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`,
    {
      params:{ api_key: this.api_key}
    });
  }

  getPopularMovies(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`,
    {
      params:{ api_key: this.api_key}
    });
  }

  getTopRated(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`,
    {
      params:{ api_key: this.api_key}
    });
  }

  getTrending(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`,
    {
      params:{ api_key: this.api_key}
    });
  }

}
