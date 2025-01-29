function solve(inp) {
    let actions = {
        'Move': move,
        'Insert': insert,
        'ChangeAll' : changeAll
    }

    let orgMessage = inp.shift();
    while ( inp[0] !==  'Decode') {
        let [ command, index, value ] = inp.shift().split('|');
        actions[command](index, value)
    }
    console.log(`The decrypted message is: ${orgMessage}`);


    //-----------------------------
    function move(index) {
        index = Number(index);
        if( Number.isNaN(index) ) return;
        let s1 = orgMessage.slice(0 , index);
        let s2 = orgMessage.slice(index);
        orgMessage = s2 + s1;
    }
    function insert(index, value) {
        index = Number(index);
        if( Number.isNaN(index) ) return;
        let s1 = orgMessage.slice(0 , index);
        let s2 = orgMessage.slice(index);
        orgMessage = s1 + value + s2;
    }
    function changeAll(oldString, newString) {
        // let pattern = new RegExp(oldString, "g");
        // orgMessage = orgMessage.replace(pattern,newString);        
        orgMessage = orgMessage.split(oldString).join(newString);
    }   

}

solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3","Decode"]);
solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
