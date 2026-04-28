# 🧩 my-store

Lightweight state manager with concurrent-safe React bindings and built-in devtools.

---

## 🎯 What for

This project explores how modern state management works under the hood:

* How external stores integrate with React 18
* How to avoid unnecessary re-renders
* How concurrent rendering affects subscriptions
* How devtools can be implemented from scratch

---

## ✨ Features

* Minimal core (~no dependencies)
* Selector-based subscriptions
* Concurrent-safe updates via `useSyncExternalStore`
* Built-in devtools (history + timeline)
* Monorepo architecture (core / react / devtools)

---

## 📦 Packages

```
packages/
  core        → framework-agnostic store
  react       → React bindings (useStore)
  devtools    → devtools + UI
```

---

## 🖥 Demo

Run locally:

```bash
npm install
npm run dev
```

---

## 🎬 Example

```ts
const count = useStore((state) => state.count);
```

---

## 🧬 Architecture

```
Store → Selector → Snapshot → React
```

* **Store** — holds state and notifies listeners
* **Selector** — extracts slice of state
* **Snapshot** — stabilizes value between renders
* **React** — subscribes via `useSyncExternalStore`

---

## ⚛️ React Integration

The library uses `useSyncExternalStore` to ensure:

* consistency in concurrent rendering
* no tearing between renders
* stable snapshots

---

## 🛠 Devtools

Includes a simple devtools panel:

* action history
* state snapshots
* timestamps

---

## 🎓 Goals

* a learning-focused implementation
* a demonstration of architecture

---

## 🔍 Comparison

| Feature           | This project | Zustand | Redux  |
| ----------------- | ------------ | ------- | ------ |
| Minimal core      | ✅            | ✅       | ❌      |
| Built-in devtools | ✅            | ⚠️      | ✅      |
| Boilerplate       | Low          | Low     | High   |
| Learning value    | High         | Medium  | Medium |

---

## 🧪 Status

Initial version — core functionality implemented.

---

## 📄 License

MIT
