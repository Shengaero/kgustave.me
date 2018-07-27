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

// This util is used to correctly render
//JSON for the kotlin-json project page.

const initialObject = 'JSObject {';
const initialArray = 'JSArray(';

const isArrayType = (value: any) => value.constructor === Array;

function isValidBottomType(object: any) {
  const objType = typeof object;
  return object === null || objType === typeof 'string' || objType === typeof true || objType === typeof 0;
}

function indentOf(factor: number, indent: number) {
  if(indent === 0) {
    return '';
  }
  return '\n' + ''.padEnd(factor * indent, ' ');
}

export function renderValue(value: any, indent = 4, level = 0) {
  if(value !== null) {
    if(isArrayType(value)) {
      return renderJSArray(value, indent, level + 1);
    } else if(typeof value === typeof 'string') {
      return '"' + value + '"';
    }
    return renderJSObject(value, indent, level + 1);
  }
  return 'null';
}

export function renderJSArray(array: Array<any>, indent = 4, level = 0) {
  if(isValidBottomType(array)) {
    return array;
  }
  let result = initialArray;
  for(const i in array) {
    if(array.hasOwnProperty(i)) {
      let value = array[i];
      if(typeof value === undefined) {
        // set this to "null" so we can allow "null" as a string
        value = null;
      }
      value = renderValue(value, indent, level);
      if(i !== '0') {
        result = result + ',';
      }
      result = result + indentOf(level + 1, indent);
      result = result + value;
    }
  }
  return result === initialArray ? result + ')' : result + indentOf(level, indent) + ')';
}

export function renderJSObject(object: any, indent = 4, level = 0) {
  if(isValidBottomType(object)) {
    return object;
  }
  let result = initialObject;
  for(const key in object) {
    if(object.hasOwnProperty(key)) {
      let value = object[key];
      const valType = typeof value;
      if(valType === undefined) {
        value = null;
      }
      value = renderValue(value, indent, level);
      result = `${result}${indentOf(level + 1, indent)}"${key}" to ${value}`;
    }
  }
  return result === initialObject ? result + ' }' : result + indentOf(level, indent) + '}';
}

export default function renderJson(indent: number, value: any) {
  if(isArrayType(value)) {
    return renderJSArray(value, indent);
  } else if(typeof value === typeof {}) {
    return renderJSObject(value, indent);
  } else {
    return renderValue(value, indent);
  }
}
