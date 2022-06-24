# Welcome to my Technical Test for Internship Program of Eventbrite.

In this Readm.me I'm going to explain and document how was the platform develop and the ***decisions I have made***.

:smiley: I also included a gif of the platform working, browsing through its endpoints. please check it out! :smiley:

![Gif Technical Test Internship Program](https://user-images.githubusercontent.com/90139066/175532502-7a6f358f-2705-4037-985e-adb8605695d3.gif)

## ***How would you split the project in milestones?***

The first step was ***the workflow design*** that I was going to follow to get the idea, in a structured way, of what milestones did I need to develop and when to do it.

For the diagrams and designs I have used Draw.io and Figma. 

![diagrama workflow](https://user-images.githubusercontent.com/90139066/175532769-861eb0fb-74a0-415c-a76d-4fe74671a670.png)

## ***How would you desing this platform?***

Once I have checked the requirements and functions they platform must perform, I decided which Technology I was going to use. My strong skills are back-end technologies, like Python and its framework Django, or Java and its framework Spring. So ***I chose a technology that made me easy to develop the front-end part*** of the project and also allowed me to use CSS styles and implement database. Another important point of my choice was choosing a technology that has a ***good documentation*** that helps me.  

I also took a look of the documents of the Eventbrite API..

The platform is develop in Next.Js, which documentation can be found in https://nextjs.org/docs , with CSS styles and SQL databases.

I chose a SQL database instead of MongoDB, SQL Server, Oracle or any other ***for the following reasons***:

I want a DB that everybody to be able to follow along:
- git clone
- npm install (more ***easy to integrate*** in the project)
- No external software to install required
- ***Most people understand*** SQL lenguaje (not everybody has worked with MongoDB or Oracle for example)

(In this part of the project I had doubts of what information should I save in the database, that is why I preferred to continue the parts I didn't have doubts about.

The database is integrated inside the project ../migrations/database.sql ; but It is not functional.)

Once I chose the technologies, I worked with the documents of the technology that I was going to use to start the project. 

Next step was the creation of the pre-conditions of the Technical Test, creating my EB account and the differents events, and ***I accessed to my private TOKEN*** to be able to work with the EB API.

I started the development of que Back-End part of the code. It is written in Javascript. ***Using Next.JS made me easy to to change from the list of events to the detail of the event and the routing between pages***. Everything is React based. It was ***a conscious decision to save time and be able to focus in what I thought It was the most important part of the project.*** and also maybe, the part that more work was going to take me, the work with the API, the calls and requests. 

During the development, I commented the code in the lines that I found important. It can be seen in the code.  

Once the structure was created, the Back-End code developed, and with the API calls working and giving me the information that I needed from the events, I continued to do a first approach of the design of how I wanted the pages to be.  

![Landing Page Events](https://user-images.githubusercontent.com/90139066/175538853-a683800b-a645-40b1-ac2d-e6ae8b919570.png)
![Events Page](https://user-images.githubusercontent.com/90139066/175538874-fa6fd053-6e1f-4870-8d4c-4401c8cfe1e0.png)
![Tickets Page](https://user-images.githubusercontent.com/90139066/175538881-6ef73559-2519-489f-87cf-538285358b28.png)

I also ***designed a style guide*** with a similar design to the eventbrite.com one.

![desing 01](https://user-images.githubusercontent.com/90139066/175539103-421d80d7-ef42-40cd-95b7-6bd5ad68670a.png)
![desing 02](https://user-images.githubusercontent.com/90139066/175539115-b0cc1b5a-4341-4e80-b53e-6646d19e6a80.png)
![desing 03](https://user-images.githubusercontent.com/90139066/175539120-72a4230c-deff-4f8d-afe9-4db383d179bc.png)

With this work done, It came the moment of develop the Front-End and applied the CSS styles. In this case, because it is not my hard-skill ***I tried to be the most effective and efficient as possible***.

Once that all styles had been applied, next step was adapting the ***design to be the most responsive as possible***. First, I started from the base of the design for smartphones, and then for the website. 

Finally, I added a few things to the project to make it more solid and safe.

1) I implemented a few ***test***, using the Jest library included in Next.Js y React, that way I was able to implement and work with the test in a simple and easy way. Luckily the app passed them without any problems at first attemp. In the package.json file can be observed the "next" and "react" dependences in which the development of the project is based. It also can be observed the devdependences for the "jest" test and the cript for running the test. As it is show in the next image

![devDependencies](https://user-images.githubusercontent.com/90139066/175541465-c4510218-8877-44f7-aa7c-1f3bb6350bbd.png)

2) I created a ***file .env to have the environment variables*** of my user, like the TOKEN and my ID, that way I was able to use them without show it in the code, giving ***my project more security***. At this point I had to check the documentation  because Next.JS had a very particular way of treating and working with the enviroment variables. (https://nextjs.org/docs/basic-features/environment-variables)

With the test implemented and everything working well, I have started to document the project. 

## ***What would you build next?***

The next thing I would have implemented would be a registration and login system for users. Both for users who would like to consult events and purchase tickets, as well as for users who would like to create and publish their own events.

I would also have debugged and worked on the database part.

## ***What do you think is the most complex part of the exercise?***

The part that has required most of my time and maybe the one that is the most complex has been to start working with the API and get it to return the complete information of the events and be able to extract the data that I wanted to show in the application. / platform. At this point I was stuck because when looking at the API documentation in this section: https://www.eventbrite.com/platform/docs/api-explorer ; and following the steps indicated to me did not get it to work. I inspected the API endpoints from the browser and the information of my user was returned to me correctly but not that of the events.

![webAPIuserOk](https://user-images.githubusercontent.com/90139066/175543802-9dbc71b9-f51d-4699-ae1e-8038c0e14888.png)
![webAPIevents404](https://user-images.githubusercontent.com/90139066/175543824-f4972538-f00f-4461-ac4c-c4f60d169aa7.png)

I also noticed that in the documentation it indicated an endpoint (users/me/owned_events/...) in the title of the example but in the description it showed another endpoint (users/me/events/...

![endpoints not match](https://user-images.githubusercontent.com/90139066/175544068-ebd81fed-0ada-42ce-a822-d19793862e91.jpg)

So :thinking: I thought maybe there was some changelog in the documentation :thinking:, so my next step was to check it (https://www.eventbrite.com/platform/docs/changelog) and I noticed that the documentation of how to get events via the EB API

![changelogAPI](https://user-images.githubusercontent.com/90139066/175544563-1b2affb5-efb0-49a4-9be6-7ec1cf6dddb1.png)

From that moment I was able to work perfectly with the API and continue developing the task and the project :sweat_smile:.

### And that's it! :smile: Thank you very much for offering me the opportunity to take this Technical Test for the Intership Program :blush:. All feedback is well received because it will help me improve my skills.

### **Now it's time to start using the platform !!!** 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

to run de test, use ' npm test ' 
```
Open [http://localhost:3000](http://localhost:3000) to navigate on the platform. 

On the landing page, the user can filter physical and online events with the buttons above.

Once the available events are listed, the user is shown their name and date, and can access them by clicking on the event card.

On the event page, the user can see the event information, its schedules and can access the available tickets through the ticket button.

On the page of the tickets related to the event, the user is shown the types of tickets that can be obtained, ordered by price in descending order and showing the currency, information and benefits obtained according to the type of ticket are also displayed.

