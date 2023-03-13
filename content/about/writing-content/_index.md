---
title: "0.3 Writing Content for the Website"
date: 2023-02-04
weight: 3
chapter: false
lastmod: 2023-02-26
author: 'Mr. Siefen'
editors: ''
---

So you want to write content for the FRC0 website?  Great!  This page will help you get started.

## What is Markdown?

Markdown is a lightweight markup language with plain text formatting syntax.  It is designed so that it can be converted to HTML.  It is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.  For more information, please see the [Markdown Guide](https://www.markdownguide.org/).

## What is Hugo?

Hugo is a static site generator written in Go.  It is optimized for speed, ease of use, and configurability.  Hugo takes a directory with content and templates and renders them into a full HTML website.  For more information, please see the [Hugo Documentation](https://gohugo.io/documentation/).

## What does a page of markdown look like for FRC0?

```markdown
---
title: "1.1 Why FRC0?"
date: 2023-02-04T22:22:45-05:00
---

FRC0 was created to help address the following issues:

- There is a lot of information about FIRST Robotics Competition, but it is spread out across many different websites and sources.
- There are not as many Mentors and Coaches as there are students.
- Guides like WPIlib, Rev, CTRE, and others are great, but they are not always easy to understand or they don't cover all the topics.
    - For example, the WPIlib guides do not cover the game or the competition.
    - The CTRE guides are specific to the CTRE motor controllers and hardware.
    - The Rev guides are specific to the Rev motor controllers and hardware.
    - There is no comprehensive guide to FRC as a whole. Now there is.
- Rookie teams need an easy to follow guide to help them get started.

## Why do many of the pages look like powerpoint slides (On Desktop)?

This website was built using the learn theme for Hugo. The learn theme is designed to look like powerpoint slides. This makes it easy to read and understand. The theme is also responsive, so it looks good on mobile devices. With this theme, we can focus on the content and not the design. Since the focus is on knowledge and information, the design is secondary. The biggest benefit of using Hugo and other SSG (static site generators) is new "posts" can be added to the site without having to rebuild the entire site. This makes it easy to add new content and keep the site up to date. If you are interested in learning about writing content for this site, please see the [Writing Content](/about/writing-content/) page.
```

## How do I write a page of markdown for FRC0?

Its pretty simple.  The first section is called the "Front Matter".  It is used to define the title and date of the page.  The rest of the page is the content.  The content is written in markdown. Try to keep the content to 1-2 paragraphs per section.  This makes it easier to read and understand. I would also recommend using a plain text editor like [Notepad++](https://notepad-plus-plus.org/) or [Visual Studio Code](https://code.visualstudio.com/).  These editors have plugins that make it easy to write markdown. Once you have new content ready to go, you can submit a pull request to our [github](https://github.com/frc0/frc0site) with your new markdown content. We will review the content and add it to the site accordingly.

## How do I add credit to a page?

There is a method of marking the files beginning with something called [front matter](https://gohugo.io/content-management/front-matter/). Below is their method of marking it, however this won't show up on the page in a visible way and it's removed from the public HTML. I like being able to credit the individual authors who made the files so for now feel free to add a "By So and So - Created on 01-01-1984" under the title of the page. We will eventually have this auto generated based on the front matter data!

```
---
date: '2012-04-06' (you can use full or shortened time stamps)
title: 'Page title'
weight: 6.0 (the weight is used to sort it on the menu so if it's in programming it'll be 6.something)
lastmod:  '2012-04-06' (you can use full or shortened time stamps, this is only added if someone edits the original after it's published)
author: 'your name'
editors: 'person1, person2, so on'
---
```

If you're adding a whole new chapter it's gonna have different front matter. The only real difference is the chapter variable is set to true. The rest of the variables are the same. If you are an eagle eyed observer you're also seeing that the example below uses = and +++ instead of : and --- like the first example. Either works, but they are exclusive to the page you are on. You CANNOT mix : with +++ or --- with =. Thats just how it is!

```
+++
title = "0.0 About FRC0"
date = 2023-02-04T22:22:45-05:00
weight = 0.0
chapter = true
lastmod = 2023-02-04T22:22:45-05:00
author = 'Mr. Siefen'
editors = ''
+++
```

## How do I add text and headings to a page?

You can add text and headings to a page by using the following syntax:

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Normal text
```

## How do I add images to a page?

You can add images to a page by using the following syntax:

```markdown
![Image Title](/images/image-name.png)
```

The image title is optional.  The image name is the name of the image file.  The image file should be placed in the `static/images` directory.  The image file should be a PNG file.  The image file should be 1280x720 pixels.  The image file should be less than 1MB in size.

## How do I add a link to a page?

You can add a link to a page by using the following syntax:

```markdown
[Link Title](https://www.example.com)
```

The link title is the text that will be displayed for the link.  The link URL is the URL of the page that the link will point to.

## How do I add a table to a page?

You can add a table to a page by using the following syntax:

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
```

## How do I add a quote to a page?

You can add a quote to a page by using the following syntax:

```markdown
> This is a quote.
```
