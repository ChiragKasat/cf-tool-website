var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
	loop: false,
	delay: 75,
	autoStart: true,
	cursor: '█',
	strings: []
});

typewriter
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span>`)
	.typeString(`cf contest 1602<br />`)
	.pauseFor(100)
	.pasteString(`<span class='green-txt'>1602 Folder created...</span><br />`)
	.pauseFor(100)
	.pasteString(`<span class='green-txt'>Parsed problem A...</span><br />`)
	.pauseFor(100)
	.pasteString(`<span class='green-txt'>Parsed problem B...</span><br />`)
	.pasteString(`<span class='green-txt'>Parsed problem C...</span><br />`)
	.pauseFor(400)
	.pasteString(`<span class='green-txt'>Parsed problem D...</span><br />`)
	.pauseFor(200)
	.pasteString(`<span class='green-txt'>Parsed problem E...</span><br />`)
	.pasteString(`<span class='green-txt'>Parsed problem F...</span><br />`)
	.pasteString(`<br /><span>Done. All the best!</span><br />`)
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span>`)
	.pauseFor(750)
	.typeString(`cd 1602<br />`)
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span>`)
	.pauseFor(700)
	.typeString(`ls<br />`)
	.pasteString(`A.cpp B.cpp C.cpp D.cpp E.cpp F.cpp<br />`)
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span>`)
	.pauseFor(500)
	.typeString(`vim A.cpp<br />`)
	.changeDelay(20)
	.typeString(
		`The file is already populated with your template, now write the code using your favourite editor`
	)
	.pauseFor(100)
	.changeDeleteSpeed(1)
	.deleteChars(96)
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span>`)
	.changeDelay(75)
	.typeString(`cf test a<br />`)
	.pasteString(`<span class='cyan-txt'>Compiling...</span><br />`)
	.pauseFor(500)
	.pasteString(`<span class='green-txt'>Compiled ✔️</span><br /><br />`)
	.pasteString(`<span class='cyan-txt'>Running Test 0</span><br />`)
	.pauseFor(600)
	.pasteString(`<span class='gray-txt'>c f</span><br />`)
	.pasteString(`<span class='gray-txt'>a aaa</span><br />`)
	.pasteString(`<span class='gray-txt'>b therightboiler</span><br /><br />`)
	.pauseFor(100)
	.pasteString(`<span class='green-txt'>Passed ✔️</span><br />`)
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span>`)
	.pauseFor(1000)
	.typeString(`cf submit a<br />`)
	.pauseFor(800)
	.pasteString(`<span class='green-txt'>Submitted Successfully ✔️</span><br />`)
	.pasteString(`Submitted At: 24th February, 19:31 GMT+05:30<br />`)
	.pasteString(`Problem: A - Two Subsequences<br />`)
	.pasteString(`Language: GNU C++17<br />`)
	.pauseFor(1200)
	.pasteString(`<span class='green-txt'>Accepted</span><br />`)
	.pasteString(`Time: 15 ms<br />`)
	.pasteString(`Memory: 0 KB<br />`)
	.pasteString(`<span class='yellow-txt'>chirag@chirag:~$ </span><br /><br />`)
	.pauseFor(200)
	.typeString(
		`Give it a try! Visit the <a class='green-txt underline' target='_blank' href='https://github.com/ChiragKasat/Codeforces-Utility-Tool'>GitHub link</a>.`
	);
