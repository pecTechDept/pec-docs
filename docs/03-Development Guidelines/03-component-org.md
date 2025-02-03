---
id: guidelines-component-org
title: Component Organization
---

# Component Organization

This section outlines the best practices for structuring components to ensure reusability and maintaining a scalable codebase for the PEC application.

### Organize by Feature or Functionality

Components are categorized into the following categories:

*   **Common components** are the most generic and reusable elements that can be used throughout the application, such as icons and loaders.
*   **Layout components** define the structure of the application's pages, such as headers and footers, ensuring a consistent look throughout the site.
*   **UI components** are related to the user interface but are more complex and might be used less frequently than those in the common folder, such as modals and tabs.
*   **Specific components** are tailored to particular features or pages, containing functionality unique to those areas, like user profile cards or specifalized content displays.

### Naming Conventions

*   **Component Names:** Use kebab-case for file names in the `/app` directory and PascalCase for component files.
    *   **Example:** `/app/user-profile.tsx` or `/components/UserProfile.tsx`
*   **Folder Names:** Use kebab-case for folder names if they consist of multiple word.
    *   **Example:** `user-profile`
*   **Folder Names:** Place test files next to their component files.
    
    *   **Example:**
    ```
    |-- components
    |   |-- common
    |       |-- Footer.tsx
    |       |-- Footer.test.tsx     # Test file for Footer component
    ```

### Organizing Code in a Component

Code must be properly organized within a component in order to be readable and maintainable. A well-structured component generally follows a consisitent order:

1.  **Imports:** Bring in necessary dependencies.
2.  **Type definitions (Props):** Define props and state to clarify the data the component expects and manages.
3.  **Component definition:** Outline the core core logic and rendering behavior.
4.  **Hooks:** Group hooks like `useState` and `useEffect` together at the top to handle state and lifecycle events.
5.  **Event handlers and methods:** Organize these in a section to easi;y find and modify interaction logic.

### Document Component Usage

Include documentation for each component to explain its purpose, props, and usage examples. This can be done using JSDoc comments within the component files or in a separate markdown file.

#### Example Documentation:
```
/**
 * Button component for call-to-action purposes.
 * 
 * @param {string} label - The text to display on the button.
 * @param {function} onClick - The function to call when the button is clicked.
 * @returns {JSX.Element}
 */
const CallToAction: React.FC<{ label: string; onClick: () => void }> = 
({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

Aim to keep each component small and focused on single responsibility. This makes them easier to test, reuse, and maintain.

*   If a component grows too large, consider breaking it down into smaller subcomponents.

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).