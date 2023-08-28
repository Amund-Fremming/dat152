
**Modules:**
- Modules allow JavaScript to handle its dependencies.
- The `import` statement is used to import functions, objects, or primitives from other JavaScript files.
- The `export` statement is used to export functions, objects, or primitives from a module.
- Dynamic imports are achieved using the `import` function.
- JavaScript strict mode is enforced when working with import, export, or classes.

**Component Communication:**
- Reusable GUI components should be isolated from the rest of the code.
- Components should not cause code collisions and should communicate only through their APIs.
- Component isolation aims to prevent CSS and JavaScript from affecting other parts of the document.
- Solutions for building components include client-side frameworks (React, Vue, etc.) and web components using standard JavaScript.
- Web components use the shadow DOM to achieve true isolation.
- Shadow DOM is invisible and independent of the main document.
- Components can communicate through a common parent, and parent-child relations allow communication in one direction.

**HTML Templates and Modules:**
- HTML templates can be used as components in standard JavaScript.
- The `TEMPLATE` element creates a document fragment that can be used as a template for components.
- HTML modules can be loaded from JavaScript code, allowing importing HTML fragments.

**Communication Example:**
- An example involves custom tags for length conversion and reading.
- Custom tags have attributes and methods for setting values and adding callbacks.
- Components communicate through callbacks, allowing them to exchange data and trigger actions.

<br/><br/>

**Import examples**
```html
<head>
  <script src='js/main.js' type='module'></script>
</head>
```

```js
import utils from './modules/utils.js';
```

```js
export default {
  // ...
};
```

***Creating a component***
### Creating a component
```js
class CourseInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const pElement = document.createElement('p');
    pElement.textContent = 'Welcome';
    shadow.appendChild(pElement);
  }
}
customElements.define('course-info', CourseInfo);
```

### Attributes of custom tag
```html
<course-info
  data-course='DAT152'
  data-topic='JavaScript'
>
</course-info>
```

```js
class CourseInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        /* Component-specific styles here */
      </style>
      <p>Course details:</p>
      <slot name="details">
        <p>No details are given</p>
      </slot>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('course-info', CourseInfo);
```

### Adding data via slot tag
```html
<body>
  <course-info>
    <div slot="details">
      <p>Course name: DAT152</p>
      <p>Instructor: John Doe</p>
      <!-- You can add more content here -->
    </div>
  </course-info>
</body>
```

**Component Communication**
### Setting up communication
```js
constructor() {
  this.#metricElement.addCallback(this.#metricInput);
  this.#imperialElement.addCallback(this.#imperialInput);
}
#metricInput(meters) {
  const feet = utils.metresToFeet(meters);
  this.#imperialElement.setValue(feet);
}
#imperialInput(feet) {
  const meters = utils.feetToMetres(feet);
  this.#metricElement.setValue(meters);
}
```







