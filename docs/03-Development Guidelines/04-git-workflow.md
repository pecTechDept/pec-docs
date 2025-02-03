---
id: guidelines-git-workflow
title: Git Workflow
---

# Git Workflow

This section detailed the maintaining the apllication's repository. By following these guidelines, developers can ensure a smoother workflow when collaborating in a team environment, reducing merge issues and maintaining a clean history.

## Pulling from Origin Before Commiting and Pushing

### Importance of Pulling Before Committing

*   **Stay Updated:** Always pull the latest changes from the remote repository before making new commits. This ensures your local branch is synchronized  
    with the upstream branch, minimizing the risk of merge conflicts later on.
*   **Prevent Merge Conflicts:** By pulling first, you can integrate any changes  
    by others into your local work. This helps identify conflicts early, allowing you to resolve them before pushing your changes.

### Steps to Follow
1.  **Check Current Branch:** Ensure you are on the correct branch where you want to make changes.
    
    ```
    git checkout your-branch-name
    ```
    
2.  **Pull Latest Changes:** Run the following command to fetch and merge changes from the remote repository:
    
    ```
    git pull origin your-branch-name
    ```
    
    *   If there are conflicts, resolve them before proceeding.
3.  **Commit Your Changes:** After pulling and making updates to your code, stage and commit your changes:
    
    ```
    git add .
    git commit -m "Describe your changes here"
    ```
    
4.  **Push Your Changes:** Once the local up-to-date and your work is committed, push the changes to the remote repository:
    
    ```
    git push origin your-branch-name
    ```

### Cloning the Repository

To clone this repository and set it up on your local machine, follow these steps:

1.  **Copy the Repository URL:**
    *   Go to the Git hosting service (e.g., GitHub or GitLab).
    *   Navigate to the PEC Website repository.
    *   Click the "Code" button and copy the HTTPS URL.
2.  **Clone the Repository:**
    *   Open Visual Studio Code.
    *   Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
    *   Select `Git:Clone` and paste the repository URL.
3.  **Choose a Location:**
    *   Select a local folder where the repository will be cloned.
    *   Click "Open" when prompted to view the cloned repository.
4.  **Set Up Dependencies:**
    *   Follow the project-specific setup instructions (e.g. installing Node.js dependencies of configuring envronment variables)

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).