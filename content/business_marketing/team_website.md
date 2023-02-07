+++
title = "8.7 Team Website"
date = 2023-02-04T22:22:45-05:00
weight = 8.7
lastmod = 2023-02-04T22:22:45-05:00
author = 'Mr. Siefen'
editors = ''
+++

## Why should FRC teams have a website?

There are numerous benefits teams can gain from having a website. A website can be used to:

* Promote the team to the community
* Promote the team to potential sponsors
* Promote the team to potential mentors
* Promote the team to potential students
* Share information with team members
* Organize team information in a central location
* Share team information with the public
* Practice web development skills
* Practice graphic design skills
* Practice writing skills
* Learn about web hosting
* Learn about web design

## What should a team website include?

A table below lists some of the most common features of a team website. The table also includes a brief description of each feature:

| Feature | Description |
| --- | --- |
| Home Page | The home page is the first page a visitor sees when they visit the website. The home page should include a brief description of the team, a list of the team's sponsors, and a list of the team's mentors. |
| About Page | The about page should include a brief description of the team, a list of the team's sponsors, and a list of the team's mentors. |
| Sponsors Page | The sponsors page should include a list of the team's sponsors. |
| Team Members Page (optional) | The team members page should have information meant for team members and ideally could be password protected. |
| Contact Page | The contact page should include a form for visitors to contact the team. |
| Calendar Page | The calendar page should include a calendar of team events. |
| Media Page | The media page should include links to team videos and photos. |
| Social Media Links | The website should include links to the team's social media accounts. |

## How can a team create a website?

There are many ways to create a website. The table below lists some of the most common ways to create a website:

| Method | Description |
| --- | --- |
| Use a website builder | Website builders are tools that allow users to create websites without writing any code. Website builders are often free and easy to use. |
| Use an SSG like Hugo | SSGs are tools that allow users to create websites by writing text files. SSGs are often free and easy to use. |
| Use a CMS like WordPress | CMSs are tools that allow users to create websites by writing text files. CMSs are often free and easy to use. |
| Use a web development framework like Django | Web development frameworks are tools that allow users to create websites by writing code. Web development frameworks are often free and easy to use. |
| Do it from scratch | Creating a website from scratch requires a lot of knowledge about web development. |

## How can a team host a website?

There are many ways to host a website. The table below lists some of the most common ways to host a website and the associated costs:

| Method | Description | Cost |
| --- | --- | --- |
| Use a free hosting service | Free hosting services are services that allow users to host websites for free. Free hosting services are often limited in features and functionality. | Free |
| Use a paid hosting service | Paid hosting services are services that allow users to host websites for a fee. Paid hosting services are often more feature rich than free hosting services. | $5 - $20 per month |
| Host the website on a team member's computer | Hosting the website on a team member's computer is a free way to host a website. Hosting the website on a team member's computer is often limited in features and functionality. | Free |
| Use services like Read the Docs | Services like Read the Docs are services that allow users to host websites for free. Services like Read the Docs are often limited in features and functionality. | Free |

## How can a team design a website like frczero.org using Hugo?

While the [Learn Hugo Theme](https://learn.netlify.app/en/) tutorial is a great resource for learning how to use Hugo, it does not cover how to design a knowledge website like frczero.org. For a teams website to be successful, it needs to be designed to be easy to use and easy to navigate. The learn theme may not be the best choice. The table below lists some of the most common themes for Hugo:

| Theme Name (link) | Description |
| --- | --- |
| [Learn](https://learn.netlify.app/en/) | The learn theme is a theme designed for knowledge websites. |
| [Ananke](https://themes.gohugo.io/gohugo-theme-ananke/) | The ananke theme is a theme designed for blog websites. |
| [Hugo Coder](https://themes.gohugo.io/hugo-book/) | The hugo coder theme is a simple and clean blog theme. |
| [Theme.gohugo.io](https://themes.gohugo.io/) | The theme.gohugo.io website lists many themes for Hugo. I used that to find these themes! |

### How can a team use the Ananke theme and Hugo?

**Note:** The following instructions are based on the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/). This also assumes you have already installed Hugo on your computer.

1. Create a new Hugo website using the following command:

    ```bash
    hugo new site my-website
    ```
2. Change the directory to the new website:

    ```bash
    cd my-website
    ```
3. Add the Ananke theme to the website:

    ```bash
    git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
    ```
4. Copy the example site configuration to the website:

    ```bash
    cp themes/ananke/exampleSite/config.toml .
    ```
5. Edit the website configuration file called config.toml and change the theme to ananke:

    ```toml
    theme = "ananke"
    ```
6. Create a new post using the following command:

    ```bash
    hugo new posts/my-first-post.md
    ```
7. Edit the post file called my-first-post.md and add the following content:

    ```markdown
    ---
    title: "My First Post"
    date: The Date Goes Here as a Timestamp
    draft: false
    author: "Your Name"
    editors: "Your Team Members"
    ---

    This is my first post!
    ```
8. Build the website using the following command:

    ```bash
    hugo
    ```
9. Serve the website using the following command:

    ```bash
    hugo server
    ```
10. Open the website in a web browser using the following URL:

    ```url
    http://localhost:1313/
    ```
11. Edit the website configuration file called config.toml and change the title to your team's name:

    ```toml
    title = "Your Team's Name"
    ```
12. Edit the website configuration file called config.toml and change the base URL to your team's website URL:

    ```toml
    baseURL = "https://your-team-website-url.com/"
    ```
13. Edit the website configuration file called config.toml and change the author to your team's name:

    ```toml
    author = "Your Team's Name"
    ```
14. Edit the website configuration file called config.toml and change the description to your team's description:

    ```toml
    description = "Your Team's Description"
    ```

    **Note:** The description is used by search engines to describe your website. If you have a good description, your website will be more likely to show up in search results.

15. Make your posts and eventually add them to your webhosting service:
    
    ```bash
    hugo
    
    ```

    **Note:** When you run the hugo command, it will create a public folder. This folder contains all of the files that you need to upload to your webhosting service.

## How can a team design a website like frczero.org using WordPress?

// TODO - Add instructions for using WordPress

## How can a team design a website like frczero.org using Django?

// TODO - Add instructions for using Django

## How can a team design a website like frczero.org using a website builder?

// TODO - Add instructions for using a website builder

## How can a team design a website like frczero.org from scratch?

// TODO - Add instructions for designing a website from scratch

Currently Mr. Siefen has a very very very.... very basic website from scratch guide on his personal blog [here](https://mrsiefensrobotemporium.com/blogs/2022/October/websiteCreationpt3.html). He recommends skipping part 1 unless you are interested in learning about hosting with AWS... its not fun.

## How can a team host a website using a free hosting service?

// TODO - Add instructions for hosting a website using a free hosting service

## How can a team host a website using a paid hosting service?

// TODO - Add instructions for hosting a website using a paid hosting service

## How can a team host a website on a team member's computer?

// TODO - Add instructions for hosting a website on a team member's computer

## How can a team use services like Read the Docs to host a website?

// TODO - Add instructions for using services like Read the Docs to host a website

## How can a team use GitHub Pages to host a website?

// TODO - Add instructions for using GitHub Pages to host a website

## How can a team use Netlify to host a website?

// TODO - Add instructions for using Netlify to host a website

## How can a team use AWS to host a website?

// TODO - Add instructions for using AWS to host a website