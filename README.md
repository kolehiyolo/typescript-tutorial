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

Lesson 11: The DOM & Type Casting
* Now this is an interesting lesson that dives into how the DOM works with TypeScript and something that I can definitely use
* TypeScript allows for awesome IDE DX when working with the DOM, but it only works when you follow the script but albeit helpful syntax
* First off, surprisingly, TypeScript actually has unique types for all kinds of HTML tags, as an example, <form> elements are under the HTMLFormElement type, <input> elements are under the HTMLInputElement, and <a> elements are under the HTMLAnchorElement
  * Clearly it's not gonna be straightforward to determine the actual name of the types, such as with the <a> element, so I might have to look into the options, but I believe VSCode's IntelliSense can help with this pain-point
* Now once an element has been fetched, IntelliSense can then help you significantly by narrowing down the stuff you can do with the element, such as calling methods or fetching property values (since DOM elements are returned as objects)
* One pitfall is before you can do these things with the fetched element, you have to first make sure that the DOM fetch will not return null/undefined, and this can be done by adding '!' to the end of the call before the semi-colon, or by defining the expected element's type with 'as (HTML Element Type)'
  * Examples are:
    * const anchor = document.querySelector('a')!;
    * const anchor = document.querySelector('a') as HTMLAnchorElement;
  * Unless this is done, TypeScript will assume that the fetch may return a null if no such element is found in the DOM, so it will preventively not allow you to run any methods or fetch values from the element, such as with this example:
    * console.log(anchor.href);
    * The sample code will not be accepted by TypeScript since it believes that it's a possibility that no <a> element is found in the DOM, so the '!' kinda tells TypeScript 'Oh no trust me there is one'
    * Not sure why, but also explicitly declaring the type of the element with 'as HTMLAnchorElement' does the same thing as '!' in this particular scenario
* An interesting oddity I noticed is when the addEventListener example is shown, wherein typically this expects 2 parameters, the type of event-listener being added to the element ('click', 'submit', etc), then a callback function
  * This callback function then expects an event parameter which is then usually used as meta-data describing the event detected
  * What's interesting is the event parameter is expected to have a unique TypeScript type of 'Event'
  * Idunno it's just cool I think lol and I suppose it is nice to have this explicitly stated for extra readability
* Overall, besides this lesson and the YouTube videos being systematically recommended to me by the Algorithm about TypeScript, my appreciation for the language is growing stronger

Lesson 12: Classes
* This lesson is a great refresher on JavaScript classes, a topic that I learned but forgot to it's limited use in my day-to-day, but also on how it's different in TypeScript
  * I should really really really learn classes again, since I can't even appreciate what TypeScript classes does better 
* With this refresher and since having come so far in coding I realized that classes and Mongoose/MongoDB schemas can be treated as a similar thing, where classes/schemas define what the expected properties of objects/documents are
  * Sort of like templates for data, making sure that you can have a uniform label and structure for each data entry
* I do this a lot but never really felt the need to definitively use classes, so I'll look into use cases
* Overall, this has led me to want to review classes

Lesson 13: Public, Private & Readonly
* We're getting more into classes, and more importantly into access modifiers to certain data
* Since last night, I've been doing back-and-forths with ChatGPT to better understand OOP since it's been a while and barely use the principles I've learned
* Throughout this process, I appreciated and learned more about Encapsulation, Inheritance and Polymorphism
* Encapsulation, in particular, is relevant to this lesson since it describes the process of defining the limits/rules on how data within classes/objects are accessed/modified
* In this lesson, for example, it clearly defines certain rules for how data in the Invoice class can be accessed
* Public properties can be read and modified in-and-out of the class implementation
* Readonly properties can only be read in-and-out of the class implementation and there's no way to modify the value once instantiated
* Private properties can only be read and modified inside of the class implementation, which means you have to set methods/interfaces that manipulate/access the Private property, which will then be called outside of the implementation
* Yeah I get Encapsulation yey

Lesson 14: Modules
* Modularizing code has been introduced in this lesson
* Nothing groundbreaking here since I already know enough about it from using Node.js and React.js
* Something to keep in mind though is while I am writing in TypeScript and expect to import code from a TS file, I must actually call it as a JS file
* This is because once the TS files are compiled, they will be JS files, and the import call for a TS file won't be translated to call a JS file
* Beyond that, import/export rules seem to be identical to how I use it with React.js

Lesson 15: Interfaces
* Okay so Interfaces
* At a first glance, Interfaces and Classes seem to function the same way, but I guess the way they're used syntactically is the difference
* When you create a Class and use it, you basically 'create' or 'instantiate' a new object based on the Class
* When using an Interface, on the other hand, you can straight up declare an object and just notate it with the Interface as if it's a type
* Beyond that, I legit don't quite see why you would use one or the other, so I checked with ChatGPT
* Apparently, Classes can do so much more than Interface, such as allowing for inheritance and accessibility modifiers (public, private, readonly)
* So yeah, I don't get why Interfaces exist
* Also, I'm pretty sure you can also just create a new 'type' alias that you can then use to make sure your object follows the set rules
* Well The Net Ninja says that we'll use it more in the coming lessons along with classes so we'll see if I get it then

Lesson 16: Interfaces with Classes
* So, still not entirely sure what use Interfaces are
* In the lesson the "implements" keyword is introduced, which is a way to use the rules from an Interface on a Class
* I guess you can think of Interfaces as just "rules", rules that can then be applied to multiple Classes if you want through "implements"
* Either way, I went ahead and rebuilt my app.ts just so it's cleaner
* I sort of understand the functionality expected for the test project, so my app.ts now works the ff way:
  * A docs array is set, expecting only documents with the HasFormatter interface
  * A submit listener is placed on the form
  * processSubmit() is called when the submit listener is triggered
  * processSubmit() calls fetchData(), getting the data from the inputs and placing it on an object that follows the Data interface
  * This fetchedData is then passed as a parameter to createDocument(), which then creates a newDocument based on the fetchData.type
    * If 'invoice', it creates a new Invoice
    * If anything else (which is basically the 'payment' option), it creates a new Payment
  * This new object is then returned and is assigned to the newDocument variable
  * newDocument is then pushed to the docs array
  * Then, presentDocuments() is called, which simply runs through all items under docs and calls format() for each
* This was a good exercise on Functions in TypeScript, but I need lots more practice beyond this

Lesson 17: Rendering an HTML Template
* So in this lesson, we explored how to manipulate the DOM when it comes to adding new elements to the page
* The implementation in the tutorial is interesting, where we created a Class for the List itself, but not for the list items
* When the ListTemplate instance is created, we then call the render() method passing on the latest created document to render a new <li> element into the list instance
* It's weird and I'm not sure if it's how I would do things, but that may be because I'm used to creating objects/instances of HTML elements via React
* This lesson is nice to know, but I'm not sure if I'll make full use of it considering I do React

Lesson 18: Generics
* Another interesting TypeScript specific quirk that I'm not sure what I'll use for lol
* As I understand, Generics allow for remembering any data type passed when creating instances from a Class or when using interfaces
* I can't explain it beyond that honestly and I just hope to better understand why I ought to learn and keep this in mind once I get to actually building my projects

Lesson 19: Enums
* So I like enums
* I can see using enums when establishing "categories" or "tags" for objects
* For example, when I have products, while I can use classes to put them under more specified umbrellas of categorization, it's inevitable that some of the products will still have shared attributes/characteristics
* Using enums, I think, will help with this
* I think the best use for it that I can see is for my portfolio, wherein I will have lots of projects, each of which will have "built with" data which is expected to list down all the tech/skills used to build the project
* This data will come from an enum, and some projects inevitably will have the same tech/skill used
* Beyond that, I'm not sure what the use case will be, so I'll just have to revisit this

Lesson 20: Tuples
* So tuples is another built-in type in TypeScript
* Tuples are simply arrays with the types of each index predefined, that's it
* For example, if a tuple is predefined to have [string, number, boolean], you can't push a number into index 0 or index 2
* You can replace the values all you want, as long as the new value fits the type predefined
* In this example, only 3 indexes have been defined, and based on my testing, this means you can't push another value into the array
* This is kinda cool as it limits the values pushed into the array into a predefined limit
* Beyond that, I'm not sure what use tuples will be for me, since I'm not a fan of having multi-typed arrays anyways
* I'd rather use objects in most of the use case scenarios where multi-typed arrays are used, as this way, there's a clearer definition of what each value is

Lesson 21: Wrap Up
* So yeah, TypeScript is cool
* I can definitely see it being important in my day-to-day, same way with SASS
* That being said, I'm not entirely sure yet how I would use it with the rest of my tech stack, as the use cases presented in the tutorial are so self-contained in just replacing vanilla JS in a vanilla HTML+CSS environment
* Also, I did some CodeWars challenge and I found that a lot of other solutions don't even use TypeScript's typing inside the functions very much lol
* They only use it to declare the return type, and I think that's it lol
* As the tutor says, the next best steps is to check out the TypeScript documentation, and also his Webpack+TypeScript tutorials
* Beyond all that, building a project is defo the best way to go