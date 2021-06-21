﻿/*
//DESCRIPTION: Convert Footnotes to Endnotes  ( Uses the cross-reference function from InDesign )
# Acknowledgements
I derived the idea of using InDesign cross references for endnotes from Peter Kahrel. Peters solution is still a good source of inspiration and can be found here [http://www.kahrel.plus.com/indesign/footnotes.html](http://www.kahrel.plus.com/indesign/footnotes.html)

@Version: 3.0 
@Date: 2017-03-01
@Author: Gregor Fellenz https://www.publishingx.de/
*/

/*
    InDesign endnote solution based on scripting and cross references. 
    Copyright (C) 2015  Gregor Fellenz

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//@include lib/idEndnotes.jsx

//~ #targetengine "indesign_endnotes" 

if ($.global.hasOwnProperty ("initLog") && $.global.hasOwnProperty ("createEndnotes") ) {
	initLog();
	checkAndStart(["createEndnotes"]);
//~ 	app.doScript(checkAndStart, ScriptLanguage.JAVASCRIPT, ["createEndnotes"], UndoModes.ENTIRE_SCRIPT, localize({en:"Create Endnotes",de:"Endnoten erstellen"}));
}
else {
	alert(localize({en:"InDesign Endnotes is not installed properly",de:"InDesign Endnotes ist nicht richtig installiert!"}));
}

