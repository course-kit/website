---
title: Build an Online Course with React
description: 'Learn to build a video course single-page app with React.'
image: '/blog/online-course-react.png'
date: 2022-03-04
tags: blog
---

A great way to share your knowledge is with an online course. Rather than being stuck with the boring and inflexible lesson pages offered by the well-known course platforms, we can build our own so we can make the design and UX exactly how we like.

In this tutorial, I’ll show you how to create a single-page app course site using React. The features will include markdown-based content, embedded Vimeo videos, and lesson navigation.

We’ll make this a static site so you won’t need a backend. Here’s what the home page, course page, and lesson page will look like:

![online-course-react-all_pages](/blog/online-course-react-all_pages.png)

At the end of the tutorial, I’ll also show you how to (optionally) enroll students so you can track student progress and protect lesson content so you can monetize your course. For this part, we’ll integrate [CourseKit](https://coursekit.dev) which is a headless API for hosting online courses.

You can view a demo of the finished product [here](https://online-course-react-demo.netlify.app/) and get the source code [here](https://github.com/anthonygore/react-course).

## Set up with Create React App

Let’s go ahead and set up our single-page app course site using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

```bash
$ npx create-react-app react-course
$ cd react-course
```

We’ll also need [React Router](https://reactrouter.com/) for setting up the course pages.

```bash
$ npm install --save react-router-dom
```

With that done, let’s fire up the dev server and start building!

```bash
$ npm start
```

## Configure router and create pages

Our courses app will have three pages:

- A **home page** that will show the available courses.
- A **course page** that will show the info of a specific course and its lessons. This will have a dynamic route `/courses/:courseId`.
- A l**esson page** that will show a specific lesson. This will have a dynamic route `/courses/:courseId/lessons/:lessonId`.

Since we’re using React Router, we’ll create a component for each of these pages. Let’s put these in the directory, *src/pages*.

```bash
$ mkdir src/pages
$ touch src/pages/Home.js
$ touch src/pages/Course.js
$ touch src/pages/Lesson.js
```

### Add router to project

We’ll now need to edit *src/index.js* and wrap our main `App` component with `BrowserRouter` so the router will function.

*src/index.js*

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
```

### Add pages to App component

We’ll now go to the `App` component and clear out the contents. We'll then create our own template with the three routes and pages we declared above.

*src/App.js*

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Lesson from './pages/Lesson'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route
            path="/" 
            element={<Home />} 
          />
          <Route
            path="/courses/:courseId" 
            element={<Course />}
          />
          <Route
            path="/courses/:courseId/lessons/:lessonId"
            element={<Lesson />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
```

With that done, we’ve set up the page structure of our course app.

## Create course data file

Since we aren’t using a backend API, the data for our courses and lessons will be stored in a nested JavaScript array. This array will be used to populate the content of our app.

The array will consist of course objects with an `id`, `title`, `description`, and a sub-array of lesson objects. 

The lesson objects will have an `id`, `title`, and `description`, and will also include a `vimeoId` which will be the ID for the lesson’s video (this will be explained below).

> Tip: ensure your IDs are unique and sequential.

*src/courses.js*

```js
const courses = [
  {
    id: 1,
    title: "Photography for Beginners",
    description: "Phasellus ac tellus tincidunt...",
    lessons: [
      {
        id: 1,
        title: "Welcome to the course",
        description: "Lorem ipsum dolor sit amet...",
        vimeoId: 76979871
      },
      {
        id: 2,
        title: "How does a camera work?",
        description: "Lorem ipsum dolor sit amet...",
        vimeoId: 76979871
      },
      ...
    ]
  },
  {
    id: 2,
    title: "Advanced Photography",
    description: "Cras ut sem eu ligula luctus ornare quis nec arcu.",
    lessons: [
      ...
    ]
  },
  ...
]

export default courses
```

## Create home page

Let’s now start building our pages, beginning with the home page. We’ll first import the `courses` array from the module we just created.

In the component template, we’ll map the array and pass the data into a new component `CourseSummary`.

*src/pages/Home.js*

```jsx
import courses from '../courses'
import CourseSummary from '../components/CourseSummary'

function Home() {
  return (
    <div className="Home page">
      <header>
        <h1>React Online Course Site</h1>
      </header>
      {courses.map((course) => (
        <CourseSummary course={course} key={course.id} />
      ))}
    </div>
  )
}

export default Home
```

### CourseSummary component

This component will display each course's title and description and will provide a link to the course, allowing the user to select the course they want to take. We pass in the course information via props.

*src/components/CourseSummary.js*

```jsx
import { Link } from 'react-router-dom'

function CourseSummary(props) {
  return (
    <section key={props.course.id} className="summary">
      <div>
        <div className="title">
          <h2>
            <Link
              className="no-underline cursor-pointer"
              to={'/courses/' + props.course.id}
            >
              {props.course.title}
            </Link>
          </h2>
        </div>
        <p>
          <Link
            className="no-underline cursor-pointer"
            to={'/courses/' + props.course.id}
          >
            {props.course.description}
          </Link>
        </p>
      </div>
    </section>
  )
}

export default CourseSummary
```

With that done, here’s what our home page will look like once a bit of CSS has been added (I won’t show that here for brevity but you can see it in the [source code](https://github.com/anthonygore/react-course).).

![online-course-react-home](/blog/online-course-react-home.png)

## Create course page

The next page we’ll create is the course page. Note that the page path `/courses/:courseId` has a dynamic segment for the course ID which is how we know which course’s data to show. 

Let’s use the `useParams` hook from React Router to extract the dynamic segment at runtime.

*src/pages/Course.js*

```jsx
import { useParams } from 'react-router-dom'

function Course() {
  let { courseId } = useParams()
  console.log(courseId) // 1
}

export default Course
```

Now we can use the ID to get the relevant course data from the courses data with an array `find`.

> Tip: if the find returns null you should probably show a 404 page.

*src/pages/Course.js*

```jsx
import { useParams } from 'react-router-dom'
import courses from '../courses'

function Course() {
  const { courseId } = useParams()
  const course = courses.find(course => course.id === courseId)
}

export default Course
```

We can now define a template for the course. The header will include a breadcrumb at the top of the page and details of the course including the title and description.

We’ll then have a link to the first lesson with the text “Start course”. We’ll also display summaries of the lessons included in the course which we create by mapping over the `lessons` sub-property and passing data to another component `LessonSummary`.

*src/pages/Course.js*

```jsx
import { useParams } from 'react-router-dom'
import LessonSummary from '../components/LessonSummary'
import { Link } from 'react-router-dom'
import courses from '../courses'

function Course() {
  const { courseId } = useParams()
  const course = courses.find(course => course.id === parseInt(courseId))
  return (
    <div className="Course page">
      <header>
        <p>
          <Link to={'/'}>Back to courses</Link>
        </p>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <Link 
          className="button primary icon" 
          to={`/courses/${courseId}/lessons/${course.lessons[0].id}`}
        >
          Start course
        </Link>
      </header>
      <div>
        {course.lessons.map((lesson, index) => (
          <LessonSummary
            courseId={courseId}
            lesson={lesson}
            num={index + 1}
            key={lesson.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Course
```

### LessonSummary component

Similar to the `CourseSummary` component, this one will receive props with the lesson’s data which can be used to show a title and description as a clickable link. This will allow users to navigate directly to a lesson. 

*src/components/LessonSummary.js*

```jsx
import { Link } from 'react-router-dom'

function LessonSummary(props) {
  return (
    <section key={props.lesson.id} className="summary">
      <div>
        <div className="title">
          <h2>
            <Link
              className="no-underline cursor-pointer"
              to={'/courses/' + props.courseId + '/lessons/' + props.lesson.id}
            >
              {props.num}. {props.lesson.title}
            </Link>
          </h2>
        </div>
        <p>
          <Link
            className="no-underline cursor-pointer"
            to={'/courses/' + props.courseId + '/lessons/' + props.lesson.id}
          >
            {props.lesson.description}
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LessonSummary
```

With that done, here’s what the course page will look like:

![online-course-react-course](/blog/online-course-react-course.png)

## Create lesson page

Similar to the course page, the lesson page includes dynamic segments in the URL. This time, we have both a `courseId` and `lessonId` allowing us to retrieve the correct course and lesson objects using array finds.

*src/pages/Lesson.js*

```jsx
import { useParams } from 'react-router-dom'
import courses from '../courses'

function Lesson() {
  const { courseId, lessonId } = useParams()
  const course = courses.find(course => course.id === parseInt(courseId))
  const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))
}

export default Lesson
```

### Vimeo embed

Each lesson will have an associated video. In this demo, we’ll be using a [Vimeo](https://vimeo.com/) video, though you could use any video service that allows embedding in your own site.

All you need to do is grab the video’s ID after it has been uploaded and add it to the courses data module. The ID is normally a number like `76979871`.

At runtime, we’ll embed a Vimeo video player and load the video using its ID. To do this, let’s install the [React Vimeo](https://github.com/u-wave/react-vimeo) component.

```bash
$ npm i -S @u-wave/react-vimeo
```

### Lesson page component

Now let’s create a template for our Lesson page component. Like the course page, we’ll provide a breadcrumb and the lesson title at the top of the template.

We’ll then use the `Vimeo` component and pass it a prop `video` with the vimeo ID from our data.

*src/pages/Lesson.js*

```jsx
import { Link, useParams } from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'
import courses from '../courses'

function Lesson() {
  const { courseId, lessonId } = useParams()
  const course = courses.find(course => course.id === parseInt(courseId))
  const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))
  return (
    <div className="Lesson page">
      <header>
        <p>
          <Link to={'/courses/' + course.id}>Back to {course.title}</Link>
        </p>
        <h1>{lesson.title}</h1>
      </header>
      <div className="Content">
        <Vimeo video={lesson.vimeoId} responsive />
      </div>
    </div>
  )
}

export default Lesson
```

### Complete and continue button

The last thing we’ll add to the lesson page is a *Complete and continue* button. This allows the user to navigate to the next lesson once they’ve finished watching the video.

Let’s create a new component called `CompleteAndContinueButton`. This will use React Router’s `useNavigate` hook to navigate to the next lesson (whose ID is passed in as a prop).

*src/components/CompleteAndContinueButton.js*

```jsx
import { useNavigate } from 'react-router-dom'

function CompleteAndContinueButton(props) {
  const navigate = useNavigate()
  function completeAndContinue () {
    navigate(`/courses/${props.courseId}/lessons/${props.lessonId}`)
  }
  return (
    <button className="button primary" onClick={completeAndContinue}>
      Complete and continue
    </button>
  )
}

export default CompleteAndContinueButton
```

We’ll add this component directly under the `Vimeo` component in the lesson page template. Note that we’ll need to get the next lesson ID and pass it as a prop. We’ll create a function `nextLessonId()` to find this.

*src/pages/Lesson.js*

```jsx
import { Link, useParams } from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'
import courses from '../courses'
import CompleteAndContinueButton from '../components/CompleteAndContinueButtons'

function Lesson() {
  ...
  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson)
    const nextIndex = (currentIndex + 1) % course.lessons.length
    return course.lessons[nextIndex].id
  }
  return (
    <div className="Lesson page">
      <header>...</header>
      <div className="Content">
        <Vimeo video={lesson.vimeoId} responsive />
        <CompleteAndContinueButton 
          courseId={courseId}
          lessonId={nextLessonId()}
        />
      </div>
    </div>
  )
}

export default Lesson
```

With that done, here’s what our lesson page will look like. The video is, of course, playable, and the student can navigate to the next lesson once they’ve finished watching.

![online-course-react-lesson](/blog/online-course-react-lesson.png)

## Add student enrollments

Right now, our app has the basic functionality of a course: a student can select a course, select a lesson, and watch the video.

There are other important aspects of online courses that we have not included, though. 

Firstly, personalization. Students want to be able to track the lessons they’ve already completed in case they don't finish the course in one go.

Secondly, we may want to protect our content so only paying students can see it. That way we can monetize our course.

Both these features require an auth system allowing students to enroll so we know which courses they’ve purchased and which lessons they’ve completed. 

### CourseKit

Creating a course backend is an arduous task. An alternative is to use [CourseKit](https://coursekit.dev), a headless API for online courses which we could easily plug into the app we’ve created.

CourseKit is designed to provide exactly the features we’re missing in our app: student management and role-based access to content.

### Adding CourseKit to our project

To add CourseKit to this project we'd create an account and transfer our course data there. We’d then use the CourseKit JavaScript client to call the data through the API.

Here’s what the lesson page would look like if we added CourseKit. Note how the content is hidden until the user authenticates.

![online-course-react-lesson_auth](/blog/online-course-react-lesson_auth.png)

> Here’s the [full demo](https://demo.coursekit.dev) of this site with CourseKit integrated.

## Join as an early user

CourseKit is currently in public beta, meaning it is launched and it works, but some features (e.g. analytics) are still in progress.

If you’d like to try it out, create a free account here:

[Get started with CourseKit](https://coursekit.dev/#join)
