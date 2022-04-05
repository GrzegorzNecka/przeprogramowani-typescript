// /https://www.youtube.com/watch?v=puOKhYcPg-0&list=PLfE0DpqEANZ0CQ9pCGlxGKPvYb1Sj6ybV&index=2

enum Proficiency {
    Junior = "JUNIOR",
    Regular = "REGULAR",
    Expert = "EXPERT",
}

interface Candidate {
    firstName: string;
    lastName: string;
    emailAddress: string;
    age: number;
    mainLanguage: string;
    proficiency: Proficiency;
    hobbies: string[];
}

const candidate = {
    firstName: "Jhon",
    lastName: "Doe",
    emailAddress: "jhon.doe@com",
    age: 29,
    mainLanguage: "C#",
    proficiency: Proficiency.Expert,
    hobbies: ["sport", "netflix", "boks"],
};

interface Validator {
    isValid(candidate: Candidate): boolean;
}

class EmailValidator implements Validator {
    constructor(protected readonly minLength: number) {
        // this.minLength = minLength;
    }

    isValid(candidate: Candidate): boolean {
        throw new Error("Method not implemented.");
    }

    isVaLid({ emailAddress }: Candidate): boolean {
        return emailAddress != null && emailAddress.length > this.minLength;
    }
}

class ProficiencyValidator implements Validator {
    constructor(protected readonly candidate: Pick<Candidate, "age" | "proficiency">) {}

    isValid(candidate: Candidate): boolean {
        throw new Error("Method not implemented.");
    }

    isVaLid({ proficiency }: Candidate): boolean {
        if (this.candidate.age < 25) {
            return true;
        }

        return proficiency !== Proficiency.Junior && proficiency !== Proficiency.Regular;
    }
}

function getName({ firstName, lastName }: Candidate): string {
    return `${firstName} ${lastName}`;
}

function processCandidate(candidate: Candidate) {
    const fullName = getName(candidate);

    const validators = [new EmailValidator(10), new ProficiencyValidator(candidate)];

    const isValid = validators.every((validator) => validator.isVaLid(candidate));

    if (!isValid) {
        return;
    }

    // if (candidate.age.length < 2) {
    //     console.log("you are too young");
    //     return;
    // }
}

processCandidate(candidate);
