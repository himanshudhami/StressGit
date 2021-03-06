# Git Commands
**To Clone Repository:**

	git clone https://github.com/himanshudhami/StressGit.git

**To switch to other branch:**

	git checkout –b <branch>

**To check any modifications in local repository:**

	git status
**Incase local repository is behind remote repository then pull the code first and then push changes.**

	Cmd:   git  pull <remote> <branch>
           git push
	Eg:    git pull https://github.com/himanshudhami/StressGit.git  bindup
		   git  push

**Commit files without entering commit message will prompt a window for entering commit message. To close the window, follow the below steps:**

	•	enter your message following the presented guidelines
	•	press Esc to make sure you are out of the insert mode
	•	then type :wqEnter or ZZ.
**If the same file is modified by others and others changes were already pushed in to remote repository:**
 
	a.	pull latest changes:
		git pull https://github.com/himanshudhami/StressGit.git bindup
	b.	push changes
		git push
**To compare local repository with remote repository:**

	git diff bindup origin/bindup
 

**If the same file and word is modified by others and others changes were already pushed in to remote repository:**

	a.	Use “git mergetool” command to resolve conflicts. 
	b.	git commit –m “message”
	c.	git push

**To Create Pull Request:**

	go to https://github.com and create new pull request
	after creating pull request, it can be assigned to individuals for review and merge
	merge branch to other branch can also be done in git hub website

**To reset the working directory to the state of your last commit**

    git reset --hard
**To stash changes, run:**

	git stash

**To apply a stash and remove it from the stash list, run:**

	git stash pop stash@{n}

**To apply a stash and keep it in the stash cache, run:**

	git stash apply stash@{n}