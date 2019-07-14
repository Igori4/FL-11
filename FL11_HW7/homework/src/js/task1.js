// const users = [
//     {
//         name: 'John',
//         email: 'user@gmail.com',
//         password: 'UserPass'
//     },

//     {
//         name: 'Luke',
//         email: 'admin@gmail.com',
//         password: 'AdminPass'
//     }

// ];

// const minLengthOfEmail = 6;
// const minLengthOfNewPassword = 5;

// let isUser = false;
// let visitor = prompt('Please type your email').trim();
// let password = null;

// if (visitor.length < minLengthOfEmail) {
//     alert('I dont know any emails having name length less than 6 symbols')

// } else if (users.some(user => user.email === visitor)) {
//     visitor = users.find(user => user.email === visitor);

//     password = prompt(`Welcome Our Guest Please type password`)

// } else {
//     alert('I don’t know you”.')
// }

// if (!password) {
//     alert('Canceled')
// } else if (password === visitor.password) {
//     alert(`Welcome back ${visitor.name}`)
//     isUser = true;
// }



// if (isUser) {
//     let changedPassword = confirm('Do you want to change your password?.')

//     if (!changedPassword) {
//         alert('You have failed the change')
//     } else {
//         let oldPassword = prompt(`Please write your current password`)

//         if (!oldPassword || oldPassword !== visitor.password) {
//             alert('wrong Password try again')
//             oldPassword = prompt(`Please write your current password`)
//         } else {
//             let newPassword = prompt('write new password').trim();

//             if (newPassword.length < minLengthOfNewPassword) {
//                 alert('Is to short password, try again');
//                 newPassword = prompt('write new password').trim();
//             } else {
//                 let isSamePassword = prompt('Ok!) please write again').trim();

//                 if (isSamePassword === newPassword) {
//                     visitor.password = newPassword;
//                 }
//             }
//         }
//     }
// }


function addOne(x) {
    return x + 1;
}

function pipe() {
    let args = [...arguments];
    let val = args.shift();
    console.log(args);
    console.log(val)
    // return args.reduce((accum, argsFunc) =>  )
}

console.log(pipe(1, addOne, addOne, addOne))