---
date: '2024-1-19'
title: '6.11 Web Development'
weight: 11
lastmod: ''
author: 'Mr. Siefen'
authorLink: 'https://github.com/mrSiefen'
editors: ''
---

## What is Web Development?

Web development is the process of building and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management. It can generally be divided into front-end (client-side) development and back-end (server-side) development. The front-end is what the user sees and interacts with, while the back-end is what happens behind the scenes to make the website work. Web developers often specialize in either front-end or back-end development, but some do both. The guides here will also focus on both front-end and back-end development.

#### Why is Web Development Important?

Web development is important because it allows people to access information and services on the internet. In the context of FRC teams, web development is important because it allows teams to share information about their team and their robot with the world. It also allows teams to communicate with each other and with the FIRST community as a whole. Your team can create new globally accessible tools and resources for other teams to use, and you can also use tools and resources created by other teams.

### What is a Website?

A website is a collection of web pages that are linked together and share a common domain name. A web page is a document that is displayed in a web browser. It can contain text, images, videos, and other media. A website can be accessed by typing its domain name into a web browser's address bar or by clicking on a link to it from another website. frczero.org (where you are now) is an example of a website. This section 6.11 Web Development is an example of a web page. It is held inside of a folder structure on a web server. The web server is a computer that hosts the website and serves it to users when they request it.

```bash
.
├── content
│   ├── programming
│   │   ├── web-development
│   │   │   ├── _index.md
```
The above example is where this page is located for frczero.org. The folder structure is important because it allows the web server to know where to find the page when a user requests it. The web server will look for the page in the folder structure and serve it to the user. The web server will also look for other files in the folder structure, such as images, videos, and other media. The web server will serve these files to the user when they request them. There mat be lots of other pages in the same folders.

```bash
.
├── content
|   ├── competition
│   │   ├── _index.md
│   ├── programming
│   │   ├── web-development
│   │   │   ├── _index.md
│   ├── electronics
│   │   ├── _index.md
│   |   ├── components-and-sensors
│   │   │   ├── _index.md
```
This folder structure is based on the content of the website and what other tools are used. [Hugo](https://gohugo.io/documentation/) is a static site generation tool. It takes the content and folder structure and generates a website from it. If you are a beginning web developer you can find a theme, or template, that you like and use it to build your website. If you are more advanced you can create your own theme. You can also use a static site generation tool like Hugo to build your website from scratch. This is what frczero.org does. The website is built from scratch using Hugo and a custom theme. To see some other themes that you can use for your website, check out the [Hugo Themes](https://themes.gohugo.io/) website.

Hugo uses markdown which is a plain text, lightweight markup language. It is used to add formatting to text. It is used to create headings, lists, links, and other elements. It is also used to add images, videos, and other media. Markdown is easy to learn and use. It is also easy to read and write. It is used by many websites, including GitHub, Reddit, and Stack Overflow. You can learn more about markdown [here](https://www.markdownguide.org/basic-syntax/). If you are familiar with writing posts on Chief Delphi, you are already familiar with markdown. When you build your final website content it is converted to HTML. HTML is the language that web browsers use to display web pages. It is also easy to learn and use. You can learn more about HTML [here](https://www.w3schools.com/html/).

#### Front End Web Development Table of Contents

| Order | Page Title |
| --- | --- | --- |
| 6.11.1 | [HTML](/programming/web-development/html/) |
| 6.11.2 | [CSS](/programming/web-development/css/) |
| 6.11.3 | [JavaScript](/programming/web-development/javascript/) |
| 6.11.4 | [Bootstrap](/programming/web-development/bootstrap/) |

### What is a Web Server?

A web server is a computer that hosts a website and serves it to users when they request it. It is also responsible for handling requests from users and sending responses back to them. A web server can be a physical computer or a virtual machine. It can also be a cloud service such as Amazon Web Services (AWS), Microsoft Azure, Google Cloud, etc. For local projects even a Raspberry Pi or ESP32 can be used as a web server.

### What is a Web Application?

A web application is a computer program that runs on a web server and is accessed by users through a web browser. It can be a simple program that displays information or a complex program that performs calculations and processes data. It can also be a program that allows users to interact with it by entering data into forms and clicking on buttons. Web applications are often used to create online stores, social networks, and other types of websites. They can also be used to create tools and resources for FRC teams. GoFundRobots.org is an example of a web application. It is a website that allows users to create and manage fundraisers for their FRC team. It is built using Node.JS EJS, and Firebase. It is hosted on Google Cloud.

#### Why is this different from a website?

A website can be considered static or dynamic. Static websites like blogs, news sites, and other static content only sites just need a hosting server to server the right file when a user requests it. An application can do that as well, but it can serve other "endpoints" as well. An endpoint is like a function that can be called by a user. It can take in data and return data. This allows for more complex interactions with the user. It also allows for more complex interactions with the server. A website can be considered a web application, but a web application is not always a website. The Blue Alliance is an example of a web application that has a front end, but many teams also make use of its API (Application Programming Interface) to get data from it. This is an example of other stuff an application can do that a website can't.

#### Back End Web Development Table of Contents

| Order | Page Title |
| --- | --- | --- |
| 6.11.5 | [Node.js](/programming/web-development/node-js/) |
| 6.11.6 | [EJS](/programming/web-development/ejs/) |
| 6.11.7 | [Firebase](/programming/web-development/firebase/) |