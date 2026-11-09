# Type Alias vs Interface in TypeScript

## Introduction

In TypeScript, we use both `type` and `interface` to define the structure of data. At first, they may look almost the same because both can describe an object. But there are some differences in how they work. Let's understand them with examples.

## Explanation

First, an **interface** is commonly used to describe the structure of an object. We can also extend one interface with another interface using the `extends` keyword.

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Akash",
  age: 25,
  role: "admin"
};
```

Here, `Admin` gets the `name` and `age` properties from `User` and adds a new property called `role`.

Now, a **type alias** is created using the `type` keyword. It can also describe an object, but it can do more things, such as creating union types.

```ts
type ID = string | number;

let userId: ID = 101;
userId = "USER-101";
```

Here, `userId` can store either a string or a number. We can also use `type` with an intersection (`&`) to combine object types. Another difference is that interfaces with the same name can be merged by TypeScript, but type aliases cannot be declared again with the same name.

## Conclusion

So, both `type` and `interface` are useful in TypeScript. I would use `interface` when defining object structures that may need to be extended. For union types and other type combinations, I would use `type`. There is no need to use only one everywhere; it depends on the situation.