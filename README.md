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

Lesson 7: Better Workflow & tsconfig
* The lesson dives into how exactly TypeScript file management works in actual projects
* You can keep using per-file compiling and watching using tsc -w file.ts, but you can instead initialize a tsconfig.json file which will have the settings adjustable to your needs to determine how the compiler works
* Adjust the "rootDir" and "outDir" properties to dictate where to find the .ts files to compile and where to plop the .js output
* Then do tsc -w, which will watch and compile all .ts files into .js equivalents
* To further ensure that only the .ts files under the "rootDir" value is watched and compiled, include a parent "include" parameter under tsconfig.json, with value ["src"] (src in this example is the value passed to rootDir)
* Interesting lesson overall, but I'm not entirely sure how well it would work in practice yet, especially with massive projects with complex folderings, so we'll see

Lesson 8: Function Basics
* Since we've already done explicit typing for all other possible variable types, this lesson focuses on the Function type
* Unlike the rest, the Function keyword must be capitalized
* All arrow functions set to variables will then implicitly declare that variable as a function type, and can't be assigned non-function values moving forward
* The interesting thing now is, you can actually go ahead and assign types to a function's return value
* This is pretty cool since it follows the usual function typing in other languages that I've used, particularly C, C++ and C#, and is good to better dictate what a function's, well, intended "function" is
* For example, while we can name a function to explain what it does and even write comments to detail this, having the return value's type further makes reading code easier and will certainly help avoid function chain errors
* Also, any variable that is assigned a function's return value implicitly takes the type of said return value, for example, let result = minus(10, 7), in which minus()'s return value type is number, sets result to be of type number
* I think that's it overall

Lesson 9: Type Aliases
* Type Aliases are basically a way to shorthand type declarations with the type keyword
* It's like creating variables with types for values, ie type StringOrNum = string | number
* What the above code does is creates a variable that represents the type union string | number
* Now when you declare a variable that needs the typing string | number, you can just declare it with type StringOrNum
* Honestly I don't know exactly how I would make use of this as I don't even imagine using union typing for variables (I never use multi-type variables)
* The greatest power of this is when setting typing for objects, in which you can explicitly determine typing for objects being passed as parameters to functions
* THis way, you're guaranteed to get the correct parameters when performing object/array related manipulations in a function

Lesson 10: Function Signatures
* Function Signatures is a way to further break down the typing of Functions in that you can explicitly determine what a function's acceptable paramater and return value typings are
* This way, if you don't know yet what a function is expected to do but you already know what its parameters and return values are, you can set the typing for those
  * Another absurdly niche use-case that I can't see myself utilizing, tbh
* Not much else to explain besides what I just said