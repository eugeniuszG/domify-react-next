# Domify
 
Main goal of this app it's get all rent offers in Warsaw in one place. We are collecting data from OLX, Otodom, Morizon, Gratka.pl (in future). Thus users can get all in one place with convenient filters.
 
Originally this project was invented as a bot for Messenger or Telegram apps. Users could get newest rent offers with a delay of ~1 minutes after it appears on one of the sites enumerating above.

The reason why I've choose Next.js instead of pure React.js it's because I wanted to try this framework and also need static rendering for Facebook Bot, but now it doesn't make any sense as our team not going to release.

### Stack
- Next.js + TypeScript
- Redux + RTK
- Axios
- Bootstrap 5
- Material UI
 
 
### Environment Variables
 
To run this project, you will need to add the following environment variables to your .env file
 
`NEXT_PUBLIC_TOKEN` - token for API access
 
`NEXT_PUBLIC_API` - API address
 
**NOTE:** API is not deployed anywhere, so unfortunately you can't run project on your local machine. Sorry for that, it may change in near future.
 
### TODO
- Implement RWD
- Improve logic of Reducers
- Add infinite scroll instead of standard pagination
- Use Formik for Filters Section (I'm not sure)
- Improve Navigation in NavBar
- Add Unit Tests
- Deployment - in near future xd
 
### App in use
- Landing page

![landing](https://user-images.githubusercontent.com/41344500/199254078-9dcf1b68-c60a-49ce-b9d4-fe97cad86e1c.gif)

- New offers page with filters

![filters](https://user-images.githubusercontent.com/41344500/199253714-1110e35e-abf7-4513-a67f-5f151f141e73.gif)


### Deploy on Vercel

Since this frontend app relies on other services which are pretty resource consumable, release may not happen, but will see.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
