export interface GitCommand {
  id: string;
  command: string;
  description: string;
  usage: string;
  useCase: string;
  steps: TerminalStep[];
}

export interface TerminalStep {
  command?: string;
  output?: string;
  explanation: string;
}

export const gitCommands: GitCommand[] = [
  {
    id: "init",
    command: "git init",
    description: "Initialize a new Git repository in the current directory",
    usage: "git init",
    useCase: "Use this when starting a new project to track changes with Git. Creates a .git folder that stores all version control information.",
    steps: [
      {
        command: "git init",
        output: "Initialized empty Git repository in /home/user/my-project/.git/",
        explanation: "Creates a new .git directory to track your project"
      },
      {
        output: "Your repository is now ready to track changes!",
        explanation: "You can now start adding files and making commits"
      }
    ]
  },
  {
    id: "status",
    command: "git status",
    description: "Show the working tree status - see which files are tracked, modified, added, or deleted",
    usage: "git status",
    useCase: "Check which files have been modified, which are staged for commit, and which are untracked. Use this frequently to understand your repository's current state.",
    steps: [
      {
        command: "git status",
        output: "On branch main\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tindex.html\n\tstyle.css",
        explanation: "Shows files that aren't being tracked yet"
      },
      {
        output: "nothing added to commit but untracked files present",
        explanation: "These files need to be added before they can be committed"
      }
    ]
  },
  {
    id: "add",
    command: "git add",
    description: "Add file contents to the staging area (index) to prepare for commit",
    usage: "git add <file> OR git add -A (add all)",
    useCase: "Stage changes before committing. Use 'git add .' to stage all changes, or specify individual files. This is like preparing a package before shipping it.",
    steps: [
      {
        command: "git add index.html",
        output: "",
        explanation: "Adds index.html to the staging area"
      },
      {
        command: "git status",
        output: "Changes to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n\tnew file:   index.html",
        explanation: "The file is now staged and ready to commit"
      },
      {
        command: "git add -A",
        output: "",
        explanation: "Or use -A to add all changed files at once"
      }
    ]
  },
  {
    id: "commit",
    command: "git commit",
    description: "Record changes to the repository with a descriptive message",
    usage: "git commit -m \"<message>\"",
    useCase: "Save your staged changes as a snapshot in the repository history. Think of it as a checkpoint in your project that you can return to later.",
    steps: [
      {
        command: "git commit -m \"Add homepage structure\"",
        output: "[main f7fde41] Add homepage structure\n 1 file changed, 20 insertions(+)",
        explanation: "Creates a commit with your staged changes"
      },
      {
        output: "Your changes are now permanently recorded in the repository history",
        explanation: "Each commit gets a unique hash (f7fde41) to identify it"
      }
    ]
  },
  {
    id: "log",
    command: "git log",
    description: "Show commit logs - view the history of commits in the repository",
    usage: "git log OR git log --oneline (compact view)",
    useCase: "Review project history, see who made what changes and when. Useful for understanding how the project evolved and finding specific commits.",
    steps: [
      {
        command: "git log --oneline",
        output: "f7fde41 Add homepage structure\na3c8e92 Initial commit\n1b2c3d4 Add README",
        explanation: "Shows a compact list of recent commits with their hashes"
      },
      {
        command: "git log",
        output: "commit f7fde41...\nAuthor: Developer <dev@email.com>\nDate:   Mon Jan 15 10:30:00 2024\n\n    Add homepage structure",
        explanation: "Detailed view shows author, date, and full commit message"
      }
    ]
  },
  {
    id: "branch",
    command: "git branch",
    description: "List, create, or delete branches in your repository",
    usage: "git branch <branch-name> OR git branch -d <branch-name>",
    useCase: "Create separate lines of development to work on features without affecting the main code. Essential for team collaboration and testing new ideas.",
    steps: [
      {
        command: "git branch feature-login",
        output: "",
        explanation: "Creates a new branch called 'feature-login'"
      },
      {
        command: "git branch",
        output: "  feature-login\n* main",
        explanation: "Lists all branches (* indicates current branch)"
      }
    ]
  },
  {
    id: "checkout",
    command: "git checkout",
    description: "Switch branches or restore files to a specific state",
    usage: "git checkout <branch-name> OR git checkout -b <new-branch>",
    useCase: "Move between different branches to work on separate features. Use -b to create and switch to a new branch in one command.",
    steps: [
      {
        command: "git checkout feature-login",
        output: "Switched to branch 'feature-login'",
        explanation: "Now working on the feature-login branch"
      },
      {
        command: "git checkout -b feature-signup",
        output: "Switched to a new branch 'feature-signup'",
        explanation: "Creates and switches to a new branch in one step"
      }
    ]
  },
  {
    id: "merge",
    command: "git merge",
    description: "Join two or more development histories together",
    usage: "git merge <branch-name>",
    useCase: "Combine changes from one branch into another, typically merging feature branches back into main. Integrates completed work into the main codebase.",
    steps: [
      {
        command: "git checkout main",
        output: "Switched to branch 'main'",
        explanation: "First switch to the branch you want to merge INTO"
      },
      {
        command: "git merge feature-login",
        output: "Updating a3c8e92..f7fde41\nFast-forward\n login.html | 25 +++++++++++++++++++++++++\n 1 file changed, 25 insertions(+)",
        explanation: "Merges feature-login changes into main branch"
      }
    ]
  },
  {
    id: "clone",
    command: "git clone",
    description: "Clone a repository into a new directory",
    usage: "git clone <repository-url>",
    useCase: "Download a copy of a remote repository to your local machine. Use this to start working on an existing project or to make a local backup.",
    steps: [
      {
        command: "git clone https://github.com/user/repo.git",
        output: "Cloning into 'repo'...\nremote: Counting objects: 100, done.\nReceiving objects: 100% (100/100), done.",
        explanation: "Downloads the entire repository to your computer"
      },
      {
        output: "Repository cloned successfully!",
        explanation: "You now have a complete copy with all history"
      }
    ]
  },
  {
    id: "pull",
    command: "git pull",
    description: "Fetch from and integrate with another repository or local branch",
    usage: "git pull origin <branch-name>",
    useCase: "Download and merge changes from a remote repository. Use this to update your local copy with the latest changes from the team.",
    steps: [
      {
        command: "git pull origin main",
        output: "remote: Counting objects: 10, done.\nUpdating a3c8e92..f7fde41\nFast-forward\n README.md | 5 +++--\n 1 file changed, 3 insertions(+), 2 deletions(-)",
        explanation: "Fetches and merges changes from remote main branch"
      },
      {
        output: "Your local branch is now up to date!",
        explanation: "All remote changes are integrated into your local code"
      }
    ]
  },
  {
    id: "push",
    command: "git push",
    description: "Update remote repository with local commits",
    usage: "git push origin <branch-name>",
    useCase: "Upload your local commits to a remote repository. Essential for sharing your work with the team and backing up your code.",
    steps: [
      {
        command: "git push origin main",
        output: "Counting objects: 5, done.\nWriting objects: 100% (5/5), done.\nTo https://github.com/user/repo.git\n   a3c8e92..f7fde41  main -> main",
        explanation: "Uploads your local commits to the remote repository"
      },
      {
        output: "Your changes are now available to everyone!",
        explanation: "Team members can now pull your changes"
      }
    ]
  },
  {
    id: "revert",
    command: "git revert",
    description: "Create a new commit that undoes changes from a previous commit",
    usage: "git revert <commit-hash>",
    useCase: "Safely undo a commit without rewriting history. Creates a new commit that reverses the changes, preserving the complete project history.",
    steps: [
      {
        command: "git log --oneline",
        output: "f7fde41 Add buggy feature\na3c8e92 Previous work",
        explanation: "Find the commit hash you want to revert"
      },
      {
        command: "git revert f7fde41",
        output: "[main 8x9y0z1] Revert \"Add buggy feature\"\n 1 file changed, 10 deletions(-)",
        explanation: "Creates a new commit that undoes the changes"
      },
      {
        output: "The bad changes are undone, history is preserved",
        explanation: "Safe way to undo changes in a shared repository"
      }
    ]
  },
  {
    id: "reset",
    command: "git reset",
    description: "Reset current HEAD to specified state - move or remove commits",
    usage: "git reset --hard <commit-hash> OR git reset --soft HEAD~1",
    useCase: "Move the branch pointer to a different commit. --hard discards changes, --soft keeps them staged. WARNING: Can rewrite history if used on pushed commits.",
    steps: [
      {
        command: "git log --oneline",
        output: "f7fde41 Latest commit\na3c8e92 Previous commit\n1b2c3d4 Older commit",
        explanation: "View commits to find where to reset to"
      },
      {
        command: "git reset --hard a3c8e92",
        output: "HEAD is now at a3c8e92 Previous commit",
        explanation: "Moves HEAD to a3c8e92, discarding later commits"
      },
      {
        output: "⚠️ WARNING: This permanently deletes commits!",
        explanation: "Use with caution, especially on shared branches"
      }
    ]
  },
  {
    id: "remote",
    command: "git remote",
    description: "Manage set of tracked repositories (add, remove, rename remotes)",
    usage: "git remote add <name> <url> OR git remote -v",
    useCase: "Connect your local repository to remote servers like GitHub. Use to add, remove, or view remote repositories that you sync with.",
    steps: [
      {
        command: "git remote add origin https://github.com/user/repo.git",
        output: "",
        explanation: "Adds a remote named 'origin' pointing to your GitHub repo"
      },
      {
        command: "git remote -v",
        output: "origin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)",
        explanation: "Shows all configured remotes and their URLs"
      }
    ]
  }
];
