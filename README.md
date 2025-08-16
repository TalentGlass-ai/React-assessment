# React Take-Home Assignment

## Job Platform Company – Candidate Assessment

## 1. Conceptual Questions

**(Please answer each in 3–4 sentences.)**

**a.** What are React hooks, and how do they improve component logic compared to class-based components?
*Your answer:*

React hooks are functions that let us to use state and lifecycle features in functional components hooks eg:useState, useEffect, and useContext etc.
They improve component logic by making it easier to share and reuse stateful logic through custom hooks,Hooks also help reduce code duplication and make components more readable by grouping related logic together.

**b.** Explain how you would optimize rendering performance in a React app with a long list (e.g., hundreds of job postings).
*Your answer:*

 I will ensure each list item has a stable key.
 I will wrap heavy child components with React.memo to prevent unnecessary re-renders.
 Pagination can further reduce the rendering load and improve performance.

**c.** Describe your preferred approach to managing form state and validation in React.
*Your answer:*

I prefer using useState or useReducer to manage form state. 
For validation, I like using library such as Formik with Yup as they handle validation rules, errors.
This approach keeps the code clean,

## 2. Core Coding Challenge

**Feature:** _Job Listing Board_

**Instructions:**

- Build a React app with the following features:
    - Fetch and display a list of jobs from a mock API
(Suggestion: https://jsonplaceholder.typicode.com/posts or create your own mock data).
    - Each job "card" must show a **title**, **company**, and **location**.
    - Add a **search bar** to filter jobs by title or company in real time.
    - Each card should have a **"Save Job"** button. Saved jobs appear in a separate section ("Saved Jobs").
    - Ensure basic **responsive design**.

**Bonus:**

- Debounce the search input.
- Show loading and error UI states.
- Use context or reducer for global state management if beneficial.

**Deliverable:**

- Submit source code (GitHub link or ZIP).
- Write brief **setup instructions** below or in the README.

**Setup Instructions:**

## 3. Debugging Exercise

**Review and fix this React code:**

```jsx
function JobList({ jobs }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {jobs.map(job => (
          <li>{job.title} at {job.company}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Identify at least two coding issues or best practices.**
**a.** What is wrong or could be improved?
*Your answer:*

1. Missing key prop in list items
In React, when rendering lists with .map(), each element should have a unique key to help React efficiently update the DOM.
Without it, you may get a warning and possible rendering performance issues.

2. Search state is unused
The search state is being updated, but it doesn’t actually affect the displayed job list.
If search is used for filter based on search input, we should apply filter before mapping.


**b.** Provide your improved code and explain your changes.

*Your improved code:*

```jsx
import React, { useEffect, useState } from "react";

function JobList({ jobs }) {
  const [search, setSearch] = useState("");
  const [filterJobs, setFilterJobs] = useState(jobs || []);

  const handleFilter = (searchValue) => {
    let value =searchValue.trim()
    let jobsArray =filterJobs.length>0?filterJobs:jobs
    if (!value) {
      setFilterJobs(jobs);
      return 
    }
    let result = jobsArray.filter((job) =>
      job.title.toLowerCase().includes(value)
    );
    setFilterJobs(result);
  };
  useEffect(() => {
    handleFilter (search);
  }, [search]);
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filterJobs.map((job) => (
          <li key={job.id}>
            {job.title} at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobList;
```
*Explanation of changes:*

1) First, I have added the key prop in list items in the map to help React efficiently update the DOM. 
2) And then I am using search to filter the list to achieve this, I have used the handleFilter function, which filters the list based on the search input change.

## 4. Performance Scenario

**In 2–3 sentences each, answer:**

**a.** Two techniques to improve performance of a job list with 500+ items:

1) For a large job list, use list virtualisation (e.g., react-window) so only visible items are rendered at a time.
2) We can implement pagination to load data in chunks instead of all 500+ items at once.


**b.** How to avoid unnecessary re-renders in a job card component:

To avoid unnecessary re-render, wrap the job card component with React.memo so it only re-renders when props change.
If any prop or function is passed on the job card component, use useMemo or useCallback to memoized it.

## Submission Checklist

- [ ] Fork the repo
- [ ] App source code (GitHub link or ZIP)
- [ ] Written answers (README.md or PDF)
- [ ] Setup instructions
- [ ] (Optional) Notes on improvements/future work


## Evaluation Criteria

- Functional and feature completeness
- Code quality, structure, and reusability
- Handling of edge cases, loading, and errors
- UI/UX and accessibility
- Clarity and depth of written answers

**Good luck!**

