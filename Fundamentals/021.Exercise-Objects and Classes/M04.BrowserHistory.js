function solve(obj, actArr) {
    
    while (actArr.length > 0) {
        let action = actArr.shift();
        if (action === 'Clear History and Cache') {
            obj["Open Tabs"]       = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"]    = [];            
        } else {
            let [command, ...site] = action.split(' ');
            site = site.join(' ');
            if (command === 'Open') {
                    obj["Open Tabs"].push(site);
            } else if(command === 'Close'){
                if( obj["Open Tabs"].includes(site) ) {
                    obj["Open Tabs"].splice(obj["Open Tabs"].indexOf(site), 1);
                    obj["Recently Closed"].push(site);
                }
            }            
            obj["Browser Logs"].push(action)
        }        
    }
    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(', ')}`);
    
}

solve(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google Translate"]
);
// solve(
//   {
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": [
//       "Open Gmail",
//       "Close Gmail",
//       "Open Dropbox",
//       "Open YouTube",
//       "Close Dropbox",
//     ],
//   },
//   ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );
