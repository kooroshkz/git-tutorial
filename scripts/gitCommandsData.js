// Simplified git commands data for PDF generation
export const gitCommandsForPDF = [
  {
    id: "init",
    command: "git init",
    description: "Initialize a new Git repository in the current directory",
    usage: "git init",
    category: "CREATE",
    useCase: "Use this when starting a new project to track changes with Git. Creates a .git folder that stores all version control information."
  },
  {
    id: "status",
    command: "git status",
    description: "Show the working tree status - see which files are tracked, modified, added, or deleted",
    usage: "git status",
    category: "LOCAL CHANGES",
    useCase: "Check which files have been modified, which are staged for commit, and which are untracked. Use this frequently to understand your repository's current state."
  },
  {
    id: "add",
    command: "git add",
    description: "Add file contents to the staging area (index) to prepare for commit",
    usage: "git add <file> OR git add -A (add all)",
    category: "LOCAL CHANGES",
    useCase: "Stage changes before committing. Use 'git add .' to stage all changes, or specify individual files. This is like preparing a package before shipping it."
  },
  {
    id: "commit",
    command: "git commit",
    description: "Record changes to the repository with a descriptive message",
    usage: "git commit -m \"<message>\"",
    category: "LOCAL CHANGES",
    useCase: "Save your staged changes as a snapshot in the repository history. Think of it as a checkpoint in your project that you can return to later."
  },
  {
    id: "log",
    command: "git log",
    description: "Show commit logs - view the history of commits in the repository",
    usage: "git log OR git log --oneline (compact view)",
    category: "COMMIT HISTORY",
    useCase: "Review project history, see who made what changes and when. Useful for understanding how the project evolved and finding specific commits."
  },
  {
    id: "branch",
    command: "git branch",
    description: "List, create, or delete branches in your repository",
    usage: "git branch <branch-name> OR git branch -d <branch-name>",
    category: "BRANCHES & TAGS",
    useCase: "Create separate lines of development to work on features without affecting the main code. Essential for team collaboration and testing new ideas."
  },
  {
    id: "checkout",
    command: "git checkout",
    description: "Switch branches or restore files to a specific state",
    usage: "git checkout <branch-name> OR git checkout -b <new-branch>",
    category: "BRANCHES & TAGS",
    useCase: "Move between different branches to work on separate features. Use -b to create and switch to a new branch in one command."
  },
  {
    id: "merge",
    command: "git merge",
    description: "Join two or more development histories together",
    usage: "git merge <branch-name>",
    category: "MERGE & REBASE",
    useCase: "Combine changes from one branch into another, typically merging feature branches back into main. Integrates completed work into the main codebase."
  },
  {
    id: "rebase",
    command: "git rebase",
    description: "Reapply commits on top of another base branch",
    usage: "git rebase <branch-name>",
    category: "MERGE & REBASE",
    useCase: "Alternative to merge that creates a linear history. Moves your branch commits to start from the tip of another branch. Useful for keeping a clean project history."
  },
  {
    id: "clone",
    command: "git clone",
    description: "Clone a repository into a new directory",
    usage: "git clone <repository-url>",
    category: "CREATE",
    useCase: "Download a copy of a remote repository to your local machine. Use this to start working on an existing project or to make a local backup."
  },
  {
    id: "diff",
    command: "git diff",
    description: "Show changes between commits, commit and working tree, etc.",
    usage: "git diff OR git diff --staged",
    category: "LOCAL CHANGES",
    useCase: "View what has changed in your files before staging or committing. Use --staged to see changes that are already staged for commit."
  },
  {
    id: "stash",
    command: "git stash",
    description: "Temporarily save changes without committing them",
    usage: "git stash OR git stash pop",
    category: "LOCAL CHANGES",
    useCase: "Save your work temporarily when you need to switch branches but aren't ready to commit. Later retrieve it with 'git stash pop'."
  },
  {
    id: "fetch",
    command: "git fetch",
    description: "Download objects and refs from remote repository without merging",
    usage: "git fetch origin",
    category: "UPDATE & PUBLISH",
    useCase: "Download changes from remote repository but don't merge them. Allows you to review changes before integrating. Safer than git pull."
  },
  {
    id: "pull",
    command: "git pull",
    description: "Fetch from and integrate with another repository or local branch",
    usage: "git pull origin <branch-name>",
    category: "UPDATE & PUBLISH",
    useCase: "Download and merge changes from a remote repository. Use this to update your local copy with the latest changes from the team."
  },
  {
    id: "push",
    command: "git push",
    description: "Update remote repository with local commits",
    usage: "git push origin <branch-name>",
    category: "UPDATE & PUBLISH",
    useCase: "Upload your local commits to a remote repository. Essential for sharing your work with the team and backing up your code."
  },
  {
    id: "revert",
    command: "git revert",
    description: "Create a new commit that undoes changes from a previous commit",
    usage: "git revert <commit-hash>",
    category: "UNDO",
    useCase: "Safely undo a commit without rewriting history. Creates a new commit that reverses the changes, preserving the complete project history."
  },
  {
    id: "reset",
    command: "git reset",
    description: "Reset current HEAD to specified state - move or remove commits",
    usage: "git reset --hard <commit-hash> OR git reset --soft HEAD~1",
    category: "UNDO",
    useCase: "Move the branch pointer to a different commit. --hard discards changes, --soft keeps them staged. WARNING: Can rewrite history if used on pushed commits."
  },
  {
    id: "remote",
    command: "git remote",
    description: "Manage set of tracked repositories (add, remove, rename remotes)",
    usage: "git remote add <name> <url> OR git remote -v",
    category: "UPDATE & PUBLISH",
    useCase: "Connect your local repository to remote servers like GitHub. Use to add, remove, or view remote repositories that you sync with."
  }
];