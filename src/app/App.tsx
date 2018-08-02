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
import Helmet from 'react-helmet';
import '../js/configureHLJS';
import SiteFooter from './components/SiteFooter';
import SiteNavBar from './components/SiteNavBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/error/NotFoundPage';
//import ProjectsPage from './pages/projects/ProjectsPage';
import register, { unregister } from '../js/registerServiceWorker';
import { ErrorInfo, ReactNodeArray } from 'react';
import InternalErrorPage from './pages/error/InternalErrorPage';
import { BrowserRouter } from 'react-router-dom';

export const mediaLinks: any = {
  github: "https://github.com/Shengaero",
  discord: "https://discordapp.com/invite/xkkw54u",
  linkedin: "https://www.linkedin.com/in/kaidan-gustave-905257165",
  patreon: "https://www.patreon.com/shengaero",
  twitter: "https://twitter.com/Shengaero"
};

const redirectFunction = (key: string) => (): any => {
  window.location = mediaLinks[key];
  return null;
};

function externalRedirects(): ReactNodeArray {
  return Object.keys(mediaLinks).map(key => {
    // TODO Possible redirecting page?
    return <Route key={key} exact path={'/' + key} component={redirectFunction(key)}/>
  });
}

export class App extends React.Component {
  componentWillMount() {
    console.debug('Mounting Application...');
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if(error.stack !== undefined) {
      sessionStorage['error.stack'] = error.stack;
    }

    // redirect to "/error/500"
    document.location.assign(document.location.origin + '/error/500');
  }

  render() {
    return <div className="app">
      <Helmet defaultTitle="Kaidan Gustave"/>
      <SiteNavBar tooltip={{show: 1000, hide: 0}}/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          {/* TODO <Route path="/projects" component={ProjectsPage}/> */}
          <Route exact path="/error/404" component={NotFoundPage}/>
          <Route exact path="/error/500" component={InternalErrorPage}/>

          {externalRedirects()}

          {/* Redirect from unknown route to "/404" */}
          <Redirect from="/**" to="/error/404"/>
        </Switch>
      </BrowserRouter>
      <SiteFooter year={new Date().getFullYear()}/>
    </div>;
  }
}

export default function launchApp() {
  ReactDOM.render(<App/>, document.getElementById('root'));
  register();
  window.onunload = unregister;
}
