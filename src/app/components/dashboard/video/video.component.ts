import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer) {
   }
    /**Métpdp que pasa url de video y genera una url para incrustarla con DomSanitizer
   * @param { string } url  -  link del video
   * @returns url de video listo para incrustar
   */
   getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}


  ngOnInit() {
  }

}
