## Getting started

- Clone repo
- Move to the photo-grid-frontend folder
- Run `yarn install` to install dependencies
- Get Access ID from Unsplash API
- Create a local .env.local file
- Copy this line

```console
CLIENT_ID="<YOUR UNSPLASH ACCESS ID>
```

- Run `yarn dev` to start

Nb: I've disabled the lightbox rendering for mobile to keep the app user friendly (it was replaced with an info component)

## Vercel Deployment

Url: https://react-coding-challange-amber.vercel.app/

## Chalenge Instructions

This is a coding challenge for prospective front-end and full-stack developer applicants applying to TechGuilds.

If you're unfamiliar with React, Facebook has put together a helpful tutorial that provides a quick introduction to the basics: https://reactjs.org/docs/hello-world.html

## Goal:

#### Build a simple React app that allows viewing and interacting with a grid of photos from Unsplash

- [x] Fork this repo into your GitHub account. Keep it public until we have been able to review it.
- [x] Use `npx create-next-app your_app_name` to set up a Next.js application as shown here:
      https://nextjs.org/learn/basics/create-nextjs-app .
- [x] Refer to the Unsplash API docs here to set up a developer account: https://unsplash.com/documentation.
- [x] Display a grid of photos in your React app. Use the `GET /photos` endpoint from the Unsplash API to get a set of curated images.
- [x] The grid of photos should preserve the aspect ratio of the photos it's displaying, meaning it shouldn't crop the image in any way.
- [x] The grid should be responsive, and should work in both portrait and landscape orientations on both mobile and desktop browsers.
- [x] The grid should support infinite scrolling, using a lazy-load strategy to fetch additional images as the user scrolls.
- [x] You're free to use existing open source React components or Javascript packages/libraries from npm to complete this task.
- [x] You're free to use any UI framework such as Tailwind, Material UI etc.
- [x] Write necessary test cases.
- [x] Deploy your app to Vercel or any other hosting provider.
      Refer to docs how to deploy Next.js app to vercel: https://vercel.com

### Extra Points:

- [x] Extra points if you use Typescript.
- [x] When the user taps on a photo on the grid it should show the full photo in a full width lightbox popup with more information about the photo.
- [x] The lightbox popup should be dismissible with a close button.
- Big bonus for full stack developers: Build photos table and an API endpoint, and consume it fro the front-end layer instead of unsplash. You can build it with either MongoDB, Node and express; or .NET stack SQL Server, and ASP.NET.

### Evaluation:

- [ ] The app should build without errors (typically using `npm run build`). If there are necessary steps required to get it to compile, those should be covered in README.md.
- [ ] No crashes or bugs .
- [ ] The app should pass all test cases.
- [ ] The app should be deployed to any hosting provider and url of the app should be found in README.md.
- [ ] Code is easily understood and communicative (eg. comments, variable names, etc).
- [ ] GitHub commit history is consistent, easy to follow and understand.
