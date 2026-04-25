# Async Data Pipeline

This project demonstrates a small asynchronous TypeScript data pipeline that:

1. Fetches user data (simulated async source).
2. Filters and transforms active users.
3. Generates a formatted text report.

## Project Structure

```text
async_data_pipeline/
|- pipeline.ts
|- package.json
|- tsconfig.json
`- README.md
```

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Installation

```bash
npm install
```

## Run the Pipeline

```bash
npm start
```

The `start` script runs:

```bash
ts-node pipeline.ts
```

## How the Pipeline Works

### 1) Fetch Stage

`fetchUser()` returns a `Promise<User[]>` after a short delay (`setTimeout`), simulating an API/database call.

### 2) Process Stage

`processedUser(users)`:

- Filters only users where `isActive === true`
- Maps each active user into a `ProcessedUser`
- Creates a `summary` line for each user

### 3) Report Stage

`generateReport(processedUsers)` returns a `Promise<string>` and builds a report with:

- Header: `User Report`
- Count: total active users
- Body: one summary line per active user

### 4) Orchestration

`main()` orchestrates the full flow using `async/await`:

1. Await fetched users
2. Process users
3. Await report generation
4. Print report to console

Errors are caught and logged in a `try/catch` block.

## Sample Output

```text
User Report
Total Active Users: 4

User Sheetal aged 43
User Shyam aged 34
User Monika Kumari aged 76
User Shital aged 12
```

## Tech Stack

- TypeScript
- ts-node
- Node.js (CommonJS)

## Learning Focus

- Modeling data with TypeScript interfaces
- Building Promise-based async stages
- Chaining async workflow with `async/await`
- Separating fetch, transform, and report concerns
