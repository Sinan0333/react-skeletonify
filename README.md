[![npm version](https://img.shields.io/npm/v/react-skeletonify.svg)](https://www.npmjs.com/package/react-skeletonify)
[![npm downloads](https://img.shields.io/npm/dm/react-skeletonify.svg)](https://www.npmjs.com/package/react-skeletonify)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# ⚡ React Skeletonify

A **lightweight and flexible skeleton loader** for React, built to make loading states feel smooth and natural.  
Unlike traditional static skeletons, **React Skeletonify** adapts to your components dynamically — letting you configure animations, styles, and exclusions globally or per-component.

## 🎮 Live Demo

👉 [Try it here](https://playcode.io/2556254)

## ✨ Features

- 🎨 **Global & local configuration** with `SkeletonProvider` and `SkeletonWrapper`
- ⚡ **Smooth animations** with multiple presets
- 🛠️ **Highly customizable** styles, backgrounds, borders, and speed
- 🧩 Works with **any React component**
- 🧃 Exclude tags or groups (text, form, media, etc.) from skeleton rendering
- 🪶 Lightweight, no external dependencies

## 🚀 Installation

```bash
npm install react-skeletonify
# or
yarn add react-skeletonify
```

Import styles once:

```tsx
import "react-skeletonify/dist/index.css";
```

## 🔥 Quick Example

```tsx
import React from "react";
import { SkeletonProvider, SkeletonWrapper } from "react-skeletonify";
import "react-skeletonify/dist/index.css";

function App() {
  return (
    <SkeletonProvider
      config={{
        animation: "animation-1",
        borderRadius: "8px",
        animationSpeed: 3,
      }}>
      <SkeletonWrapper loading={true}>
        <div style={{ height: "120px", width: "400px", padding: "10px" }}>
          <div
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "100%",
              marginBottom: "10px",
            }}></div>
          <h6>React Skeletonify</h6>
          <p>This is an example with global provider config 🚀</p>
        </div>
      </SkeletonWrapper>
    </SkeletonProvider>
  );
}

export default App;
```

## ⚙️ API

### 🔹 `SkeletonProvider`

Provides **global configuration** for skeletons. Wrap your app (or part of it) in this provider.

| Prop     | Type                      | Default | Description            |
| -------- | ------------------------- | ------- | ---------------------- |
| children | `ReactNode`               | `null`  | Child components       |
| config   | `Partial<SkeletonConfig>` | `{}`    | Global skeleton config |
| style    | `CSSProperties`           | `{}`    | Inline style overrides |

---

### 🔹 `SkeletonWrapper`

Wraps **specific content** and applies skeletons when `loading` is true.  
It can **inherit** from `SkeletonProvider` or override per instance.

| Prop           | Type                      | Default | Description            |
| -------------- | ------------------------- | ------- | ---------------------- |
| loading        | `boolean`                 | `false` | Show skeleton if true  |
| children       | `ReactNode`               | `null`  | Content to render      |
| overrideConfig | `Partial<SkeletonConfig>` | `{}`    | Override global config |
| style          | `CSSProperties`           | `{}`    | Inline style overrides |

---

## 🎨 Configuration Options (`SkeletonConfig`)

| Key             | Type                             | Default         | Description          |
| --------------- | -------------------------------- | --------------- | -------------------- |
| animationSpeed  | `number`                         | `3`             | Speed of animation   |
| background      | `string`                         | `#aeaeae`       | Background color     |
| border          | `string`                         | `"none"`        | Border style         |
| borderRadius    | `string \| number`               | `"0"`           | Border radius        |
| textTagsMargin  | `string`                         | `"0"`           | Margin for text tags |
| className       | `string`                         | `""`            | Custom class         |
| style           | `CSSProperties`                  | `{}`            | Inline styles        |
| animation       | `"animation-1" \| "animation-2"` | `"animation-1"` | Animation type       |
| exceptTags      | `string[]`                       | `[]`            | Excluded HTML tags   |
| exceptTagGroups | `HtmlTagGroup[]`                 | `[]`            | Excluded tag groups  |

**Available Tag Groups:**  
`TEXT_TAGS`, `STRUCTURE_TAGS`, `METADATA_TAGS`, `LIST_TAGS`, `TABLE_TAGS`, `FORM_TAGS`, `MEDIA_TAGS`, `INTERACTIVE_TAGS`, `MISC_TAGS`

---

## 📦 Example with `exceptTags`

```tsx
<SkeletonWrapper
  loading={true}
  overrideConfig={{
    exceptTags: ["img", "button"],
    borderRadius: "6px",
  }}>
  <div>
    <img src="/profile.jpg" alt="Profile" />
    <h2>Hello World</h2>
    <button>Click me</button>
  </div>
</SkeletonWrapper>
```

👉 In this case, the `img` and `button` will not be skeletonized.

## 📌 Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [versions](https://www.npmjs.com/package/react-skeletonify?activeTab=versions).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 🎉  
Feel free to open a PR or an issue.

## 👨‍💻 Author

- **Sinan** - [GitHub](https://github.com/Sinan0333) · [Portfolio](http://sinan-dev.in)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
