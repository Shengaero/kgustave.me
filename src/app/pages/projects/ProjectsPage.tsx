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
import { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router';
import KotlinJSONProjectPage from './KotlinJSONProjectPage';
import Helmet from 'react-helmet';
import { Page, PageName, PageTitle } from '../pages';
import '../../../scss/projects.css'

export default class ProjectsPage extends Component {
  render() {
    return <Switch>
      {/* Main Projects Page */}
      <Route exact path="/projects">
        {/* TODO Projects page */}
        <Page className="projects">
          <Helmet>
            <title>Projects</title>
            <meta property="og:title" content="Projects"/>
          </Helmet>
          <PageTitle>
            <PageName>Projects</PageName>
            <b>
              Various open-source projects I've contributed to.
            </b>
          </PageTitle>
        </Page>
      </Route>

      {/* Kotlin JSON Project Page */}
      <Route exact path="/projects/json" component={KotlinJSONProjectPage}/>

      {/* Redirect from non-registered "/projects/<sub-route>" to "/404" */}
      <Redirect from="/projects/**" to="/404"/>
    </Switch>;
  }
}
