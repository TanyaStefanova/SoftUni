function passwordReset(arr) {
    let password = arr.shift();

    let command = arr.shift();
    while (command !== 'Done') {
        if (command === 'TakeOdd') {
            let newPass = '';
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    newPass += password[i];
                }
            }
            password = newPass;
            console.log(password);
        } else if (command.includes('Cut')) {
            let [action, index, length] = command.split(' ');
            index = Number(index);
            length = Number(length);
            let cut = password.substring(index, index + length);
            password = password.replace(cut, '');
            console.log(password);
        } else if (command.includes('Substitute')) {
            let [action, sub, substit] = command.split(' ');
            if (!password.includes(sub)) {
                console.log('Nothing to replace!');
            } else {
                while (password.includes(sub)) {
                    password = password.replace(sub, substit);
                }
                console.log(password);
            }

        }
        command = arr.shift();
    }

    console.log(`Your password is: ${password}`);
}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])