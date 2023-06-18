---
title: 'Fizzy'
excerpt: 'Helping you make and keep track of your workouts.'
coverImage: '/assets/blog/fizzy/cover.png'
thumbnailImage: '/assets/blog/fizzy/thumbnail.png'
technologies: [TypeScript, MySQL]
repository: 'https://github.com/dylanwe/fizzy-fitness-app'
date: '2022-07-26T05:35:07.322Z'
emoji: '🏋️‍♂️'
author:
    name: Dylan Weijgertze
    picture: '/assets/blog/authors/dylan.jpg'
ogImage:
    url: '/assets/blog/fizzy/cover.png'
---

This project was inspired by my research on fitness and its effects on the body and mind. I drew inspiration from the app [Strong](https://www.strong.app/), which unfortunately doesn't have a website. As a result, I decided to create my own version of it. The name "Fizzy" might sound a bit silly, but it evolved from "physique" to "Physi" and finally became "Fizzy." You can check out a [demo video](https://youtu.be/RcGxFgKqzA4) of the project.

## The code

During my time in school, I worked on a project built with Express.js using the MVC structure. I enjoyed working with Node.js, so when I started this side project, I decided to use Node.js and Express again. However, I also wanted to try something new, so I incorporated TypeScript for both the backend and frontend.

TypeScript, being a superset of JavaScript, was a seamless transition for me. What I appreciated most about using TypeScript was the ability to add types to my code, enabling safer coding practices and providing helpful hints. Here's an example that demonstrates the use of types, where the `id` parameter has a type of `number`, and the return type is `Promise<User>`:

```typescript
/**
 * Get a user by his id
 *
 * @param id the id of the user
 * @returns a user
 */
export const getUserById = async (id: number): Promise<User> => {
    const [users]: any = await db.query(
        'SElECT id, email, username, apikey FROM user WHERE id = ?',
        [id]
    );

    return users[0] as User;
};
```

![Fizzy showcase](/assets/blog/fizzy/fizzy-showcase.png)

## Things I learned

-   Writing TypeScript
-   Adding custom types
-   Adding user authentication with Passport.js

## Things I would do differently

In hindsight, I realize that I ended up reusing some views quite a lot. This makes me believe that using a framework like React, Svelte, Vue, or their meta frameworks (Next, Nuxt, Svelte Kit) would have been a better fit for this project. Fortunately, I plan to use one of these frameworks in the upcoming school year, so it's valuable to have gained some experience with them beforehand.

Another aspect I would improve is my utilization of types. I still used `any` types in several instances, and I should have explored using more precise types instead.
