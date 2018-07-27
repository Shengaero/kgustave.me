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
import * as hljs from 'highlight.js';
import 'highlight.js/styles/atelier-lakeside-dark.css';

export default function CodeBlock({ language, content }) {
  const detected = hljs.getLanguage(language.toLowerCase());
  if(detected === undefined) {
    throw new Error(`Cannot find language with name "${language}"!`)
  }
  return <pre className="code-block-container">
    <code className={"code-block " + language.toLowerCase()}>
      {content}
    </code>
  </pre>;
}
