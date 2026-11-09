# Combining Union and Intersection Types in TypeScript

## Introduction

In TypeScript, we can use union and intersection types when working with multiple types. Both use special symbols, but they have different purposes. Union uses `|`, while intersection uses `&`. Let's understand how they work with simple examples.

## Explanation

First, a **union type (`|`)** means a value can be one type or another. For example, an ID can be either a number or a string.

```ts
type ID = number | string;

let userId: ID = 101;
userId = "USER-101";
```

Here, `userId` can store either a number or a string. However, assigning a boolean will cause a TypeScript error.

Now, an **intersection type (`&`)** combines multiple types. The final object must contain the properties of all combined types.

```ts
type User = {
  name: string;
  email: string;
};

type Admin = User & {
  role: string;
};

type Editor = User & {
  department: string;
};

type Staff = Admin | Editor;
```

Here, `Admin` and `Editor` both contain the properties of `User`. The `Staff` type uses union, so a staff member can be either an Admin or an Editor. This example combines both concepts in a simple way.

## Conclusion

Union means a value can be one type or another, while intersection combines multiple types into one. We can use union when there are different possible types and intersection when we want to combine properties from multiple types.