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

**c.** Describe your preferred approach to managing form state and validation in React.
*Your answer:*

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

**b.** Provide your improved code and explain your changes.

*Your improved code:*

*Explanation of changes:*

## 4. Performance Scenario

**In 2–3 sentences each, answer:**

**a.** Two techniques to improve performance of a job list with 500+ items:

**b.** How to avoid unnecessary re-renders in a job card component:

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

