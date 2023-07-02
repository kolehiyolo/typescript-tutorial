Lesson 2: Compiling TypeScript
* TypeScript seems interesting and it's like what SASS is to CSS in the following ways:
  * It can't be read by browsers and have to be compiled to readable formats (CSS/JS)
  * This is just an assumption, but it seems like TypeScript is just a "better" way of writing Javascript in that it's more intuitive, like how SASS handles nesting of selectors, maybe TypeScript can make me write in a similarly natural way
* Compiling is pretty straightforward as I used to do it with SASS, too, and I'm pretty sure there's a VS Code extension that allows for automatic compiling anyways

Lesson 3: Type Basics
* Yeah I'm starting to get the importance of TypeScript
* So all this I've been thinking that TypeScript isn't exactly necessary since it's not like I use dynamically-typed variables anyways
* I always use my variables so that they're named properly and serve a specific function, which usually means their types are pretty much set in stone
* With this in mind, I don't really need a more strict way of writing variables so the whole premise of TypeScript is not exactly hooking me in
* But here we are, a solid argument for it, which is when passing parameters to functions
* Setting the types of the parameters when the functions are being written will make it so that every time a function is called, the parameters sent will be checked by the compiler and it doubles as quality checking
* I can't exactly recall running into such issues before to actually paint you a picture, but I vaguely remember encountering them when I was doing my snake game
* Let's see what else TypeScript can do
* Also NaN means Not-a-Number lol didn't know that

Lesson 4: Objects and Arrays
* The lesson is good and strictness with the arrays and object can really be beneficial, yes
* All my realizations have been commented in the sandbox.ts file, which proves my understanding of the topic

Lesson 5: Explicit Types
* Pretty straightforward lesson
* The lesson teaches about Explicit Typing, in which you explicitly assign types to the variable during declaration
* This way, you don't have to assign a value right off the bat but still ensure that strict typing is done for when you eventually assign a value
* You can assign an array type to a variable by doing variableName: type[], and it's recommended to declare an empty array value so array methods can be done to the variable in the future such as pushing
* You can also use mixed types for variables by declaring types with the | operator (the traditional OR operator is || so keep in mind the difference)
* Lastly, you can use the keyword "object" as a type, or if you want to specify the properties and their typing, just do a typical Mongoose-like Schema declaration

Lesson 6: Dynamic (any) Types
* Much more straightforward lesson
* Basically, you can use the "any" keyword as a type, which means you can assign a variable any type of value
* This flies in the face of what TypeScript is all about, and I think this is just done if you somehow wnat to opt out of the default behavior in which variables are implicitly assigned types
* The tutorial says this can be useful in very rare/niche scenarios, but damn I can't think of any such scenario off the top of my head