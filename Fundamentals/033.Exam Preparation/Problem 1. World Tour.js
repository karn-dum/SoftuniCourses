function solve(inp) {
    
    let stops = inp.shift();

    while ( inp.length > 0  ) {
        let commandLine = inp.shift();
        if ( commandLine == 'Travel' ) break;
        let [command, index, string] = commandLine.split(':');
        if ( command == 'Add Stop' ) {
            index = Number(index) ;
            if ( isValid( stops, index )) {
                let s1 = stops.slice(0, index);
                let s2 = stops.slice(index);
                stops = s1 + string + s2;
                console.log(stops);                
            }
            
        } else if ( command == 'Remove Stop' ) {
            start_index = Number(index) ;
            end_index   = Number(string) ;
            if ( isValid( stops, start_index ) && isValid( stops, end_index ) ) {
                let s1 = stops.slice(0, start_index);
                let s2 = stops.slice(end_index + 1);
                stops = s1 + s2;
                console.log(stops);                
            }

        } else if ( command == 'Switch' ) {
            let oldString = index;
            let newString = string;
            let pattern = new RegExp(oldString, 'g');
            stops = stops.replace(pattern, newString);
            // let start_index = stops.indexOf(str1);
            // let end_index = str1.length;
            // let s1 = stops.slice(0, start_index);
            // let s2 = stops.slice(end_index);
            // stops = s1 + str2 + s2;
            console.log(stops);  
        }         
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);


// ---------------- 
function isValid(string, index) {
    if (index >= 0 && index < string.length) return true;
    return false;
}
}
solve(['Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
    ]);