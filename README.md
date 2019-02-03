# File Rename Node Utility (FRNU)

### Contents:
 - [About](#about)
 - [Installation and Running](#installation-and-running)
 - [Flags](#flags)
 - [Caution](#caution)
 - [Credits](#credits)

---
### About 
File Rename Node Utility (FRNU) is a simple utility to batch-rename files using an optional `prefix` and numbering system, leveraging NodeJS's `fs` module.

---
### Installation
You really just need NodeJS and the `frnu.js` file. Just drop that file (`git clone` or download) in the base of whatever folder you wanna rename the files of, and run it as a normal node module:
1. Open a command prompt.
2. Type `node frnu.js` then some flags (see below).
If you get an error that node is not a valid program, you didn't install node. So, go do that.
Oh, and if you're wondering, no, there are no other required packages. You're welcome.

---
### Flags
 * `-h`: Displays the list of available flags. Basically, this section.
 * `-e`: *REQUIRED*! Can either be a single extension (i.e., `jpg`), or multiple extensions (`jpg,jpeg,png`). If multiple, separate them by *only* a comma (no space!). You can either include or omit the period. 
     * **Examples**: `-e .txt`, `-e .txt,jpg,png`, `-e jpg,.psd,.dat`
 * `-r`: Optional. Recursively rename files in subfolders. 
     * **Examples**: `-r` (or omitted)
 * `-b`: Optional. Base folder. If not set, it'll just use the folder you're currently in (i.e., where `frnu.js` lives).
     * **Examples**: `-b c:\mypics` (or omitted)
 * `-n` Optional. Per-folder numbering. If this is set (and recursive renaming is on), each subfolder's numbering will start from zero. Otherwise, it'll name files from 1 to however many *total* files there are.
     * **Examples**: `-n` (or omitted)
 * `-p` Optional, but *highly* recommended file 'prefix'. If included, it'll name files as `prefix + number + extension`.
     * **Examples**: `-e wedding` (names for example jpg files `wedding1.jpg`,`wedding2.jpg`, etc.)

---
### Caution
You use this at your own risk. I *cannot* guarantee that misuse (or even 'proper' use!) of this app will not cause your files to be deleted, your dog to leave you, or your computer to explode. As always, 
## ☞*Back up your stuff!*  ☜

---
### Credits
Made by me, [David Newman](https://github.com/Newms34)