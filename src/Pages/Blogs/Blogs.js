import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center p-2">
        Answer to the <span className="text-primary fw-bold">Question</span>
      </h1>

      <div className="container mt-4">
        <h3 className="mb-4">
          1.How will you improve the performance of a React Application?
        </h3>
        <p>
          Keeping component state local where necessary.Memoizing React
          components to prevent unnecessary re-renders.Code-splitting in React
          using dynamic import Windowing or list virtualization in React. Lazy
          loading images in React. Detecting wasted Renders in a React 16 using
          React performance optimization tools. Detecting unnecessary rendering
          of components by using “Why did you update” library. React performance
          tuning by fixing unnecessary rendering of components in React.
        </p>

        <h3 className="my-4">
          2.What are the different ways to manage a state in a React
          application?
        </h3>
        <p>
          The state helps in keeping the data of different components in sync
          since each state update will re-render all relevant components. It can
          also act as a medium to communicate between various components.
          Managing state is one of the hardest parts of any application, and
          that is why there are so many state management libraries/tools
          available, including Redux, MobX, Flux, RxJS, and more. 5 different
          ways to manage a state in a React application? Communication State. .
          Data State. Control State. Session State. Location State. Conclusion
        </p>

        <h3 className="my-4">3.How does prototypical inheritance work?</h3>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object. getPrototypeOf and Object. Prototype-based programming is
          a style of object-oriented programming in which behaviour reuse (known
          as inheritance) is performed via a process of reusing existing objects
          that serve as prototypes. This model can also be known as prototypal,
          prototype-oriented, classless, or instance-based programming.
        </p>
        <h3 className="my-4">
          4.Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h3>
        <p>
          While a React component can have initial state, the real power is in
          updating its state — after all, if we didn't need to update the state,
          the component shouldn't have any state. State is only reserved for
          data that changes in our component and is visible in the UI. So, when
          you mutate the state directly and call setState() with an empty
          object. The previous state will be polluted with your mutation. Due to
          which, the shallow compare and merge of two states will be disturbed
          or won't happen, because you'll have only one state now.
        </p>
        <h3 className="my-4">
          5. You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h3>
        <p>
          এ্যারে ম্যাপ চালিয়ে করতে হবে। অনেকগুলো প্রোডাক্ট এর মধ্যে এ্র্যরে
          আইটেম চালিয়ে ম্যাপ করে েএকটি নিদিষ্ট প্রোডাক্ট পাইতে পারি।
        </p>
        <h3 className="my-4">
          6. What is a unit test? Why should write unit tests?
        </h3>
        <p>
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. One of the benefits of unit tests
          is that they isolate a function, class or method and only test that
          piece of code. Higher quality individual components create overall
          system resiliency. Thus, the result is reliable code. Unit tests also
          change the nature of the debugging process.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
