---
id: guidelines-coding-standards
title: Coding Standards
---

# Coding Standards

This section outlines the coding standards for the PEC application. Adhereing to these standards ensures consistency, readability, maintainability, and enables collaboration among developers.

### Indentation and Spacing

*   **Indentation:** Use 2 spaces for indentation. This helps keep the code compact and more readable
*   **Spacing:** Maintain consistent spacing around operators and after commas. For example:

```
const sum = (a, b) => a + b;
```

### Naming Conventions

*   **Variables, Props, Methods and Functions:** Use camelCase to align with JavaScript's standard practice.
    *   **Example:** `myVariable`or `getUserData`
*   **Constants:** Use UPPER\_CASE\_SNAKE\_CASE to distinguish constants from other variables, as well as indicate that their values should not change. Choose descriptive names that convey the purpose of the constant.
    *   **Example** `API_URL` or `DEFAULT_LANGAUGE`
*   **Hooks:** Use camelCase and add "use" to the filename
    *   **Example:** `useSearch.tsx`
*   **Providers:** Use camelCase and add "Provider" to the filename
    *   **Example:** `searchProvider.tsx`
*   **Custom Styles:** Use lowercase snake\_case to differentiate these identifiers and ensure styles are easily indentifiables and manageable within the codebase.
    *   **Example:** `button_label` or `profile_card`

### Imports and Exports

*   Group imports logically:
    
    *   External libraries first (e.g. React, Axios)
    *   Then internal modules of components
    *   Example:
    
    ```
    import React from 'react';
    import axios from 'axios';
    import UserProfile from '../components/UserProfile';
    ```
    
*   Exporting Modules:
    
    *   Prefer default exports for single entities (e.g., components).
    
    ```
    export default function UserProfile() { /* ... */ }
    ```
    
    *   Use named exports when exporting multiple items from a module.
    
    ```
    export const API_URL = 'https://api.example.com';
    export const fetchData = () => { /* ... */ };
    ```

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).
