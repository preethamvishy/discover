import { Component } from '@angular/core';
import { OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, Headers, Response } from '@angular/http';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { playlists } from './playlists';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  youTubeBase: string = 'https://www.youtube.com/embed/';
  youTubeParams: string = '&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=0&amp;wadsworth=1';
  targetUrl: string;

  constructor(private http: Http)
  {

  }

  ngOnInit() {
    this.youtubeWorkFlow();
  }

  youtubeWorkFlow()
  {
    var randomPlaylist = this.randomizer(playlists.length);
    var randomSongIndex = this.randomizer(playlists[randomPlaylist].max);
    this.setYouTubeUrl(randomPlaylist, randomSongIndex);
  }

  randomizer(num) {
    return Math.floor(Math.random() * num);
  }

  setYouTubeUrl(randomPlaylist, randomSongIndex)
  {
    this.targetUrl = this.youTubeBase + '?list=' + playlists[randomPlaylist].id + '&index=' + randomSongIndex + this.youTubeParams;
  }
  
  shuffle()
  {
    this.youtubeWorkFlow();
  }
}


