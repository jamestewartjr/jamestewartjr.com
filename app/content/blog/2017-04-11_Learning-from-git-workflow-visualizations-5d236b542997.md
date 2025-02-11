---
title: Learning from git workflow visualizations
description: I have been teaching myself to code and I knew a few git things
pubDate: '2017-04-11T09:15:25.717Z'
categories: []
keywords: []
slug: learning-from-git-workflow-visualizations
---

I have been teaching myself to code — both personally and with the support of the community at [Learners Guild](https://www.learnersguild.org/). One of the most difficult things I have had trouble with has been picturing how git works and workflows. I’ve personally chosen to not use [Oh My Zsh](http://ohmyz.sh/) because I want to learn the git commands and to see the errors that happen when I make mistakes (learning FTW!).

I still get an exciting feeling from my git log graphs during projects. I had to learn the commands to get this graph exactly how I wanted it. For instance this one:

git log --oneline --graph --decorate --color --all

![The result of that long git log command](https://cdn-images-1.medium.com/max/800/1*tB6k82yLITZftkRLGsgLaw.png)
The result of that long git log command

I find all of this information useful and colorful! This is a standard [Oh My Zsh glog command](https://github.com/robbyrussell/oh-my-zsh/wiki/Cheatsheet), but I like knowing more about how it works.

Recently, I came across a [git workflow visual](https://visualize-your-git.herokuapp.com/) tool by [Julia Evans](https://twitter.com/b0rk). This one is related to my personal bash history. Instead of looking at the history of a project I see a visual of my most recent git commands period. It would be very interesting to see what commands I use most after 3 years of engineering experience or even 7!

![My git workflow visual from Julia Evan’s tool](https://cdn-images-1.medium.com/max/800/1*pmVZWEXJMW90aslzqq7fqA.png)
My git workflow visual from Julia Evan’s tool

I think it’s interesting that I check the status most often with its typing errors. 😒 In the future, I will configure bash to eliminate some of those keystrokes and mistakes. Naturally, it makes sense that my flow — boldest colors — would be \[git\] status (31%) > add > commit. Push, remote, checkout, and log also appear frequently in my visual.

If you plan on using the visualizer, here are the steps I used.

history | awk ‘$2 == “git” {print $1 “ “ $3}’ > history.txt

1.  Run the command in your terminal. It reads your bash history, compares that history for the ‘git’ string. Taking the field after git (log, status, etc) and posts that to a file. In this case, history.txt. You can change that file name to any file name you want.
2.  Open the file.
3.  Copy all of the contents of the file into the “Your history” box on Julia’s webpage.
4.  Stare at your visual! 👌🏿

Did you find anything interesting from your recent bash history? Do you have any git visualizer tricks or tools you want share?