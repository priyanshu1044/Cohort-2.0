// //readonly 
// type User={
//     readonly name:string;
//     readonly age:number;
// }

// let user:User={
//     name:"John",
//     age:30
// }

// user.name="Jane"; //error

// =========================================

//readonly 
type User={
    name:string;
    age:number;
}

let user:Readonly<User>={
    name:"John",
    age:30
}

user.name="Jane"; //error


// =========================================

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.