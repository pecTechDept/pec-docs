---
id: guidelines-git-standards
title: Git Standards
---

# Git Standards

This section establishes clear Git standards for maintaining a consistent and organised workflow. The following guidelines cover branch naming conventions, commit message formats, and best practices for pull requests.

### Branch Naming

This application uses a simple branching approach, with the main branch for production and with feature branches for development work.

| Branch | Description |
| --- | --- |
| main | For production-ready code |
| feat/\* | For adding, refactoring or removing a feature |
| bugfix/\* | For fixing issues found in master/main |
| hotfix/\* | For urgent production fixes |

When creating branches, use clear and descriptive naming convention to identify the purpose of the branch. The description should be short and in kebab case.

*   **Example:** `feature/add-contact-form`

### Commit Messages

Follow the Convention Commits standard for writing commit messsages. This helps in generating changelogs and understanding the history of changes at a glance.

*   **Format:** `[optional git emoji] <type>([optional scope]): <description>`
*   **Example:** `✨ feat(auth): add JWT-based authentication`

#### Types:

| Branch | Description |
| --- | --- |
| feat: | A new feature |
| fix: | A bug fix |
| docs: | Documentation changes only |
| refactor: | Code changes without bug fixes or new features |
| revert: | Reverting previous change |
| test: | Adding missing tests or correcting existing tests |
| chore: | About build process or auxiliary tool changes |

#### Guidelines

*   Keep messages concise bu informative
*   Limit the subject line to 72 characters or less
*   Use this guide to find the appropriate git commit message emoji: [https://gist.github.com/parmentf/035de27d6ed1dce0b36a](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)

### Pull Requests

When creating pull requests(PRs), follow these best practices to ensure clarity and facilitate effective code reviews:

#### Description:

*   Include a detailed description of the changes made in the PR.
*   Explain why the changes were made and any relevant context that reviewers should know.

#### Code Review Checklist:

*   Ensure that all code adheres to established coding guidelines and standards before requesting a review.
*   Check for proper testing coverage and include any necessary tests.
*   Make sure that all commits are well-defined and follow the commit message standards outlined above.

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).