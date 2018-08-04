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
import { ReactChild, ReactChildren, ReactNodeArray } from 'react';

function mergeClassNames(def: string, provided: string): string {
  if(def === provided) {
    return def;
  }
  if(!provided.startsWith(' ')) {
    provided = ' ' + provided;
  }
  return def + provided;
}

export type BasicProps = {
  className?: string;
  children?: ReactChild | ReactChildren | ReactNodeArray | never[];
};

export type PageProps = {} & BasicProps;

export const Page = ({children, className = 'page'}: BasicProps) => {
  return <div className={mergeClassNames('page', className)}>{!children ? null : children}</div>;
};

export const PageTitle = ({children, className = 'page-title'}: BasicProps) => {
  return <div className={mergeClassNames('page-title', className)}>
    <header>{!children ? null : children}</header>
  </div>;
};

export const PageName = ({children, className = 'page-name'}: BasicProps) => {
  return <h1 className={mergeClassNames('page-name', className)}>{children}</h1>;
};

export const PageBody = ({children, className = 'page-body'}: BasicProps) => {
  return <div className={mergeClassNames('page-body', className)}>{!children ? null : children}</div>;
};
