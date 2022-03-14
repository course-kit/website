---
title: Introducing CourseKit
description: 'Learn about our headless platform for creating online courses which is now in beta.'
image: '/blog/coursekit_intro.png'
date: 2022-02-16
---
When it comes to hosting online courses, developers have had to make a tough choice: either go with an all-in-one solution like Teachable or Thinkific and be stuck with dull design, an unimaginative lesson interface, and severe feature bloat. Or, spend 6 months building a custom platform from scratch.

My new app, [CourseKit](https://coursekit.dev), offers a better choice. With its headless architecture, CourseKit allows developers to create their own course site with their favorite frontend tools without the headache of coding backend features like user auth and analytics.

In this article, I’ll give you a rundown of how CourseKit works and why you might want to use it for your next online course project.

## A little background

First, a bit about me. I’m [Anthony Gore](https://twitter.com/anthonygore) and I’ve been a web developer for around 10 years.

I’ve always enjoyed sharing my knowledge with other developers and launched my first video course on Vue.js 2 back in 2016.

Since then I’ve released several other courses and have tried every course hosting option out there including marketplaces like Udemy and all-in-one platforms like Teachable.

No matter where I hosted my courses, there was always something I wanted to do that I couldn’t. So last year I decided to build my own course hosting platform from scratch and migrate all my courses onto it.

While I was able to get the features and design I was looking for, it was a crazy amount of work, most of which was spent on backend stuff that I really didn’t need to customize.

This got me thinking - what if took what I’d made and spun it off into a product to save other developers from having to repeat this same work?

And so CourseKit was conceived.

## How CourseKit is different

The main difference between CourseKit and other self-hosted course platforms is that CourseKit is a *headless* platform.

If you’re unfamiliar with this architecture, it means that the platform has a backend CMS where you can upload and configure your content but there is no frontend website provided.

Instead, your content is available from a secure HTTP service. This architecture allows you to create a custom frontend and so frees you from the prosaic design and UX of other platforms.

I’m not a great designer myself, but here’s a demo course page I built with Nuxt and Tailwind (you can, of course, use whatever frontend tech stack you like).

![course_logged_in.png](/course_logged_in.png)

The other major difference between CourseKit and Teachable, Thinkific, etc, is that it's not a “business in a box” i.e. it is not bloated with features like video hosting, emails, payment gateways, etc.

Like all good developer platforms, CourseKit optimizes for flexibility and creativity, so you instead get to add the features you want with your own code or with third-party providers you already use e.g. Vimeo, ConvertKit, and Stripe for video, email, and payment respectively. These can be connected with easy-to-set-up API integrations.

## Want to try CourseKit?

In a moment, I’ll explain the features of CourseKit in more detail. However, if you prefer to jump ahead and try it yourself, you can create an account here:

[Get started with CourseKit](https://coursekit.dev/#join)

## Key features of CourseKit

I’ve explained the headless architecture. Let’s now take a look at some of the other features provided by CourseKit.

### Secure, role-based API

As explained, you can create a course by uploading content in the backend CMS. Your course site can then fetch the content via API.

Some of the content you’ll want to make public (e.g. metadata like the course name and lesson titles), but you’ll probably want the meat of your lesson content to be private.

The CourseKit API is protected with OAuth to ensure that only enrolled students can access any private content.

### Student management

To provide access to your courses you can either enroll students manually via the dashboard or use the CourseKit API. For example, after a student has paid for your course with Gumroad or Stripe, you can set up a webhook to POST their email to the required endpoint.

Now you just need to pop a “log in” link on your site and, voila, role-based access is handled.

### JavaScript client library

To make creating course sites easy, I’ve supplied a [JavaScript client library](https://github.com/course-kit/client) that allows easy connection with the API and other handy features.

Here’s an example snippet showing how you’d create a “complete and continue” button on your lessons that will allow the user to simultaneously mark the current lesson complete and progress to the next one.

*Note that `user`, `lesson` and `course` are all objects of the client library.*

```jsx
const button = document.querySelector('#complete-button')
if (user.isAuthenticated()) {
  button.addEventListener('click', async () => {
    const success = await lesson.markComplete()
    if (success) {
      const nextLessonId = course.nextLessonId
      window.location.href = `/courses/${course.id}/lessons/${nextLessonId}`
    }
  })
}
```

### Markdown-based content

To create your lessons you can upload markdown files into the CourseKit dashboard. The markdown can include frontmatter variables so that you can easily include metadata like the lesson title (a *public* value) or a Vimeo ID (a *private* value)

Here’s an example of lesson content.

```markdown
---
vimeoId: 4893274923
public:
	title: 'Introduction to pin collecting'
---

Hey pinheads, welcome to the course.
```

Your course site will fetch from the API at runtime and render content dynamically. Here’s what the above lesson content will look like in your app for an authenticated user:

```jsx
console.log(lesson)

/*
{
	meta: {
		title: 'Introduction to pin collecting',
		vimeoId: 4893274923
	} 
	content: '<p>Hey pinheads, welcome to the course.</p>'
}
*/
```

## Setting up a course with CourseKit

Unlike bloated business-in-a-box course platforms, CourseKit has a modular architecture. This means you can add the features you need either with your own code or with third-party providers.

While this may be more work to set up initially, you end up with a course site that is lean and flexible.

This diagram represents a typical video-based course setup where students are enrolled after purchasing through Stripe.

![Course site diagram](/blog/coursekit_intro-diagram.png)

Let’s now look at each part in detail.

### CourseKit dashboard

This is the cloud-based CMS you get access to when you create an account. Here are some of the things you can do in the dashboard:

- Create courses
- Add your lesson content
- Manage students
- Check analytics

### CourseKit API

This is the OAuth-secured HTTP service that your course site will interface with. Here are some of the things you’ll use it for:

- Fetch course and lesson content
- Authenticate students
- Manage students (e.g. update lesson progress)
- Enroll students

### Your course site

Your frontend course site can be created with whatever tech stack you like, e.g. React and Bootstrap, to achieve the design and UX you desire.

CourseKit is Jamstack-friendly, so I recommend you make this a static site and use the CourseKit JavaScript client to connect with the API and create your UI widgets.

*Note: you can clone a [course site template](https://github.com/course-kit/guides/blob/master/templates.md) to get up and running quickly.*

### Stripe

One way to add students to your course is to provide a link to Stripe checkout on your course pages.

With a simple webhook, you can then enroll the student in the course through the CourseKit API.

### Vimeo

Vimeo is a cheap and effective way to create video content. Vimeo videos can easily be embedded in your site. Just drop the video ID into your course content as a frontmatter variable and render the embed at runtime.

## Join as an early user

CourseKit is currently in public beta, meaning it is launched and it works, but some features (e.g. analytics) are still in progress.

If you’d like to try it out, create a free account here:

[Get started with CourseKit](https://coursekit.dev/#join)
