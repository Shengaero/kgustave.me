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
import '../../scss/app.css';
import '../../scss/home.css';
import MediaButton from '../components/MediaButton';
import SiteHead from '../components/SiteHead';

function AboutMe() {
  return <div>
    <div className="about-me">
      <h1>About Me</h1>
      <p className="about-me-content">
        Hello!<br/>
        My name is Kaidan Gustave. I am a full time student at the College of Lake County in my
        home town: Grayslake, Illinois. Academically, my studies are geared towards a computer
        science and/or backend development web-development degree, as programming is one of my
        favorite hobbies.<br/>
        Proficiency-wise: I am a well versed and adept user of Java and Kotlin, and am acquainted
        with many other programming languages such as JavaScript, C#, Python, Ruby, and Scala.<br/>
        Besides programming I am an avid gamer, connoisseur of various types of music, and occasional
        artist.
      </p>
    </div>
  </div>;
}

export default function HomePage() {
  return [
    <SiteHead key="SiteHead" title="Kaidan Gustave" description="Kotlin and Java developer"/>,
    <div key="PageTitle" className="page-title">
      <header>
        <h1 className="page-name">Kaidan Gustave</h1>
        <MediaButton color={'#000000'} type="GitHub"
                     href="https://github.com/Shengaero"/>
        <MediaButton color={'#7289DA'} type="Discord"
                     href="https://discordapp.com/invite/xkkw54u"/>
        <MediaButton color={'#0077B5'} type="LinkedIn"
                     href="https://www.linkedin.com/in/kaidan-gustave-905257165/"/>
      </header>
    </div>,
    <AboutMe key="AboutMe"/>
  ];
}