class User {
    constructor(firstName, lastName, email, birthDate, pictures, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.birthDate = birthDate;
        this.pictures = pictures;
        this.gender = gender;
    }

    getHiddenEmail = () => {

        const splitedEmail = this.email.split("@");
        const firstPart = splitedEmail[0].slice(0, 3);
        const secondPart = splitedEmail[0].slice(-3);
        const name = firstPart + "..." + secondPart;
        const hiddenEmail = name + "@" + splitedEmail[1];

        return hiddenEmail;
    }

    getFullName = () => {
        const firstLetterName = this.firstName[0].toUpperCase();
        const firstName = firstLetterName + this.firstName.slice(1);
        const firstLetterSurname = this.lastName[0].toUpperCase();
        const lastName = firstLetterSurname + this.lastName.slice(1);
        return `${firstName} ${lastName}`;
    }

}

export default User;