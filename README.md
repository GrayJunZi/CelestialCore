# Learn React

---

Udemy - The Ultimate React Course 2024: React,Redux & More

# 一、基础(Foundamentals)

## 1. React 初探

- 为什么使用 React？
- 什么是 React？
- React 与原生 js 对比？
- 设置 React 开发环境？

单独使用普通的 JavaScript 构建一个复杂的前端，需要大量的直接 DOM 遍历和操作，甚至会有文本和 CSS 样式的操作。在一个复杂的应用程序中，这将会是一个噩梦，因为我们的代码会随着时间的推移变得非常复杂和难以理解。

在典型的 JavaScript 应用程序中，简单的文本和数字等状态通常被简单地存储在 DOM 中。

前端框架存在的根本原因是保持用户界面和数据同步真的很难，所以基本上像 React 或 Vue 这类的框架把数据和用户界面同步的艰苦工作从开发身上带走，他们解决了非常难的问题。这样开发人员就可以专注于数据和构建用户界面了。

### 什么是 React？

React 是一个用于构建用户界面的 JavaScript 库。

React 是由 FACEBOOK 创建的极受欢迎的、声明性的、基于组件的、状态驱动的用于构建用户界面的 JavaScript 库。

- Based on components - 组件是 React 中用户界面的构建块(building blocks)。
- Declarative - 为了描述每个组件的样子以及它是如何工作的，使用了名为`jsx`的特殊声明语法。用于告诉 React 组件是什么样的，整个界面基于当前状态。React 是一种抽象方式，从而不需要直接操作 DOM。`jsx`结合了 html、css、js 的部分内容、也允许我们引用其他 React 组件。
- State-driven - React 的主要目标是保持 UI 和数据的同步。我们将数据称作状态(state)，React 将使用 jsx 编写的组件呈现在用户界面上，每当状态改变时，React 将自动重新呈现用户界面以显示最新状态。React 通过重新渲染来对状态做出反应。
- JavaScript Library - React 实际上只是一个库，尽管我们一直称作框架，因为 React 本身实际上只是所谓的视图层，所以如果我们想构建一个完整的真实世界应用程序，我们需要选择多个外部库来添加到我们的项目中，例如路由或数据获取。
- Extremely popular - React 是迄今为止使用最多的框架，很大的原因是许多大公司很久以前就采用的 React，所以越来越多的公司都在追随他们的脚步。

- 根据 Web 界面上的组件的当前状态将其渲染(rendering)到用户界面(UI)。
- React 通过在状态变化时重新呈现 (反应)，使 UI 与状态保持同步。

### 设置开发环境

安装 VSCode 插件

- ESLint
- Prettier - Code formatter

### 创建 React 项目的工具

**create-react-app** 是 React 应用程序的完整初学者工具包，使开发人员很容易搭建新项目的脚手架。好处是常见的开发工具已经预先配置好了，所以使用 `create-react-app` 创建的应用程序会自动附带开发服务器。缺点是该项目使用 webpack 构建 技术已经过时了。

**Vite** 是一个现代的构建工具，也包含了初学者模板，用于设置权限的 React 应用程序，然而使用 Vite 创建的应用程序中，不得不手动设置许多重要的开发工具。

### 创建 React 项目

**create-react-app** 是一个命令行工具(cli)，使用命令 `npx create-react-app pizza-menu` 构建项目。

## 2. JavaScript 复习

- 解构（对象属性解构、数组解构）
- 展开操作符(...arrays)
- 字符串模板(`${}``)
- 三元表达式(?:)
- 箭头函数( () => 1 )
- 短路与逻辑操作符 ( true && "result" )
- 可选链接运算符(?.)
- 数组方法（map、filter、reduce、sort）
- 异步处理（promise、async await）

# 二、中级(Intermediate)

# 三、高级(Advanced React+Redux)

# 四、专业(Professional React Development)
