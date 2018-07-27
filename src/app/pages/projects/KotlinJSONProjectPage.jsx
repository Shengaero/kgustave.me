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
import renderJson from '../../../js/renderJson';
import JSONLogo from '../../../logo/json-logo.svg';
import KotlinLogo from '../../../logo/kotlin-logo.svg';
import '../../../scss/app.css';
import '../../../scss/kotlin-json-project.css';
import CodeBlock from '../../components/CodeBlock';
import Helmet from 'react-helmet';

function JsonExample({ indent = 4, json }) {
  return <CodeBlock language="kotlin" content={renderJson(indent, json)}/>
}

export default function KotlinJSONProjectPage() {
  return <div className="page">
    <Helmet>
    </Helmet>
    <div className="page-title">
      <header>
        <h1 className="page-name">Kotlin JSON</h1>
        <h1 className="kotlin-json-visual">
          <img className="kotlin-logo" src={KotlinLogo} alt="Kotlin"/>
          <b className="kotlin-json-visual-text"> + </b>
          <img className="json-logo" src={JSONLogo} alt="JSON"/>
        </h1>
      </header>
    </div>
    <div>
      <div>
        <JsonExample json={
          {
            address: '123 JSON Lane',
            tenants: [
              {
                name: 'Mark',
                age: 25
              },
              {
                name: 'Helen',
                age: 23
              }
            ]
          }
        }/>
      </div>
    </div>
  </div>;
}
