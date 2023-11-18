---
title: 'Recall'
excerpt: 'An App to study flashcards smarter. In collaboration with Move Agency'
coverImage: '/assets/blog/recall/cover.jpg'
thumbnailImage: '/assets/blog/recall/thumbnail.png'
technologies: [Kotlin, Jetpack Compose, Spring, 'Ktor']
repository: 'https://github.com/dylanwe/recall'
date: '2023-06-18T05:35:07.322Z'
emoji: '📚'
author:
    name: Dylan Weijgertze
    picture: '/assets/blog/authors/dylan.jpg'
ogImage:
    url: '/assets/blog/recall/cover.jpg'
---

This project was a school assignment completed by a team of four in collaboration with [Move Agency](https://www.moveagency.com/en/). Move is a mobile-first agency specializing in app development for major companies.

Within a 10-week timeframe, we developed Recall, an Android app designed to enhance studying efficiency using flashcards. The app optimizes learning by displaying cards that have been answered correctly less frequently. Flashcards are organized into decks, such as a Mandarin Deck containing Mandarin flashcards. Additionally, we implemented a community page where users can share and explore decks created by others.

## Features

-   Creating, Editing & Deleting flashcard decks
-   Creating, Editing & Deleting flashcards
-   Study all flashcards from a deck
-   Smart studying with spaced repition(the better you memorize the less you have to practice)
-   Sharing decks with the community
-   Importing decks from the community
-   API for community decks

During this project I worked on the deck overview page, the whole API and every community page.

![community deck overview and card](/assets/blog/recall/community_deck.jpg)

## Idea and design

The team at Move Agency provided us with the opportunity to conceptualize and develop an app of our choice. I presented one of my project ideas to the team, and they liked it. Collaborating with Move Agency, we began outlining the app's features and determining their priority.

Using Figma, I designed several screens that were well-received by the team. To speed up the design process, I utilized a Material 3 package. After creating the initial screens and establishing the style, we collectively worked on designing the remaining features. I provided feedback and guidance throughout the design phase.

## Development

![development](/assets/blog/recall/dev.jpg)

We adopted Move's app development process and techniques for this project. We utilized CLEAN architecture to achieve a separation of concerns, and modularized the different parts of CLEAN to reduce build time. Throughout the project, we gained experience working with the following technologies:

-   CLEAN architecture
-   Material 3
-   Koin (Dependency Injection)
-   Ktor client
-   Compose Destinations
-   Spring (in Kotlin)

While initially challenging to grasp their way of working, we were motivated to understand and adapt to it. As development progressed, we became better with the tech stack, leading to increased development speed. In fact, our team even decided to use similar tech stacks for our personal projects. You can check out my personal project, WarrantEase, [here](https://github.com/dylanwe/warrant-ease).

## Areas for Improvement

Using Ktor instead of Spring for the API.
Right now we're using Ktor client to call the Spring API from the Android app.
Using Ktor for the API would increase sharable code across the project making it easier for developers to work on different parts.

## Reflection

![team sitting around table](/assets/blog/recall/team.jpg)

During this project, I aimed to improve my professional communication, presentation, and documentation skills.

Move Agency recommended keeping documentation out of the code, allowing the code to be self-explanatory. Because of this I documented in a separate Wiki and README.md files.

My team & Move provided me with the following points and feedback:

#### Move

-   Integrated well with the company
-   Takes a leading role during presenation and sprint reviews
-   Pace of presenting was too fast but became a nice pace in later presentation
-   Asks for feedback and is open to change
-   Knows how to formulate questions clearly and thoroughly
-   Try to read less from the slides during presenting, it makes the presentation less engaging

#### Team

-   Developed new skills like Ktor
-   Delivered lots of work in all sprints
-   Responds quickly

During presentations, I tend to speak faster when nervous. However, I made a conscious effort to stay calm and take pauses.
I aim to take more time to prepare for presentation to minimize reading and just focus on presenting.

I want to thank my team and the people at Move Agency for their collaboration. It was really fun working with everyone and I feel like we made a good project.
