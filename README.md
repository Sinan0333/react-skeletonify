[![npm version](https://badge.fury.io/js/react-skeletonify.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# React Skeletonify

A lightweight and flexible skeleton loading component for React ⚡.  
Easily add animated skeleton loaders to any UI element.

---

## ✨ Features

- Lightweight and dependency-free
- Easy to wrap around any component
- Smooth animations
- Customizable styles

## 🚀 Installation

```bash
npm install react-skeletonify
# or
yarn add react-skeletonify
```

## Example

```jsx
import React from "react";
import { SkeletonWrapper } from "react-skeletonify";
import "react-skeletonify/dist/index.css";

function App() {
  return (
    <SkeletonWrapper loading={true}>
      <div style={{ height: "100px", width: "500px", padding: "10px" }}>
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "100%",
          }}></div>
        <h6>React Skeltonify</h6>
        <p>Example React component for creating loading skeleton</p>
      </div>
    </SkeletonWrapper>
  );
}

export default App;
```

## ⚙️ API

### SkeletonWrapper

|   Prop   |   Type    | Default |                Description                |
| :------: | :-------: | :-----: | :---------------------------------------: |
| loading  |  boolean  |  false  | Whether to show skeletons or real content |
| children | ReactNode |  null   |  Content you want wrapped with skeletons  |

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [versions](https://www.npmjs.com/package/react-skeletonify?activeTab=versions).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a PR or issue.

## Authors

- **Sinan** - _Software Developer_ - [Portfolio](http://sinan-dev.in)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
