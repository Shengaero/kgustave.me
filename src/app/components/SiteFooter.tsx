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
import '../../scss/app.css';

type SiteFooterProps = { year: number }

const license = 'https://github.com/Shengaero/kgustave.me/blob/master/LICENSE';

export default function SiteFooter(props: SiteFooterProps) {
  return <div className="site-footer">
    <footer>
      <a href={license}><b className="fas fa-copyright"/> {props.year} Kaidan Gustave</a>
    </footer>
  </div>;
}
