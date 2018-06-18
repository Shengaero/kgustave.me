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
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return [
    <Helmet key="Helmet">
      <title>Not Found!</title>
    </Helmet>,
    <div className="page-title" key="PageTitle">
      <header>
        <h1>Uh Oh!</h1>
        <b>Looks like there's nothing here!</b>
        <p>
          <Link to="/">Go to home page</Link>
        </p>
      </header>
    </div>
  ];
}