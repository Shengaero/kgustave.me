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
import { ReactNode } from 'react';
import '../../scss/app.css';
import '../../scss/home.css';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';
import { mediaLinks } from '../App';
import * as ReactMarkdown from 'react-markdown';
import '../../docs/about-me.md';
import { Page, PageTitle } from './pages';

const aboutMe = require('../../docs/about-me.md');

function MediaButton(props: { color: string | any, href: string, type: string }) {
  const style = {
    backgroundColor: props.color,
    borderWidth: '2px'
  };

  return <Button className="btn-lg" style={style} href={props.href}>
    <b className={'fab fa-' + props.type.toLowerCase()}/> {props.type}
  </Button>;
}

class HomePage extends React.Component<any, { markdown: string | null }> {
  constructor(props: any) {
    super(props);
    this.componentWillMount = this.componentWillMount.call(this);
    this.state = {markdown: null};
  }

  componentWillMount() {
    fetch(aboutMe)
      .then(response => response.text())
      .then(text => {
        console.debug('Fetched', aboutMe);
        this.setState({markdown: text});
      })
      .catch(() => console.error(`Failed to fetch ${aboutMe}`));
  }

  render(): ReactNode {
    return <Page>
      <Helmet>
        <title>Kaidan Gustave</title>
        <meta name="og:title" content="Kaidan Gustave"/>
        <meta name="og:description" content="Kotlin and Java developer."/>
        {/* TODO og:image */}
        <meta name="og:url" content={document.location.href}/>
      </Helmet>

      <PageTitle>
        <header>
          <h1 className="page-name">Kaidan Gustave</h1>
          <MediaButton color={'#000000'} type="GitHub" href={mediaLinks.github}/>
          <MediaButton color={'#7289DA'} type="Discord" href={mediaLinks.discord}/>
          <MediaButton color={'#0077B5'} type="LinkedIn" href={mediaLinks.linkedin}/>
          <MediaButton color={'#f96854'} type="Patreon" href={mediaLinks.patreon}/>
          <MediaButton color={'#1da1f2'} type="Twitter" href={mediaLinks.twitter}/>
        </header>
      </PageTitle>

      <div className="about-me">
        <h1>About Me</h1>
        <div className="about-me-content">
          <ReactMarkdown source={this.state.markdown} escapeHtml={false}/>
        </div>
      </div>
    </Page>;
  }
}

export default HomePage;
