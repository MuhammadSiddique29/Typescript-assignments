let current_users: string[] = ["Danish", "Momin", "Ali", "ammar", "Usama", "Kabeer"]
let new_users: string[] = ["Zeeshan", "Asad", "Ammar", "Ghazi", "Shaheer", "daNish"]


new_users.forEach(new_user => {

    let userNameTaken = current_users.some((current_user) => 
        current_user.toLowerCase() === new_user.toLowerCase()
    )

    if(userNameTaken){
        console.log(`${new_user} needs to choose a new username because it's already taken`)
    }
    else{
        console.log(`${new_user} is the new member added`)
        current_users.push(new_user)
    }
})

console.log(current_users)