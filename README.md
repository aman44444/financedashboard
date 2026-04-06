#  Finance Tracker Dashboard

A modern, minimal **Finance Tracking Dashboard** built with React, designed with a clean SaaS-style UI and scalable architecture.
Track income, expenses, and gain insights with an intuitive and responsive interface.

---

##  Features

###  Dashboard

* Overview of **total balance, income, expenses**
* Visual comparison of **Income vs Expense**
* Category-wise spending breakdown
* Recent transactions preview

###  Transactions

* Add, edit, and delete transactions *(Admin only)*
* Filter and sort transactions
* Category-based organization
* Clean and responsive table UI

###  Insights

* Total transactions, income, expense
* Average transaction value
* Most frequent category
* Highest income & expense tracking

### Role-based UI

* **Admin**

  * Full control (Add / Edit / Delete)
* **Viewer**

  * Read-only access

Toggle role using a smooth **slide switch**

---

##  UI & Design

* Minimal SaaS-inspired design
* Built with **Tailwind CSS + CSS Modules**
* Clean typography using **Inter font**
* Subtle color system:

  * Green → Income
  * Gray → Expense
* Fully responsive (mobile-first)

---

##  Tech Stack

* **React**
* **React Router**
* **Context API + useReducer**
* **Recharts** (for charts)
* **Tailwind CSS**
* **CSS Modules**

---

##  Folder Structure

```
src/
│
├── components/
│   ├── Navbar
│   ├── Switch
│
├── context/
│   ├── finance/
│   ├── transactions/
│
├── features/
│   ├── dashboard/
│   │   ├── components/
│   │   ├── pages/
│   │
│   ├── transactions/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │
│   ├── insights/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│
├── data/
├── utils/
```

---

##  Architecture Highlights

* **Single source of truth** using Context API
* Feature-based folder structure
* Separation of concerns:

  * UI → Components
  * Logic → Hooks
  * State → Context

---

##  Concepts

* Scalable frontend architecture
* State management using `useReducer`
* Reusable UI design system
* Role-based rendering
* Data visualization with charts
* Clean and maintainable component structure

---

##  Responsiveness

* Optimized for:

  * Desktop
  * Tablet
  * Mobile
* Navbar adapts with centered layout + scrollable links
* Tables adapt for smaller screens


---

##  Why this project?

This project focuses on:

* Real-world frontend architecture
* Clean UI/UX design principles
* Production-level component structure