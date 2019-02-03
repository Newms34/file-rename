const args = process.argv.slice(2),
    // chalk = require('chalk'),
    fs = require('fs'),
    badNames = ['node_modules', 'autoexec.bat', 'package-lock.json', 'package.json', 'frnu.js'],
    flags = ['-b', '-h', '-e', '-r', '-p', '-n'];

// console.log(args);

const getFiles = (bs, lvl = 0) => {
    // console.log('This base is',bs)
    let folderConts = fs.readdirSync(bs).filter(t => !badNames.includes(t)).map(f => {
        // console.log(f)
        let stats = fs.lstatSync(bs + f);
        return { name: f, bd: stats.birthtimeMs, isDir: stats.isDirectory() }
    }).filter(q => {
    	let ext = q.name.slice(q.name.lastIndexOf('.')).toLowerCase();
    	return (ftype.includes(ext)||ftype.includes(ext.slice(1))||ftype.includes('.'+ext)) > 0 && !q.isDir
    }).sort((a, b) => a.bd - b.bd);
    // console.log(rFlag, bs, p, ftype, folderConts);
    folderConts.forEach((f,i) => {
        let filename = f.name.slice(0, f.name.lastIndexOf('.')),
            ext = f.name.slice(f.name.lastIndexOf('.'));
        num++;
        let theNum = pfn?i+1:num;
        theNum = theNum.toString().padStart(5,'0')
        // console.log('rename', base + f.name, base + p + theNum+ext)
        fs.renameSync(bs + f.name, bs + p + theNum + ext)
    })
    const fldrs = fs.readdirSync(bs).filter(q => !!fs.lstatSync(bs + q).isDirectory() && !badNames.includes(q));
    if (rFlag && fldrs.length) {
        fldrs.forEach(t => {
            // console.log('folder', t,'so base is',bs+t+'/, and level is',lvl)
                   getFiles(bs + t + '/', lvl++)
        })

        // console.log(chalk.cyan(num, 'files renamed in',bs))
    } else {
        // console.log(chalk.cyan(num, 'files renamed in',bs))
    }
    if(lvl==0) console.log('Done!')
}
let tFlag, ftype, rFlag, baseLoc, base, p, num = 0,
    pfn;
console.log(' File Rename Node Utility (FRNU) ')
console.log('...please wait...')

if (args.includes('-h')) {
    console.log(' HELP/INFO ')
    console.log('Flags:')
    console.log('-h : Displays this help message\n');
    console.log('-e (required): Specify file extensions(s). If multiple extensions are required (i.e., jpg and jpeg), use a comma-separated list.\n');
    console.log('-r (optional): Recursively analyze subfolders. If present, will look in any subfolders of your current folder.\n');
    console.log('-b (optional): Base folder location (if not current folder).\n');
    console.log(`-n (optional): Per-folder numbering. Restart number system in each subfolder. This will only matter if recursive folder analysis is on. It will also generate duplicate files!.\n`);
    console.log('-p (optional): File prefix.\n')
    process.exit();
} else {
    tFlag = args.indexOf('-e') + 1;
    pfn = args.includes('-n');
    console.log('pfn?',pfn)
    ftype = tFlag > 0 && args[tFlag] && !flags.includes(args[tFlag]) && args[tFlag][0] == '.' ? args[tFlag] : '.ERROR';
    rFlag = args.includes('-r');
    baseLoc = args.indexOf('-b') + 1;
    base = baseLoc > 0 && args[baseLoc] && !flags.includes(args[baseLoc]) ? args[baseLoc] : './';
    p = args.includes('-p') && !!args[args.indexOf('-p') + 1] && !flags.includes(args[args.indexOf('-p') + 1]) ? args[args.indexOf('-p') + 1] : '';
    if(ftype.indexOf(',')>0){
    	ftype=ftype.split(',')
    }else{
    	ftype = [ftype];
    }
    if (tFlag < 1 || ftype == '.ERROR') {
        return console.log('ERROR: You must specify a valid file extension (beginning with ".")!')
    }
    getFiles(base)
}