---
title: Introducing CourseKit
description: 'Our headless platform for creating online courses is now in beta.'
image: '/blog/coursekit_intro.png'
date: 2022-02-16
---
When it comes to hosting online courses, developers have had to make a tough choice: either go with an all-in-one solution like Teachable or Thinkific and be stuck with their dull designs, unimaginative lesson interface, and bloated features. Or, spend 6 months building their own platform from scratch.

My new app, [CourseKit](https://coursekit.dev), solves this conundrum. With its headless architecture, CourseKit allows developers to create their own course site with their favorite frontend tools without the headache of coding backend features like user auth and analytics.

In this article, I’ll give you a rundown on how CourseKit works and why you might want to use it for your next online course project.

## A little background

First, a little bit about me. I’m Anthony Gore and I’ve been a web developer for around 10 years.

I started creating online video courses on developer topics about 5 years ago. My first one was on Vue.js 2 and launched in Dec 2016.

Since then I’ve released several other courses and have tried every course hosting option out there including marketplaces like Udemy and all-in-one platforms like Teachable.

Always unsatisfied with the lack of flexibility in these options, Iast year I decided to build my own course hosting platform from scratch and migrate all my courses on to it.

While I was able to get the design and UX I was looking for, it was a crazy amount of work. And a lot of the time was spent on backend stuff that I really didn’t need to customize.

This got me thinking - what if took what I learned and made it into a product to save other developers from having to do all this work?

## How CourseKit is different

The main difference between CourseKit and other self-hosted course platforms is that CourseKit is a *headless* platform.

If you’re unfamiliar with this architecture, it means that the platform has a backend CMS where you can upload and configure your content but there is no frontend website provided.

Instead, the content is available as an HTTP service. This allows you to create your own frontend and therefore make your own design and UX choices.

The other major difference between CourseKit and Teachable/Thinkific is that CourseKit is not a “business in a box” platform i.e. it is not bloated with features like video hosting, emails, payment gateways, etc.

Like all good developer platforms, CourseKit optimizes for flexibility and creativity, so you instead get to add the features you want with third-party providers you already use e.g. Vimeo, ConvertKit, and Stripe for video, email and payment respectively. These are connected with easy-to-set-up API integrations.

## Want to try CourseKit?

In a moment, I’ll explain the features of CourseKit in more detail. However, if you prefer to jump ahead and try it yourself, you can request an invite for the beta version by leaving your details here:

[Join CourseKit beta list](https://coursekit.dev)

## Key features of CourseKit

I’ve already explained the headless architecture. Let’s now take a look at some of the other features provided by CourseKit.

### Secure, role-based API

As explained, to create a course you upload you content in the backend CMS. Your course site can then access the content via API.

Some of the content you’ll want to make public (e.g. meta data like the course name and lesson titles), but you’ll probably want the meat of your content to be private.

The CourseKit API is protected with OAuth to ensuring that only enrolled students can access private content.

### Student management

To provide access to your courses you can either add students manually via the CMS or use the CourseKit API. For example, after a student has paid for your course with Gumroad or Stripe, you can POST their email to the user endpoint.

Then just pop a “log in” button on your site and it will work!

### JavaScript client library

To make creating course sites easy, I’ve supplied a [JavaScript client library](https://github.com/course-kit/client) that allows easy connection with the API and other handy features.

For example, here’s a snippet showing how you’d create a “complete and continue” button on your lessons that will allow the user to simultaneously mark the current lesson complete and progress to the next one.

*Note that the `user`, `lesson` and `course` objects are all provided by the API.*

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

To create your lessons you can upload markdown files into the CourseKit dashboard. Your course site will fetch from the API at runtime and render dynamically.

The markdown can include frontmatter variables so that you can easily include meta data like the lesson title (a *public* value) or a Vimeo ID (a *private* value)

Here’s an example of lesson content.

```markdown
---
vimeoId: 4893274923
public:
	title: 'Introduction to pin collecting'
---

Hey pinheads, welcome to the course.
```

The API will return this lesson as an object similar to this:

```jsx
{
	meta: {
		title: 'Introduction to pin collecting',
		vimeoId: 4893274923
	} 
	content: '<p>Hey pinheads, welcome to the course.</p>'
}
```

## Setting up a course with CourseKit

Unlike bloated course-in-a-box platforms CourseKit has a modular philosophy where you can add the features you need either with your own code or with third-party providers.

While this may be more work to set up initially, you get a course site that is lean and flexible.

Here’s a diagram explaining a typical setup of a video-based course where students enroll after paying.

![Untitled Diagram.drawio (1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e50855c-997f-4ee5-b0ad-d6cb8024516c/Untitled_Diagram.drawio_(1).png)

Let’s now look at each part in detail.

### CourseKit dashboard

This is the cloud-based backend you get access to when you create an account. Here are some of the things you can do in the dashboard:

- Create courses
- Add your lesson content
- Manage students
- Check analytics

### CourseKit API

This the OAuth-secured HTTP service that your cours site will interface with. Here are some of the things you’ll use it for:

- Fetch course and lesson content
- Authenticate students
- Manage students (e.g. update lesson progress)
- Enroll students

### Your course site

Your frontend course site which can be created with whatever tech stack you like e.g. React and Tailwind to achieve the design and UX you desire.

For optimal performace, I recommend you make this a static site and use the CourseKit JavaScript client to connect with the API and create your course widgets.

**Note: you can use a [template](https://github.com/course-kit/nuxt-demo) we provide to get your site off the ground quickly.**
>

### Stripe

One way to add students to your course is to provide a link to Stripe checkout on your course pages.

With a simple webhook you can then enroll the student in the course via the CourseKit API.

### Vimeo

Vimeo is a cheap and effective way to create video content. Vimeo videos can easily be embedded in your site. Just drop the video ID into your course content and setup the embed at runtime.

## Join as a beta tester

CourseKit is currently in public beta, meaning it is launched and it works, but some features (e.g. analytics) have yet to be launched.

We have limited invitations for beta testers. If you’d like to request one, or if you’d just like to stay informed about the progress of CourseKit, be sure to leave your details on this page:

[Join CourseKit beta list](https://coursekit.dev)
