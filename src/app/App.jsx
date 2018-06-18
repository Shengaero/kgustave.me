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
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../js/configureHLJS';
import registerServiceWorker, { unregister } from '../js/registerServiceWorker';
import SiteFooter from './components/SiteFooter';
import SiteNavBar from './components/SiteNavBar';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import KotlinJSONProjectPage from './pages/projects/KotlinJSONProjectPage';
import ProjectsPage from './pages/projects/ProjectsPage';

function App() {
  return [
    <SiteNavBar key="NavBar"/>,
    <BrowserRouter key="Router">
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/projects" component={ProjectsPage}/>
        <Route exact path="/projects/json" component={KotlinJSONProjectPage}/>

        <Route path="/**" component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>,
    <SiteFooter key="Footer"/>
  ];
}

export default function launchApp() {
  ReactDOM.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
  window.addEventListener('close', function() {
    unregister();
  });
};