📘 Today's Key Learnings:

1. Architectural Patterns vs. Design Patterns
   Architectural Pattern: High-level blueprint of a software system.
   For instance, deciding if an application will be a monolith or microservices.
   Design Pattern: Refinement within architecture, focusing on individual components.
   Examples include Singleton, Factory, or Observer patterns.
2. Understanding MVC (Model View Controller)
   Model: Represents domain object model or service layer.

View: UI or template code.

Controller: Handles presentation logic and action classes.

MVC Diagram Reference

Why MVC?

Simplifies maintenance.
Individual components are easier to understand.
Facilitates independent testing of components.
Clear separation of responsibilities. 3. Database Conceptualization
For example, a Book database where:
Book has attributes: isbn, title, author_id.
Author possesses: author_id, firstname, lastname. 4. Implementing MVC without Framework
Model: Utilize JavaBeans and a relational database (like Derby, H2, MySQL).
Controller: Deploy Servlets and configure in web.xml.
View: Craft with JSP and HTML.
Oracle's MVC Guide 5. MVC Design Patterns
Front Controller Pattern: Centralizes request processing.
Command Pattern: Encapsulates commands as objects.
Flow Manager: Manages page flow. 6. Web Development Frameworks
Frameworks simplify the complexity of web development by providing a standardized way to build and deploy applications.
Pros:
Standard architecture.
Less code to write and maintain.
Robust development practices.
Active community support.
Cons:
Many options leading to analysis paralysis.
Potential dependency on a single framework.
Risk if the framework becomes obsolete.
