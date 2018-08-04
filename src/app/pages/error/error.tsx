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
import { ReactElement } from 'react';
import { Page, PageProps, PageTitle } from '../pages';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const errorHeaders = [
  'Well, Shoot!',
  'Huh... This is awkward...',
  'Darn it Agna!',
  'Uh Oh!',
  'WHAT DID YOU DO!?!',
  '<i>Sigh.</i>',
  'This was part of the plan?',
  'Blame JavaScript.'
];

const generateErrorPageHeader = (): string => {
  return errorHeaders[Math.round(Math.random() * errorHeaders.length)]
};

type ErrorPageProps = {
  error: string;
  message: string;
  redirectHome?: boolean;
} & PageProps;

export default function ErrorPage(
  {
    error,
    message,
    redirectHome = true,
    children = undefined
  }: ErrorPageProps
): ReactElement<any> {
  return <Page>
    <Helmet>
      <title>{error}</title>
    </Helmet>
    <PageTitle className="page-title-without-body">
      <h1 dangerouslySetInnerHTML={{__html: generateErrorPageHeader()}}/>
      <b>{message}</b>
      {!redirectHome ? null : [
        <br key="newline"/>,
        <Link key="link" to="/">Go to home page</Link>
      ]}
    </PageTitle>
    {!children ? null : children}
  </Page>
}