function fitness(input) {
    let index = 0;
    let allPeople = Number(input[index++]);
    let activity = input[index];

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let peopleWorkingOut = 0;
    let peopleBuyingProtein = 0;

    for (let i = 1; i <= allPeople; i++) {
        switch (activity) {
            case "Back":
                back++;
                peopleWorkingOut++;
                break;
            case "Chest":
                chest++;
                peopleWorkingOut++;
                break;
            case "Legs":
                legs++;
                peopleWorkingOut++;
                break;
            case "Abs":
                abs++;
                peopleWorkingOut++;
                break;
            case "Protein shake":
                proteinShake++;
                peopleBuyingProtein++;
                break;
            case "Protein bar":
                proteinBar++;
                peopleBuyingProtein++;
                break;
        }
        index++;
        activity = input[index];

    }
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${(peopleWorkingOut/allPeople * 100).toFixed(2)}% - work out`);
    console.log(`${(peopleBuyingProtein/allPeople * 100).toFixed(2)}% - protein`);
}
fitness(['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake',
    'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs'])
