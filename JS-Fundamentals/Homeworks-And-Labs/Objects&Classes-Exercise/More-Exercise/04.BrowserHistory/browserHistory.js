function browser(obj, arr) {

    for (let line of arr) {
        if (line === "Clear History and Cache") {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        } else {
            let current = line.split(' ');
            let [action, site] = current;
            if (action === 'Open') {
                obj['Open Tabs'].push(site);
                obj['Browser Logs'].push(line);
            } else if (action === 'Close') {
                if (obj['Open Tabs'].includes(site)) {
                    let index = obj['Open Tabs'].indexOf(site);
                    let removed = obj['Open Tabs'].splice(index, 1).shift();
                    obj['Recently Closed'].push(removed);
                    obj['Browser Logs'].push(line);
                }
            }
        }
    }
    print(obj);

    function print(object) {
        console.log(obj['Browser Name']);
        console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
        console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
        console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);

    }
}
browser({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)


// ({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"])