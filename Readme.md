API Bridge: stresstest
===============================
Dummy API Bridge Layer

# Links #


# Project Architecture #

## Where Does the API Bridge Fit In? ## test modify Bindup

Clone Repository:
git clone https://github.com/himanshudhami/StressGit.git
Switch to other branch:
git checkout –b <branch>
To see the modifications:
git status
Incase local repository is behind remote repository then pull the code first and then push changes.
Cmd:   git  pull <remote> <branch>
            git push
	Eg:      git pull https://github.com/himanshudhami/StressGit.git  bindup
git  push
Commit files without entering commit message will prompt a window for entering commit message. To close the window, follow the below steps:
•	enter your message following the presented guidelines
•	press Esc to make sure you are out of the insert mode
•	then type :wqEnter or ZZ.
If the same file is modified by others and others changes were already pushed in to remote repository:
 
a.	pull latest changes:
git pull https://github.com/himanshudhami/StressGit.git bindup
b.	push changes
git push
To compare local repository with remote repository:
git diff bindup origin/bindup
 

If the same file and word is modified by others and others changes were already pushed in to remote repository:
a.	Use “git mergetool” to resolve conflicts. Since I have tortoise client(free version) in my machine, differences were shown in new tortoise merge window.
 
b.	git commit –m “message”
c.	git push

