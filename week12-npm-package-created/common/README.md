# Common Package 📦

This package contains common code used by both the backend and frontend projects.

## Installation
```bash
npm i @priyanshu1044/common
```

## Backend

For the backend, we use the `zod` library to define the schema for user sign-up data in the `signup.ts` file.

```typescript
import { z } from 'zod';

const {success} = signupInput.safeParse(req.body);

```

This ensures that the username and password passed to the sign-up function meet our validation criteria.

## Frontend

On the frontend side, we can use the `signupInput` schema defined in the common package to maintain consistency with the backend.

```typescript
import { z } from 'zod';

//use this infer type as reference for the signup function
export type signUpType = z.infer<typeof signupInput>;
```

By sharing the schema between the backend and frontend, we ensure type safety and validation consistency throughout our application.
