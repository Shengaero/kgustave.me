/*
 * Copyright 2018 Kaidan Gustave
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import '../js/configureHLJS';
import SiteFooter from './components/SiteFooter';
import SiteNavBar from './components/SiteNavBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import {
  register as registerServiceWorker,
  unregister as unregisterServiceWorker
} from '../js/registerServiceWorker';

export const mediaLinks: any = {
  github: "https://github.com/Shengaero",
  discord: "https://discordapp.com/invite/xkkw54u",
  linkedin: "https://www.linkedin.com/in/kaidan-gustave-905257165",
  patreon: "https://www.patreon.com/shengaero",
  twitter: "https://twitter.com/Shengaero"
};

function App() {
  return <div className="app">
    <Helmet defaultTitle="Kaidan Gustave"/>
    <SiteNavBar tooltip={{show: 1000, hide: 0}}/>
    <BrowserRouter>
      <Switch>
        {/* Redirect from no-path to "/home" */}
        <Redirect exact from="/" to="/home"/>

        <Route exact path="/home" component={HomePage}/>
        <Route path="/projects" component={ProjectsPage}/>
        <Route exact path="/404" component={NotFoundPage}/>

        {Object.keys(mediaLinks).map((key) => {
          return <Route key={key} exact path={'/' + key} component={(): any => {
            window.location = mediaLinks[key];
            return null;
          }}/>
        })}

        {/* Redirect from unknown route to "/404" */}
        <Redirect from="/**" to="/404"/>
      </Switch>
    </BrowserRouter>
    <SiteFooter/>
  </div>;
}

export default function launchApp() {
  ReactDOM.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
  window.addEventListener('unload', function() {
    unregisterServiceWorker();
  });
}
