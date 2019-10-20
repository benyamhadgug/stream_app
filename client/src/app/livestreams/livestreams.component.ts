import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import axios from "axios";
import { Observable } from 'rxjs';
import config from './../../config/default';

@Component({
  selector: 'app-livestreams',
  templateUrl: './livestreams.component.html',
  styleUrls: ['./livestreams.component.css']
})
export class LivestreamsComponent implements OnInit , OnChanges, AfterContentChecked {

  stream$: Observable<any>;
  _state
  constructor() {
    
   }

  ngOnInit() {
    this._state = {
      live_streams: []
    }
    
    this.getLiveStreams();

  }

  ngAfterContentChecked(){
    this.stream$ =this._state.live_streams;

  }

  ngOnChanges() {
    
  }
  getLiveStreams() {
    axios.get('http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams')
        .then(res => {
            let streams = res.data;
            console.log(`res data:`, streams['live']);
            if (typeof (streams['live'] !== 'undefined')) {
                this.getStreamsInfo(streams['live']);
            }
        });
  }
  getStreamsInfo(live_streams) {
    axios.get('http://127.0.0.1:3333/api/streams/info/', {
      // axios.get('http://127.0.0.1:' + config.rtmp_server.http.port  + '/streams', {

        params: {
            streams: live_streams
        }
    }).then(function(res){
      console.log(`state red data`,res.data);

          this._state = {
            live_streams: res.data
          };
                  // live_streams: res.data
        }, () => {
            console.log(`state`,this._state);
        });
  }
  
  setState(lv:[]){
    this._state = {
      live_streams: lv
    };
  }
 
}
