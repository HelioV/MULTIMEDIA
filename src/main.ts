import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*
this.listGiff=
       [
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/l0Iy797ZhIvLhm0Io/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/X8mtsz8N5CBGv4WSgr/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/GCvktC0KFy9l6/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/yP6rlwwW7Rdu0/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},
        {url:'https://media.giphy.com/media/m2WQBH7DhSdgLfnTUi/giphy.gif'},

        
        ]


*/