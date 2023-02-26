---
title: "8.6 Team Website"
date: 2023-02-04T22:22:45-05:00
weight: 6
chapter: false
lastmod: 2023-02-26
author: 'Mr. Siefen'
editors: ''
---

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
| Contact Page | The contact page should include a form for visitors to contact the team. |
| Media Page | The media page should include links to team videos and photos. |
| Social Media Links | The website should include links to the team's social media accounts. |
| Calendar Page (optional) | The calendar page should include a calendar of team events. |
| Team Members Page (optional) | The team members page should have information meant for team members and ideally could be password protected. |

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

While the [Learn Hugo Theme](https://learn.netlify.app/en/) tutorial is a great resource for learning how to use Hugo, it is not a great layout for a Team or Branding website. For a teams website to be successful, it needs to be designed to be easy to use and easy to navigate. The learn theme may not be the best choice. The table below lists some of the most common themes for Hugo:

| Theme Name (link) | Description |
| --- | --- |
| [Learn](https://learn.netlify.app/en/) | The learn theme is a theme designed for knowledge websites. |
| [Ananke](https://themes.gohugo.io/gohugo-theme-ananke/) | The ananke theme is a theme designed for blog websites. |
| [Hugo Coder](https://themes.gohugo.io/hugo-book/) | The hugo coder theme is a simple and clean blog theme. |
| [Theme.gohugo.io](https://themes.gohugo.io/) | The theme.gohugo.io website lists many themes for Hugo. I used that to find these themes! |

### How to Install Hugo on Windows (Properly!!!)

**Note:** The following instructions are based on the [Hugo Installation Guide](https://gohugo.io/installation/windows/)

1. Download the latest version of Hugo from the [Download the Windows ARM 64bit version](https://github.com/gohugoio/hugo/releases/download/v0.110.0/hugo_0.110.0_windows-amd64.zip) or see the [Hugo Releases](https://github.com/gohugoio/hugo/releases) page for other versions.

2. Extract the zip file to a folder on your computer. (I recommend somewhere with a short path like `C:\hugo`). The zip file should contain a single executable file named `hugo.exe` and a folder named `LICENSE.md` and `README.md`. If you try to run the `hugo.exe` file now, it will open a command prompt window and then close. This is because the `hugo.exe` program is not a gui program. It is a command line program. To run the `hugo.exe` program, you need to open a command prompt window and then run the `hugo.exe` program from the command prompt window. DO NOT DO THAT YET! Wait for step 7.

4. Open the command prompt window. To do this, press the Windows key and the R key at the same time. This will open the Run dialog box. In the Run dialog box, type `cmd` and then press the Enter key. This will open the command prompt window. (You should do this as an administrator. To do this, right click on the command prompt icon and then click on the "Run as administrator" option.)

5. In order to actually use the `hugo` command and not have to use `C:/hugo/hugo.exe` you need to add it to your PATH! To do this in the command prompt window type `set PATH=%PATH%;C:\hugo\bin` and then press the Enter key. (You should replace `C:\hugo\bin` with the path to the folder where you extracted the `hugo.exe` program.)

6. Change the directory to the folder where you extracted the `hugo.exe` program. To do this, type `cd C:\hugo` and then press the Enter key. (You should replace `C:\hugo` with the path to the folder where you extracted the `hugo.exe` program.)

7. To test that the `hugo` command is working, type `hugo version` and then press the Enter key. This should print the version of Hugo that you installed. If it does not print the version of Hugo that you installed, then you should go back and make sure that you followed the instructions correctly.

    - If you are confident that you followed the instructions correctly, then you should try to reinstall Hugo. If you are still having problems, then you should submit an issue on the [frczero.org github repo](https://github.com/frc0/frc0site)

### How can a team use a theme and Hugo?

Using any theme with Hugo will come with its own set of instructions. There are things that they all have in common though. The following instructions are based on the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/). This also assumes you have already installed Hugo on your computer.

1. Create a new Hugo website using the following command:

    ```bash
    hugo new site my-website
    ```
2. Change the directory to the new website:

    ```bash
    cd my-website
    ```
3. Add the theme to the website:

    ```bash
    git init && git submodule add <link to theme repo you want to use> themes/<name of theme>
    ```
4. Copy the example site from the theme to the website:

    ```bash
    cp -r themes/<name of theme>/exampleSite/* .
    ```

5. Edit the `config.toml` file to change the theme to the theme you want to use:

    ```toml
    theme = "<name of theme>"
    ```
6. Start the Hugo server:

    ```bash
    hugo server
    ```
7. Open a web browser and go to `localhost:1313` to see the website.

### How can a team use the Ananke theme and Hugo?

**Note:** The following instructions are based on the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/). This also assumes you have already installed Hugo on your computer.

**Note 2:** The following instructions are based on the [Ananke Theme Quick Start Guide](https://themes.gohugo.io/gohugo-theme-ananke/). To see the theme in action, visit the [Ananke Theme Demo](https://gohugo-ananke-theme-demo.netlify.app/).

```markdown
//TODO: These instructions are incomplete and students had issues following them at a recent workshop. They need to be updated.
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

```

To learn more about the Ananke theme, visit the [Ananke Theme Documentation](https://themes.gohugo.io/gohugo-theme-ananke/).

> If you want to just start with a cloned version of the Team 453 website which uses the Ananke theme, then you can fork or download and make a new copy of the [FRC 453 Team Website Repository](https://github.com/team453/teamWebsite) and then follow the instructions in the README.md file and the articles [How did we make this site? pt 1](http://rockemsockemrobotics.com/post/ssglesson1/) & [How did we make this site? pt 2](http://rockemsockemrobotics.com/post/ssglesson2/).

## How can a team design a website like frczero.org using a website builder?

// TODO - Add instructions for using a website builder

## How can a team design a website like frczero.org from scratch?

// TODO - Add instructions for designing a website from scratch

Currently Mr. Siefen has a very very very.... very basic website from scratch guide on his personal blog [here](https://mrsiefensrobotemporium.com/blogs/2022/October/websiteCreationpt3.html). He recommends skipping part 1 unless you are interested in learning about hosting with AWS... it's not fun.

## How can a team host a website using a free hosting service?

// TODO - Add instructions for hosting a website using a free hosting service

## How can a team host a website using a paid hosting service?

// TODO - Add instructions for hosting a website using a paid hosting service

## How can a team host a website on a team member's computer?

// TODO - Add instructions for hosting a website on a team member's computer

## How can a team use Netlify to host a website?

// TODO - Add instructions for using Netlify to host a website