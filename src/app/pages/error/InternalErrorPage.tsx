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
import { Redirect } from 'react-router';
import ErrorPage from './error';

interface ErrorState {
  stack?: string
}

class InternalErrorPage extends React.Component<any, ErrorState> {
  componentWillMount() {
    const stack = sessionStorage['error.stack'];
    if(stack !== undefined) {
      console.error(stack);
      this.setState({
        stack: stack
      });
    }
  }

  componentDidMount() {
    sessionStorage.removeItem('error.stack');
  }

  render() {
    if(!this.state || !this.state.stack) {
      // Loopback to "/error/404" if we're coming here without a reason.
      return <Redirect from="/error/500" to="/error/404"/>
    }

    return <ErrorPage
      redirectHome={false} error="Internal Error!"
      message="Looks like something broke back here!"
    />;
  }
}

export default InternalErrorPage;

