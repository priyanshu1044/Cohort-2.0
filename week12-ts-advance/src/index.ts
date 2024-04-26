interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
  }
  
  // Pick is a utility type that allows you to create a new type by picking the properties you want to include in the new type
  type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

  // Partial is a utility type that makes all properties of an object optional
  type UpdatePropsOptional = Partial<User>;


  
  const updateUserProfile = (user: UpdatePropsOptional) => {

  };

  updateUserProfile({ name: 'John'});


  